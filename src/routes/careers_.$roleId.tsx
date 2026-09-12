import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { ArrowLeft, ArrowRight, Briefcase, Clock, MonitorSmartphone, Layers, Video, FileText, UploadCloud } from "lucide-react";
import { submitCareerApplication } from "../services/careerService";

export const Route = createFileRoute("/careers_/$roleId")({
  component: RoleApplicationPage,
});

const ROLE_DATA: Record<string, any> = {
  "full-stack-developer": {
    title: "Full Stack Developer",
    icon: Layers,
    overview: "We are looking for a passionate Full Stack Developer to build complete digital solutions. You will work across the entire stack—from intuitive frontends to scalable backends and robust APIs. Join our engineering team to architect, develop, and maintain modern web applications that deliver exceptional value.",
    responsibilities: [
      "Build responsive, high-performance web applications",
      "Work with modern frontend frameworks and backend technologies",
      "Develop secure and scalable APIs",
      "Design and optimize database architectures",
      "Collaborate with cross-functional teams to deliver real-world digital products",
      "Write clean, maintainable, and well-tested code"
    ],
    info: [
      { label: "Department", value: "Engineering" },
      { label: "Role Type", value: "Full-Time" },
      { label: "Work Model", value: "Hybrid / Remote" }
    ]
  },
  "app-developer": {
    title: "App Developer",
    icon: MonitorSmartphone,
    overview: "We are seeking a creative and skilled App Developer to build intuitive and engaging mobile experiences. You will be responsible for designing and implementing responsive applications that run seamlessly on mobile devices. Work closely with our product and design teams to bring modern app concepts to life.",
    responsibilities: [
      "Create intuitive, responsive, and engaging mobile applications",
      "Work with modern app development technologies and frameworks",
      "Integrate mobile apps with backend services and APIs",
      "Optimize application performance and ensure high quality",
      "Collaborate on UI/UX design implementation",
      "Troubleshoot, debug, and maintain existing mobile applications"
    ],
    info: [
      { label: "Department", value: "Engineering" },
      { label: "Role Type", value: "Full-Time" },
      { label: "Work Model", value: "Hybrid / Remote" }
    ]
  },
  "video-editor": {
    title: "Video Editor",
    icon: Video,
    overview: "We are looking for a talented Video Editor to craft compelling visual stories. You will be responsible for editing engaging video content, adding visual effects, and transforming creative ideas into polished digital experiences. Bring your creative vision to our marketing and content teams.",
    responsibilities: [
      "Create compelling visual content and edit engaging videos",
      "Transform raw footage into polished, professional digital experiences",
      "Work with motion graphics, sound design, and color grading",
      "Collaborate with the creative team to develop video concepts",
      "Manage multiple video projects and meet production deadlines",
      "Stay up-to-date with the latest video editing trends and tools"
    ],
    info: [
      { label: "Department", value: "Creative / Marketing" },
      { label: "Role Type", value: "Full-Time" },
      { label: "Work Model", value: "Hybrid / Remote" }
    ]
  }
};

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  yearOfGraduation: string;
  gender: string;
  experienceInYears?: string;
  currentLocation: string;
  preferredLocation: string;
  resume: FileList;
}

function RoleApplicationPage() {
  const { roleId } = Route.useParams();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success'|'error', text: string} | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const role = ROLE_DATA[roleId];
  const roleName = role?.title || roleId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<ApplicationFormData>();

  const selectedResume = watch('resume');
  const selectedFile = selectedResume?.[0];

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setValue('resume', e.dataTransfer.files, { shouldValidate: true });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const file = data.resume?.[0];
      if (!file) {
        setSubmitMessage({ type: 'error', text: 'Please select a resume to upload' });
        setIsSubmitting(false);
        return;
      }
      
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setSubmitMessage({ type: 'error', text: 'Please upload a PDF or DOC/DOCX file' });
        setIsSubmitting(false);
        return;
      }
      
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setSubmitMessage({ type: 'error', text: 'Resume file size must be less than 5MB' });
        setIsSubmitting(false);
        return;
      }

      const applicationData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        yearOfGraduation: data.yearOfGraduation,
        gender: data.gender,
        experienceInYears: data.experienceInYears,
        currentLocation: data.currentLocation,
        preferredLocation: data.preferredLocation,
        appliedRole: roleName
      };

      const result = await submitCareerApplication(applicationData, file);
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: 'Application submitted successfully! We will get back to you soon.' });
        reset();
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Failed to submit application. Please try again.' });
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmitMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    }
    
    setIsSubmitting(false);
  };

  if (!role) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Role Not Found</h1>
        <Link to="/careers" className="text-primary hover:underline">Return to Careers</Link>
      </div>
    );
  }

  const RoleIcon = role.icon;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" tabIndex={-1}>
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center items-center">
          <div className="bg-primary/10 absolute -top-40 size-[min(800px,100vw)] rounded-full blur-[120px]" />
          <div className="bg-purple-500/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px]" />
        </div>

        <div className="site-container max-w-5xl mx-auto relative z-10">
          <Link to="/careers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          {/* Top Section */}
          <div data-aos="fade-up" className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              CAREER OPPORTUNITY
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <RoleIcon className="w-7 h-7" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {role.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {role.overview.split('.')[0]}.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            
            {/* Left Side: Role Details */}
            <div className="lg:col-span-2 space-y-10">
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Role Overview</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {role.overview}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="150">
                <h2 className="text-2xl font-bold mb-4 text-foreground">What You'll Work On</h2>
                <ul className="space-y-3">
                  {role.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Role Information Card */}
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
              <div className="glass rounded-2xl p-6 md:p-8 border border-border/50 bg-card/60 backdrop-blur-sm shadow-sm sticky top-32">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Role Information
                </h3>
                <div className="space-y-5">
                  {role.info.map((infoItem: any, idx: number) => (
                    <div key={idx} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{infoItem.label}</p>
                      <p className="text-base font-semibold text-foreground">{infoItem.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interested / Apply Button */}
          {!showForm && (
            <div data-aos="fade-up" className="flex justify-center border-t border-border/50 pt-16">
              <button 
                onClick={handleApplyClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 group"
              >
                I'm Interested
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Application Form */}
          {showForm && (
            <div id="application-form" className="border-t border-border/50 pt-16 mt-8" data-aos="fade-up">
              <div className="glass rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden bg-card/60 backdrop-blur-sm max-w-3xl mx-auto">
                
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Apply for {role.title}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">First Name *</label>
                      <input 
                        {...register('firstName', { required: "First name is required" })}
                        type="text" 
                        placeholder="John" 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.firstName && <span className="text-xs text-rose-500 mt-1">{errors.firstName.message}</span>}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <input 
                        {...register('lastName', { required: "Last name is required" })}
                        type="text" 
                        placeholder="Doe" 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.lastName && <span className="text-xs text-rose-500 mt-1">{errors.lastName.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input 
                        {...register('email', { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.email && <span className="text-xs text-rose-500 mt-1">{errors.email.message}</span>}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input 
                        {...register('phone', { 
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9+\-\s()]{7,20}$/,
                            message: "Invalid phone number format"
                          }
                        })}
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.phone && <span className="text-xs text-rose-500 mt-1">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Year of Graduation *</label>
                      <input 
                        {...register('yearOfGraduation', { required: "Year of graduation is required" })}
                        type="number" 
                        placeholder="e.g. 2024" 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.yearOfGraduation && <span className="text-xs text-rose-500 mt-1">{errors.yearOfGraduation.message}</span>}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Gender *</label>
                      <select 
                        {...register('gender', { required: "Gender is required" })}
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all appearance-none cursor-pointer" 
                      >
                        <option value="" className="bg-background text-muted-foreground">Select Gender</option>
                        <option value="male" className="bg-background">Male</option>
                        <option value="female" className="bg-background">Female</option>
                        <option value="prefer-not" className="bg-background">Prefer not to say</option>
                      </select>
                      {errors.gender && <span className="text-xs text-rose-500 mt-1">{errors.gender.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-foreground mb-2">Experience In Years</label>
                    <input 
                      {...register('experienceInYears')}
                      type="number" 
                      placeholder="e.g. 3" 
                      step="0.5"
                      className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Current Location *</label>
                      <input 
                        {...register('currentLocation', { required: "Current location is required" })}
                        type="text" 
                        placeholder="City, Country" 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.currentLocation && <span className="text-xs text-rose-500 mt-1">{errors.currentLocation.message}</span>}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">Preferred Location *</label>
                      <input 
                        {...register('preferredLocation', { required: "Preferred location is required" })}
                        type="text" 
                        placeholder="Remote, City, etc." 
                        className="w-full bg-transparent border-b-[1.5px] border-border py-3 text-foreground focus:outline-none focus:border-b-2 focus:border-primary transition-all placeholder:text-muted-foreground" 
                      />
                      {errors.preferredLocation && <span className="text-xs text-rose-500 mt-1">{errors.preferredLocation.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-foreground mb-2">Resume / CV Upload *</label>
                    
                    {selectedFile ? (
                      <div className="w-full border border-border/50 rounded-xl p-4 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{selectedFile.name}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {selectedFile.type === 'application/pdf' ? 'PDF' : selectedFile.name.endsWith('.docx') ? 'DOCX' : 'DOC'} • {(selectedFile.size / (1024 * 1024)).toFixed(1)} MB
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setValue('resume', undefined as unknown as FileList, { shouldValidate: true });
                            }}
                            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
                          >
                            Remove
                          </button>
                          <span className="w-px h-4 bg-border/50"></span>
                          <label htmlFor="resume-upload" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer">
                            Change
                          </label>
                        </div>
                      </div>
                    ) : (
                      <label 
                        htmlFor="resume-upload"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative w-full border-2 border-dashed rounded-xl p-8 transition-all flex flex-col items-center justify-center text-center group cursor-pointer
                          ${isDragging ? 'border-primary bg-primary/5' : 'border-border/60 hover:border-primary/50 hover:bg-card/50'}`}
                      >
                        <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center transition-colors
                          ${isDragging ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary group-hover:bg-primary/20'}`}>
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        
                        <p className="text-base font-semibold text-foreground mb-1">Upload your resume</p>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          Drag & drop your file here, or{' '}
                          <span className="text-primary font-semibold group-hover:underline">Browse files</span>
                        </p>
                        
                        <p className="text-xs font-medium text-muted-foreground/70 bg-secondary/50 px-3 py-1 rounded-full">
                          PDF, DOC, DOCX • Max 5MB
                        </p>
                      </label>
                    )}

                    <input 
                      id="resume-upload"
                      {...register('resume', { required: "Please select a file to upload" })}
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      className="sr-only" 
                    />
                    
                    {errors.resume && <span className="text-xs text-rose-500 mt-2">{errors.resume.message}</span>}
                  </div>

                  {submitMessage && (
                    <div className={`p-4 rounded-xl text-sm font-medium border ${submitMessage.type === 'success' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                      {submitMessage.text}
                    </div>
                  )}

                  <div className="mt-4 flex justify-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Processing...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
