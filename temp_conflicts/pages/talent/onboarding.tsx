
interface FileData {_name: string;
  type: string;
  size: number;
  base64: string; // data window.URL}

interface OnboardingFormData {_fullName: string;
  professionalTitle: string;
  profilePicture?: FileData | null;

  bio: string;
  projects: string;
  yearsOfExperience: string; // keep as string for input, _convert on submit

  skills: string;
  tools: string;

  availability: 'Full-time' | 'Part-time' | 'Project-based' | '';
  timezone: string;
  hourlyRate?: string;
  portfolioLinks?: string;
  cvFile?: FileData | null;}

const _steps = [
  'Basic Info',
  'Experience',
  'Skills & Tech',
  'Availability'] as const;

type StepKey = typeof steps[number];

const _containerVariants = {_initial: { opacity: 0, _y: 16},
  animate: {_opacity: 1, _y: 0},
  exit: {_opacity: 0, _y: -16}};

function useInitialFormState(): OnboardingFormData {_return {
    fullName: '', _professionalTitle: '', _profilePicture: null, _bio: '', _projects: '', _yearsOfExperience: '', _skills: '', _tools: '', _availability: '', _timezone: '', _hourlyRate: '', _portfolioLinks: '', _cvFile: null};
}

async function fileToBase64(_file: File): Promise<FileData> {_const _toBase64 = (_fileInner: File) =>
    new Promise<string>(_(resolve, _reject) => {
      const _reader = new FileReader();
      reader.readAsDataURL(fileInner);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (_error) => reject(error);});
  const _base64 = await toBase64(file);
  return {_name: file.name, _type: file.type, _size: file.size, _base64};
}

export default function TalentOnboardingPage() {_const [stepIndex, _setStepIndex] = useState(0);
  const [formData, _setFormData] = useState<OnboardingFormData>(useInitialFormState);
  const [submitting, _setSubmitting] = useState(false);
  const [submitted, _setSubmitted] = useState(false);
  const [errorMessage, _setErrorMessage] = useState<string | null>(null);

  const currentStep: StepKey = steps[stepIndex];
  const _progressPercent = useMemo__(() => ((stepIndex + 1) / steps.length) * 100, _[stepIndex]);

  function nextStep() {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);}
  function prevStep() {_if (stepIndex > 0) setStepIndex(stepIndex - 1);}

  function update<K extends keyof OnboardingFormData>(_key: K, _value: OnboardingFormData[K]) {_setFormData(_(prev) => ({ ...prev, _[key]: value}));
  }

  function requiredMissingForStep(): string | null {_if (currentStep === 'Basic Info') {
      if (!formData.fullName.trim()) return 'Full Name is required.';
      if (!formData.professionalTitle.trim()) return 'Professional Title is required.';}
    if (currentStep === 'Experience') {_if (!formData.bio.trim()) return 'Short Bio is required.';
      if (!formData.yearsOfExperience.trim()) return 'Years of Experience is required.';}
    if (currentStep === 'Skills & Tech') {_if (!formData.skills.trim()) return 'Please list at least one skill.';}
    if (currentStep === 'Availability') {_if (!formData.availability) return 'Please select your current availability.';
      if (!formData.timezone.trim()) return 'Preferred Timezone is required.';}
    return null;
  }

  async function handleSubmit() {_const _missing = requiredMissingForStep();
    if (missing) {
      setErrorMessage(missing);
      return;}
    setErrorMessage(null);
    setSubmitting(true);
    try {_const _response = await fetch('/api/talent/onboard', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_...formData})});
      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {_setErrorMessage('Submission failed. Please try again.');} finally {_setSubmitting(false);}
  }

  if (submitted) {_return (
      <div className="min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-glass/60 rounded-2xl p-8 shadow-xl border border-[var(--border-primary)] animate-fade-in">
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-high-contrast">Thanks! We’re using AI to optimize your profile.</h1>
            <p className="text-high-contrast-secondary">You’ll appear in search results shortly.</p>
          </div>
        </div>
      </div>
    );}

  return (
    <div className="min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Zion AI Marketplace: Talent Onboarding</h1>
          <p className="text-high-contrast-muted mt-1">Create your public profile in a few quick steps.</p>
        </div>

        <div className="w-full h-2 bg-[var(--border-secondary)] rounded-full overflow-hidden mb-6">
          <div className="h-full bg-[var(--text-accent)] transition-all duration-500" style={_{ width: `${progressPercent}%` }} />
        </div>

        {_errorMessage && (
          <div className="mb-4 rounded-lg border border-[var(--border-error)] text-high-contrast-error px-4 py-3 bg-[rgba(239, _68, _68, _0.1)]">
            {errorMessage}
          </div>
        )}

        <div className="bg-glass/60 rounded-2xl p-6 md:p-8 shadow-xl border border-[var(--border-primary)]">
          <AnimatePresence mode="wait">
            {_currentStep === 'Basic Info' && (_<motion.div key="step-basic" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={_{ duration: 0.3}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FloatingInput
                    id="fullName"
                    label="Full Name"
                    value={_formData.fullName}
                    onChange={_(v) => update('fullName', _v)}
                    required
                  />
                  <FloatingInput
                    id="professionalTitle"
                    label="Professional Title"
                    placeholder="e.g., AI Developer, Network Engineer"
                    value={_formData.professionalTitle}
                    onChange={_(_v) => update('professionalTitle', _v)}
                    required
                  />
                </div>
                <div className="mt-6">
                  <FileUpload
                    id="profilePicture"
                    label="Profile Picture (optional)"
                    accept="image/*"
                    fileData={_formData.profilePicture}
                    onFileChange={_(_f) => update('profilePicture', _f)}
                  />
                </div>
              </motion.div>
            )}

            {_currentStep === 'Experience' && (_<motion.div key="step-experience" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={_{ duration: 0.3}}>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <FloatingTextarea
                    id="bio"
                    label="Short Bio or Work History"
                    value={_formData.bio}
                    onChange={_(v) => update('bio', _v)}
                    required
                  />
                  <FloatingTextarea
                    id="projects"
                    label="Key Projects or Roles (optional)"
                    placeholder="Use bullets or short lines"
                    value={_formData.projects}
                    onChange={_(_v) => update('projects', _v)}
                  />
                  <FloatingInput
                    id="yearsOfExperience"
                    label="Years of Experience"
                    type="number"
                    min={_0}
                    value={_formData.yearsOfExperience}
                    onChange={_(_v) => update('yearsOfExperience', _v)}
                    required
                  />
                </div>
              </motion.div>
            )}

            {_currentStep === 'Skills & Tech' && (
              <motion.div key="step-skills" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={_{ duration: 0.3}}>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <FloatingInput
                    id="skills"
                    label="Skills (comma-separated)"
                    placeholder="e.g., Python, LLMs, Kubernetes"
                    value={_formData.skills}
                    onChange={_(_v) => update('skills', _v)}
                    required
                  />
                  <FloatingInput
                    id="tools"
                    label="Tools/Platforms (optional, comma-separated)"
                    placeholder="e.g., AWS, GCP, Docker, Snowflake"
                    value={_formData.tools}
                    onChange={_(_v) => update('tools', _v)}
                  />
                </div>
              </motion.div>
            )}

            {_currentStep === 'Availability' && (
              <motion.div key="step-availability" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={_{ duration: 0.3}}>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="availability" className="block text-sm mb-2 text-high-contrast-secondary">Current Availability</label>
                    <select
                      id="availability"
                      className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
                      value={_formData.availability}
                      onChange={_(_e) => update('availability', _e.target.value as OnboardingFormData['availability'])}
                    >
                      <option value="">Select...</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Project-based">Project-based</option>
                    </select>
                  </div>

                  <FloatingInput
                    id="timezone"
                    label="Preferred Timezone"
                    placeholder="e.g., UTC-5, PST, CET"
                    value={_formData.timezone}
                    onChange={_(_v) => update('timezone', _v)}
                    required
                  />

                  <FloatingInput
                    id="hourlyRate"
                    label="Hourly Rate (optional)"
                    type="number"
                    min={_0}
                    value={_formData.hourlyRate || ''}
                    onChange={_(_v) => update('hourlyRate', _v)}
                  />

                  <FloatingInput
                    id="portfolioLinks"
                    label="Portfolio Links (optional)"
                    placeholder="e.g., https://github.com/you, https://your-site.com"
                    value={_formData.portfolioLinks || ''}
                    onChange={_(_v) => update('portfolioLinks', _v)}
                  />

                  <FileUpload
                    id="cvFile"
                    label="Upload CV (optional)"
                    accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    fileData={_formData.cvFile}
                    onFileChange={_(_f) => update('cvFile', _f)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-[var(--border-secondary)] text-high-contrast-secondary hover:bg-high-contrast-tertiary/60 transition-colors"
              onClick={_prevStep}
              disabled={_stepIndex === 0}
            >
              Back
            </button>

            {_stepIndex < steps.length - 1 ? (
              <button
                type="button"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                onClick={() => {
                  const _missing = requiredMissingForStep();
                  if (missing) {
                    setErrorMessage(missing);
                    return;}
                  setErrorMessage(null);
                  nextStep();
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                onClick={_handleSubmit}
                disabled={_submitting}
              >
                {_submitting ? 'Submitting…' : 'Submit'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingInput(_props: {_id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: number;
  required?: boolean;}) {_const { id, _label, _value, _onChange, _placeholder, _type = 'text', _min, _required} = props;
  return (_<div className="relative">
      <input
        id={_id}
        name={_id}
        type={_type}
        min={_min}
        value={_value}
        onChange={_(e) => onChange(e.target.value)}
        placeholder={_placeholder}
        className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-5 pb-2 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent"
        aria-required={_required}
      />
      <label htmlFor={_id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">
        {_label}
      </label>
    </div>
  );
}

function FloatingTextarea(_props: {_id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;}) {_const { id, _label, _value, _onChange, _placeholder, _required} = props;
  return (_<div className="relative">
      <textarea
        id={_id}
        name={_id}
        rows={_6}
        value={_value}
        onChange={_(e) => onChange(e.target.value)}
        placeholder={_placeholder}
        className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-6 pb-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent"
        aria-required={_required}
      />
      <label htmlFor={_id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">
        {_label}
      </label>
    </div>
  );
}

function FileUpload(_props: {_id: string;
  label: string;
  accept?: string;
  fileData: FileData | null | undefined;
  onFileChange: (file: FileData | null) => void;}) {_const { id, _label, _accept, _fileData, _onFileChange} = props;
  const [localError, setLocalError] = useState<string | null>(null);

  return (
    <div>
      <label htmlFor={_id} className="block text-sm mb-2 text-high-contrast-secondary">{_label}</label>
      <input
        id={_id}
        type="file"
        accept={_accept}
        className="block w-full text-sm text-high-contrast-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--text-accent)] file:text-black hover:file:bg-[var(--text-accent)]/90"
        onChange={_async (_e) => {
          const _file = e.target.files?.[0];
          if (!file) {
            onFileChange(null);
            return;}
          try {_const _base64 = await fileToBase64(file);
            onFileChange(base64);
            setLocalError(null);} catch (err) {_setLocalError('Failed to read file.');}
        }}
      />
      {_fileData && (
        <p className="mt-2 text-xs text-high-contrast-muted">Selected: {fileData.name} ({_Math.round((fileData.size / 1024) * 10) / 10} KB)</p>
      )}
      {_localError && (
        <p className="mt-1 text-xs text-high-contrast-error">{localError}</p>
      )}
    </div>
  );
}