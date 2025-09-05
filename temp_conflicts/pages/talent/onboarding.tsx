import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileData {
  name: string;
  type: string;
  size: number;
  base64: string; // data URL
}

interface OnboardingFormData {
  fullName: string;
  professionalTitle: string;
  profilePicture?: FileData | null;

  bio: string;
  projects: string;
  yearsOfExperience: string; // keep as string for input, convert on submit

  skills: string;
  tools: string;

  availability: 'Full-time' | 'Part-time' | 'Project-based' | '';
  timezone: string;
  hourlyRate?: string;
  portfolioLinks?: string;
  cvFile?: FileData | null;
}

const steps = [
  'Basic Info',
  'Experience',
  'Skills & Tech',
  'Availability'] as const;

type StepKey = typeof steps[number];

const containerVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 }};

function useInitialFormState(): OnboardingFormData {
  return {
    fullName: '',
    professionalTitle: '',
    profilePicture: null,
    bio: '',
    projects: '',
    yearsOfExperience: '',
    skills: '',
    tools: '',
    availability: '',
    timezone: '',
    hourlyRate: '',
    portfolioLinks: '',
    cvFile: null};
}

async function fileToBase64(file: File): Promise<FileData> {
  const toBase64 = (fileInner: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileInner);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  const base64 = await toBase64(file);
  return {
    name: file.name,
    type: file.type,
    size: file.size,
    base64};
}

export default function TalentOnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>(useInitialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentStep: StepKey = steps[stepIndex];
  const progressPercent = useMemo(() => ((stepIndex + 1) / steps.length) * 100, [stepIndex]);

  function nextStep() {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  }
  function prevStep() {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  }

  function update<K extends keyof OnboardingFormData>(key: K, value: OnboardingFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function requiredMissingForStep(): string | null {
    if (currentStep === 'Basic Info') {
      if (!formData.fullName.trim()) return 'Full Name is required.';
      if (!formData.professionalTitle.trim()) return 'Professional Title is required.';
    }
    if (currentStep === 'Experience') {
      if (!formData.bio.trim()) return 'Short Bio is required.';
      if (!formData.yearsOfExperience.trim()) return 'Years of Experience is required.';
    }
    if (currentStep === 'Skills & Tech') {
      if (!formData.skills.trim()) return 'Please list at least one skill.';
    }
    if (currentStep === 'Availability') {
      if (!formData.availability) return 'Please select your current availability.';
      if (!formData.timezone.trim()) return 'Preferred Timezone is required.';
    }
    return null;
  }

  async function handleSubmit() {
    const missing = requiredMissingForStep();
    if (missing) {
      setErrorMessage(missing);
      return;
    }
    setErrorMessage(null);
    setSubmitting(true);
    try {
      const response = await fetch('/api/talent/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData })});
      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      setErrorMessage('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className=&quot;min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-6&quot;>
        <div className=&quot;max-w-xl w-full bg-glass/60 rounded-2xl p-8 shadow-xl border border-[var(--border-primary)] animate-fade-in&quot;>
          <div className=&quot;text-center space-y-3&quot;>
            <h1 className=&quot;text-2xl md:text-3xl font-semibold text-high-contrast&quot;>Thanks! We’re using AI to optimize your profile.</h1>
            <p className=&quot;text-high-contrast-secondary&quot;>You’ll appear in search results shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=&quot;min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-4 md:p-8&quot;>
      <div className=&quot;w-full max-w-3xl&quot;>
        <div className=&quot;mb-6&quot;>
          <h1 className=&quot;text-2xl md:text-3xl font-semibold&quot;>Zion AI Marketplace: Talent Onboarding</h1>
          <p className=&quot;text-high-contrast-muted mt-1&quot;>Create your public profile in a few quick steps.</p>
        </div>

        <div className=&quot;w-full h-2 bg-[var(--border-secondary)] rounded-full overflow-hidden mb-6&quot;>
          <div className=&quot;h-full bg-[var(--text-accent)] transition-all duration-500&quot; style={{ width: `${progressPercent}%` }} />
        </div>

        {errorMessage && (
          <div className=&quot;mb-4 rounded-lg border border-[var(--border-error)] text-high-contrast-error px-4 py-3 bg-[rgba(239,68,68,0.1)]&quot;>
            {errorMessage}
          </div>
        )}

        <div className=&quot;bg-glass/60 rounded-2xl p-6 md:p-8 shadow-xl border border-[var(--border-primary)]&quot;>
          <AnimatePresence mode=&quot;wait&quot;>
            {currentStep === 'Basic Info' && (
              <motion.div key=&quot;step-basic&quot; variants={containerVariants} initial=&quot;initial&quot; animate=&quot;animate&quot; exit=&quot;exit&quot; transition={{ duration: 0.3 }}>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6&quot;>
                  <FloatingInput
                    id=&quot;fullName&quot;
                    label=&quot;Full Name&quot;
                    value={formData.fullName}
                    onChange={(v) => update('fullName', v)}
                    required
                  />
                  <FloatingInput
                    id=&quot;professionalTitle&quot;
                    label=&quot;Professional Title&quot;
                    placeholder=&quot;e.g., AI Developer, Network Engineer&quot;
                    value={formData.professionalTitle}
                    onChange={(v) => update('professionalTitle', v)}
                    required
                  />
                </div>
                <div className=&quot;mt-6&quot;>
                  <FileUpload
                    id=&quot;profilePicture&quot;
                    label=&quot;Profile Picture (optional)&quot;
                    accept=&quot;image/*&quot;
                    fileData={formData.profilePicture}
                    onFileChange={(f) => update('profilePicture', f)}
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 'Experience' && (
              <motion.div key=&quot;step-experience&quot; variants={containerVariants} initial=&quot;initial&quot; animate=&quot;animate&quot; exit=&quot;exit&quot; transition={{ duration: 0.3 }}>
                <div className=&quot;grid grid-cols-1 gap-4 md:gap-6&quot;>
                  <FloatingTextarea
                    id=&quot;bio&quot;
                    label=&quot;Short Bio or Work History&quot;
                    value={formData.bio}
                    onChange={(v) => update('bio', v)}
                    required
                  />
                  <FloatingTextarea
                    id=&quot;projects&quot;
                    label=&quot;Key Projects or Roles (optional)&quot;
                    placeholder=&quot;Use bullets or short lines&quot;
                    value={formData.projects}
                    onChange={(v) => update('projects', v)}
                  />
                  <FloatingInput
                    id=&quot;yearsOfExperience&quot;
                    label=&quot;Years of Experience&quot;
                    type=&quot;number&quot;
                    min={0}
                    value={formData.yearsOfExperience}
                    onChange={(v) => update('yearsOfExperience', v)}
                    required
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 'Skills & Tech' && (
              <motion.div key=&quot;step-skills&quot; variants={containerVariants} initial=&quot;initial&quot; animate=&quot;animate&quot; exit=&quot;exit&quot; transition={{ duration: 0.3 }}>
                <div className=&quot;grid grid-cols-1 gap-4 md:gap-6&quot;>
                  <FloatingInput
                    id=&quot;skills&quot;
                    label=&quot;Skills (comma-separated)&quot;
                    placeholder=&quot;e.g., Python, LLMs, Kubernetes&quot;
                    value={formData.skills}
                    onChange={(v) => update('skills', v)}
                    required
                  />
                  <FloatingInput
                    id=&quot;tools&quot;
                    label=&quot;Tools/Platforms (optional, comma-separated)&quot;
                    placeholder=&quot;e.g., AWS, GCP, Docker, Snowflake&quot;
                    value={formData.tools}
                    onChange={(v) => update('tools', v)}
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 'Availability' && (
              <motion.div key=&quot;step-availability&quot; variants={containerVariants} initial=&quot;initial&quot; animate=&quot;animate&quot; exit=&quot;exit&quot; transition={{ duration: 0.3 }}>
                <div className=&quot;grid grid-cols-1 gap-4 md:gap-6&quot;>
                  <div>
                    <label htmlFor=&quot;availability&quot; className=&quot;block text-sm mb-2 text-high-contrast-secondary&quot;>Current Availability</label>
                    <select
                      id=&quot;availability&quot;
                      className=&quot;w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)]&quot;
                      value={formData.availability}
                      onChange={(e) => update('availability', e.target.value as OnboardingFormData['availability'])}
                    >
                      <option value="&quot;>Select...</option>
                      <option value=&quot;Full-time&quot;>Full-time</option>
                      <option value=&quot;Part-time&quot;>Part-time</option>
                      <option value=&quot;Project-based&quot;>Project-based</option>
                    </select>
                  </div>

                  <FloatingInput
                    id=&quot;timezone&quot;
                    label=&quot;Preferred Timezone&quot;
                    placeholder=&quot;e.g., UTC-5, PST, CET&quot;
                    value={formData.timezone}
                    onChange={(v) => update('timezone', v)}
                    required
                  />

                  <FloatingInput
                    id=&quot;hourlyRate&quot;
                    label=&quot;Hourly Rate (optional)&quot;
                    type=&quot;number&quot;
                    min={0}
                    value={formData.hourlyRate || ''}
                    onChange={(v) => update('hourlyRate', v)}
                  />

                  <FloatingInput
                    id=&quot;portfolioLinks&quot;
                    label=&quot;Portfolio Links (optional)&quot;
                    placeholder=&quot;e.g., https://github.com/you, https://your-site.com&quot;
                    value={formData.portfolioLinks || ''}
                    onChange={(v) => update('portfolioLinks', v)}
                  />

                  <FileUpload
                    id=&quot;cvFile&quot;
                    label=&quot;Upload CV (optional)&quot;
                    accept=&quot;.pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    fileData={formData.cvFile}
                    onFileChange={(f) => update('cvFile', f)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between&quot;>
            <button
              type=&quot;button"
              className="px-4 py-2 rounded-lg border border-[var(--border-secondary)] text-high-contrast-secondary hover:bg-high-contrast-tertiary/60 transition-colors&quot;
              onClick={prevStep}
              disabled={stepIndex === 0}
            >
              Back
            </button>

            {stepIndex < steps.length - 1 ? (
              <button
                type=&quot;button"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50&quot;
                onClick={() => {
                  const missing = requiredMissingForStep();
                  if (missing) {
                    setErrorMessage(missing);
                    return;
                  }
                  setErrorMessage(null);
                  nextStep();
                }}
              >
                Next
              </button>
            ) : (
              <button
                type=&quot;button"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingInput(props: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: number;
  required?: boolean;
}) {
  const { id, label, value, onChange, placeholder, type = 'text', min, required } = props;
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-5 pb-2 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent"
        aria-required={required}
      />
      <label htmlFor={id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea(props: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const { id, label, value, onChange, placeholder, required } = props;
  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-6 pb-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent"
        aria-required={required}
      />
      <label htmlFor={id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">
        {label}
      </label>
    </div>
  );
}

function FileUpload(props: {
  id: string;
  label: string;
  accept?: string;
  fileData: FileData | null | undefined;
  onFileChange: (file: FileData | null) => void;
}) {
  const { id, label, accept, fileData, onFileChange } = props;
  const [localError, setLocalError] = useState<string | null>(null);

  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-2 text-high-contrast-secondary&quot;>{label}</label>
      <input
        id={id}
        type=&quot;file"
        accept={accept}
        className="block w-full text-sm text-high-contrast-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--text-accent)] file:text-black hover:file:bg-[var(--text-accent)]/90"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) {
            onFileChange(null);
            return;
          }
          try {
            const base64 = await fileToBase64(file);
            onFileChange(base64);
            setLocalError(null);
          } catch (err) {
            setLocalError('Failed to read file.');
          }
        }}
      />
      {fileData && (
        <p className="mt-2 text-xs text-high-contrast-muted">Selected: {fileData.name} ({Math.round((fileData.size / 1024) * 10) / 10} KB)</p>
      )}
      {localError && (
        <p className="mt-1 text-xs text-high-contrast-error">{localError}</p>
      )}
    </div>
  );
}