import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ContactInput } from '../lib/contact';

export const submitContactForm = async (data: ContactInput) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_submissions'), {
      name: data.name,
      email: data.email,
      message: data.message,
      projectType: data.projectType || "",
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error('Error adding document: ', error);
    return { success: false, error: error.message || 'Failed to submit form' };
  }
};
