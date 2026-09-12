import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { sendCareerApplicationNotifications } from "../server-actions";

export interface CareerApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  yearOfGraduation: string;
  gender: string;
  experienceInYears?: string;
  currentLocation: string;
  preferredLocation: string;
  appliedRole: string;
}

export const submitCareerApplication = async (data: CareerApplicationData, resumeFile: File) => {
    console.log("[Career Application] received application for role:", data.appliedRole);
    console.log("[Career Application] Firestore collection used: career_applications");
    
    // 1. Save document to Firestore first
    const applicationsRef = collection(db, "career_applications");
    let docRef;
    try {
      docRef = await addDoc(applicationsRef, {
        ...data,
        resumeFileName: resumeFile.name,
        createdAt: serverTimestamp(),
      });
      console.log("[Career Application] Firestore write success. Document ID:", docRef.id);
    } catch (dbErr: any) {
      console.error("[Career Application] Firestore write failure:", dbErr);
      throw new Error("Failed to save application data. Please try again.");
    }

    // 2. Convert file to base64
    const fileBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(resumeFile);
    });

    // 3. Send email with attachment via server action
    let emailResult;
    try {
      emailResult = await sendCareerApplicationNotifications({
        data: {
          ...data,
          resumeFileName: resumeFile.name,
          resumeContentBase64: fileBase64,
          resumeMimeType: resumeFile.type,
          resumeSize: resumeFile.size
        }
      });
    } catch (emailErr: any) {
      console.error("[Career Application] Email dispatch failure:", emailErr);
      return { success: false, error: "Application was saved, but we failed to send the confirmation email." };
    }

    if (!emailResult.success) {
      console.error("[Career Application] Resend email failure:", emailResult.error);
      return { success: false, error: "Application was saved, but email delivery failed: " + emailResult.error };
    }

    console.log("[Career Application] applicant & admin email success");

    return { success: true, id: docRef.id };
  };
