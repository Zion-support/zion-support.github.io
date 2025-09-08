import React, { _useState } from "react";
import { _useForm, _useFieldArray } from "react-hook-form";
import { _zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { _useNavigate } from "react-router-dom";
import { 
  _Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage 
} from "@/components/ui/form";
import { _Input } from "@/components/ui/input";
import { _Textarea } from "@/components/ui/textarea";
import { _Button } from "@/components/ui/Button";
import { 
  _Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue 
} from "@/components/ui/select";
import { _AspectRatio } from "@/components/ui/aspect-ratio";
import { _Separator } from "@/components/ui/separator";
import { _toast } from "@/components/ui/use-toast";
import { 
  _User, _Briefcase, _Star, _Calendar, _Globe, _DollarSign, _FileText, _Link, _Upload, _ArrowRight, _ArrowLeft, 
  _Trash2, _Plus, _CheckCircle2
} from "lucide-react";
import { _useAuth } from "@/hooks/useAuth";
import { _useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer";
import { _supabase } from "@/integrations/supabase/client";

// Define the form schema with validation
const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.any().optional(),
  }),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required"),
        description: z.string().min(10, "Project description is required"),
      })
    ).min(1, "Add at least one key project"),
    yearsOfExperience: z.string().min(1, "Years of experience is required"),
  }),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2, "Add at least one skill"),
    toolsUsed: z.string().optional(),
  }),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1, "Select your availability"),
    timezone: z.string().min(1, "Timezone is required"),
    hourlyRate: z.string().optional(),
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5, "URL is required"),
      })
    ).optional().default([]),
    cv: z.any().optional(),
  }),
});

type TalentFormValues = z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {
  const { _user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  
  const { _enhanceProfile, _isGenerating } = useTalentProfileEnhancer();
  
  const totalSteps = 4;
  
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema),
    defaultValues: {
      basicInfo: {
        fullName: user?.displayName || "",
        professionalTitle: "",
        profilePicture: undefined,
      },
      experience: {
        bio: "",
        keyProjects: [{ title: "", description: "" }],
        yearsOfExperience: "",
      },
      skills: {
        skillsList: "",
        toolsUsed: "",
      },
      availability: {
        availabilityType: "",
        timezone: "",
        hourlyRate: "",
        portfolioLinks: [{ url: "" }],
        cv: undefined,
      },
    },
    mode: "onChange",
  });
  
  const { fields: projectFields, append: appendProject, remove: removeProject } = 
    useFieldArray({
      name: "experience.keyProjects",
      control: form.control,
    });
    
  const { fields: linkFields, append: appendLink, remove: removeLink } = 
    useFieldArray({
      name: "availability.portfolioLinks",
      control: form.control,
    });

  // Handle profile picture upload
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file);
  };

  // Handle CV upload
  const handleCvUpload = async (_file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`;
    const { error: cvError } = await supabase.storage
      .from('resumes')
      .upload(fileName, file);
      
    if (cvError) {
      console.error("Error uploading CV:", cvError);
      throw new Error("Failed to upload CV");
    }
    
    // Get the public URL
    const { data: { _publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);
    
    return publicUrl;
  };

  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null;
}