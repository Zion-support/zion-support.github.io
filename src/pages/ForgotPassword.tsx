<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { Link            } from 'react-router-dom.ts';
import { motion            } from 'framer-motion.ts';
import { Mail,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Shield,
  Lock,
=======
import React, { useState            } from 'react.ts';
import { Link             } from 'react-router-dom.ts';
import { motion             } from 'framer-motion.ts';
import { Mail, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  Lock, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Zap,
  Brain,
  Cloud,
  Rocket,
  ArrowRight,
  RefreshCw
<<<<<<< HEAD
const ForgotPassword: React.FC = (): JSX.Element => {
=======
            } from 'lucide-react.ts';

<<<<<<< HEAD
const ForgotPassword: React.FC = (): JSX.Element => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [step, setStep] = useState<any>('email');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

<<<<<<< HEAD
  const handleEmailSubmit = async (e: anyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)            => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
<<<<<<< HEAD
      return;
=======
      return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSuccess('Verification code sent to your email!');
<<<<<<< HEAD
      setStep('verification');
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setIsLoading(false);

=======
      setStep('verification')} catch (err) {
      setError('Failed to send verification code. Please try again.')} finally {
      setIsLoading(false)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

<<<<<<< HEAD
  const handleVerificationSubmit = async (e: anyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)            => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    e.preventDefault();
    if (!verificationCode || verificationCode.length !== 6) {
      setError('Please enter the 6-digit verification code');
<<<<<<< HEAD
      return;
=======
      return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSuccess('Code verified! Please set your new password.');
<<<<<<< HEAD
      setStep('reset');
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);

=======
      setStep('reset')} catch (err) {
      setError('Invalid verification code. Please try again.')} finally {
      setIsLoading(false)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

<<<<<<< HEAD
  const handlePasswordReset = async (e: anyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)            => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    e.preventDefault();
    if (!newPassword || newPassword.length < 8) {
      setError('Password must be at least 8 characters long');
<<<<<<< HEAD
      return;

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
=======
      return}
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSuccess('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
<<<<<<< HEAD
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);

=======
        window.location.href = '/login'}, 2000)} catch (err) {
      setError('Failed to reset password. Please try again.')} finally {;
      setIsLoading(false)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

<<<<<<< HEAD
  const getPasswordStrength = (password: anyanyanyanyanyanyanyanyanyanyanystring)            => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (password.length === 0) return { score: 0, label: '', color: '' };
    if (password.length < 8) return { score: 1, label: 'Weak', color: 'text-red-400' };
    if (password.length < 12) return { score: 2, label: 'Fair', color: 'text-yellow-400' };
    if (password.length < 16) return { score: 3, label: 'Good', color: 'text-blue-400' };
    return { score: 4, label: 'Strong', color: 'text-green-400' }};

  const passwordStrength = getPasswordStrength(newPassword);

  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bank-Level Security',
      description: 'Enterprise-grade encryption and security protocols'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Multi-Factor Authentication',
<<<<<<< HEAD
      description: 'Enhanced security with verification codes'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Secure Reset Process',
      description: 'Time-limited verification codes for safety'

=======
      description: 'Enhanced security with verification codes';
    },;
    {;
      icon: <RefreshCw className="w-6 h-6" />,;
      title: 'Secure Reset Process',;
      description: 'Time-limited verification codes for safety';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Solutions',
      description: 'Access cutting-edge AI and machine learning technologies'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Infrastructure',
<<<<<<< HEAD
      description: 'Scalable cloud solutions for your business needs'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Transform your business with modern technology'

=======
      description: 'Scalable cloud solutions for your business needs';
    },;
    {;
      icon: <Rocket className="w-6 h-6" />,;
      title: 'Digital Transformation',;
      description: 'Transform your business with modern technology';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const renderEmailStep = () => (
    <motion.div
      initial = {
  { opacity: 0,
  y: 20 






}}
      animate = {
  { opacity: 1,
  y: 0 






}}
      transition={{ duration: 0.6 }}

      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Forgot Your Password?
        </h1>
        <p className="text-slate-300 text-lg">
          No worries! Enter your email address and we'll send you a verification code to reset your password.
        </p>
      </div>

      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"

          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Sending Code...
            </>
          ) : (
            <>
              Send Verification Code;
              <ArrowRight className="w-5 h-5" />;
            </>;
          )};
        </button>;
      </form>;
    </motion.div>;
  );

  const renderVerificationStep = () => (
    <motion.div
      initial = {
  { opacity: 0,
  y: 20 






}}
      animate = {
  { opacity: 1,
  y: 0 






}}
      transition={{ duration: 0.6 }}

      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Check Your Email
        </h1>
        <p className="text-slate-300 text-lg">
          We've sent a 6-digit verification code to <span className="text-cyan-400 font-medium">{email}</span>
        </p>
      </div>

      <form onSubmit={handleVerificationSubmit} className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">
            Verification Code
          </label>
          <input
            type="text"
            value={verificationCode}
            onChange = {
  (e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0,
  6))






}
            className="w-full text-center text-2xl font-mono py-4 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent tracking-widest"
            placeholder="000000"
            maxLength={6}
            required
          />
          <p className="text-slate-400 text-sm mt-2 text-center">
            Enter the 6-digit code from your email
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setStep('email')}
            className="flex-1 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-3"

            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"

            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Verifying...
              </>
            ) : (
              <>
                Verify Code
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={handleEmailSubmit}
<<<<<<< HEAD
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"

            Didn't receive the code? Resend
          </button>
        </div>
      </form>
    </motion.div>
=======
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200";
          >;
            Didn't receive the code? Resend;
          </button>;
        </div>;
      </form>;
    </motion.div>;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  );

  const renderResetStep = () => (
    <motion.div
      initial = {
  { opacity: 0,
  y: 20 






}}
      animate = {
  { opacity: 1,
  y: 0 






}}
      transition={{ duration: 0.6 }}

      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Set New Password
        </h1>
        <p className="text-slate-300 text-lg">
          Create a strong, secure password for your account
        </p>
      </div>

      <form onSubmit={handlePasswordReset} className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">
            New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"

              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {newPassword && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className = {
  `h-1 flex-1 rounded-full transition-all duration-300 ${
                      level <= passwordStrength.score
                        ? passwordStrength.color.replace('text-',
  'bg-')
                        : 'bg-slate-600/30'
                    






}`}
                  />
                ))}
              </div>
              <p className={`text-xs ${passwordStrength.color}`}>
                {passwordStrength.label}
              </p>
            </div>
          )}
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Confirm new password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"

              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"

          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Resetting Password...
            </>
          ) : (
            <>
              Reset Password;
              <ArrowRight className="w-5 h-5" />;
            </>;
          )};
        </button>;
      </form>;
    </motion.div>;
  );

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Back to Login Link */}
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="mb-8"

            <Link to="/login" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              Back to Login
            </Link>
          </motion.div>

          {/* Error/Success Messages */}
          {error && (
            <motion.div
              initial = {
  { opacity: 0,
  y: 10 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400"

              <AlertCircle className="w-5 h-5" />
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial = {
  { opacity: 0,
  y: 10 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400"

              <CheckCircle className="w-5 h-5" />
              {success}
            </motion.div>
          )}

          {/* Form Container */}
          <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            {step === 'email' && renderEmailStep()}
            {step === 'verification' && renderVerificationStep()}
            {step === 'reset' && renderResetStep()}
          </div>

          {/* Security Features */}
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.4 






}}
            className="mt-8 space-y-4"

            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  x: -20 






}}
                animate = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
                className="flex items-center gap-3 text-slate-300"

                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                  <p className="text-xs text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="relative z-10 flex items-center justify-center p-12">
          <div className="text-center max-w-lg">
            <motion.div
              initial = {
  { opacity: 0,
  scale: 0.8 






}}
              animate = {
  { opacity: 1,
  scale: 1 






}}
              transition = {
  { duration: 0.8,
  delay: 0.4 






}}
              className="mb-8"

              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.8,
  delay: 0.6 






}}
              className="text-4xl font-bold text-white mb-6"

              Secure & Reliable
            </motion.h2>

            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.8,
  delay: 0.8 






}}
              className="space-y-6 mb-8"

              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial = {
  { opacity: 0,
  x: 20 






}}
                  animate = {
  { opacity: 1,
  x: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: 1.0 + index * 0.1 






}}
                  className="flex items-center gap-4 text-left"

                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.8,
  delay: 1.2 






}}
              className="p-6 bg-white/10 border border-slate-600/30 rounded-xl backdrop-blur-md"

              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">
                  Your Security is Our Priority
                </h3>
              </div>
              <p className="text-slate-300 text-sm">
                We use industry-standard security measures to protect your account and ensure your data remains safe and secure.
              </p>
<<<<<<< HEAD
            </motion.div>
          </div>
        </div>
      </div>;
    </div>;
  )};
=======
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
</div>};
=======
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default ForgotPassword;}}}}}}}}}}