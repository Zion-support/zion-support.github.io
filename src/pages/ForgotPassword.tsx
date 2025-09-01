              Sending Code...
            </>
          ) : (
            <>
              Send Verification Code;""
              <ArrowRight className="w-5 h-5"  />;
            </>          )};
        </button>;
      </form>;
    </motion.div>;) ;

  "
              <>"                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Verifying...
              </>
            ) : (
              <>"
                Verify Code""
                <ArrowRight className="w-5 h-5"  />              </>
            )}
          </button>
        </div>;"
""
        <div className="text-center">"
          <button""
            type="button""
            onClick={handleEmailSubmit}""
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200";
          >;
            Didn't receive the code? Resend;
          </button>;
        </div>;
      </form>;
    </motion.div>;) ;

  "
        <button"          type="submit""
          disabled={isLoading}""
          className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"

          {isLoading ? (;"
            <>""
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Resetting Password...
            </>
          ) : (
            <>"
              Reset Password;""
              <ArrowRight className="w-5 h-5"  />;
            </>          )};
        </button>;
      </form>;
    </motion.div>;) ;
"
  return (""
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">"
      {/* Left Side - Form */}""
      <div className="flex-1 flex items-center justify-center px-4 py-12">""
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

}}"
            transition={{ duration: 0.6 }}""
            className="mb-8""
""
            <Link to="/login" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">""
              <ArrowLeft className="w-5 h-5"  />              Back to Login
            </Link>
          </motion.div>

          {/* Error / Success Messages */}
          {error && (<motion.div
              initial = {
  { opacity: 0,
  y: 10

}}
              animate = {
  { opacity: 1,
  y: 0

}}
              className="mb-6 p - 4 bg-red - 500 / 20 border border-red - 500 / 30 rounded-lg flex items - center gap-3 text-red -400"




"
}}""
              className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400""
""
              <AlertCircle className="w-5 h-5"  />              {error}
            </motion.div>) }

          {success && (<motion.div
              initial = {
  { opacity: 0,
  y: 10

}}
              animate = {
  { opacity: 1,
  y: 0

}}
              className="mb-6 p - 4 bg-green - 500 / 20 border border-green - 500 / 30 rounded-lg flex items - center gap-3 text-green -400"




"
}}""
              className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400""
""
              <CheckCircle className="w-5 h-5"  />              {success}
            </motion.div>) }
"
          {/* Form Container */}""
          <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">'
            {step === 'email' && renderEmailStep()}'
            {step === 'verification' && renderVerificationStep()}'
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
            className="mt-8 space - y-4"




"
}}""
            className="mt-8 space-y-4"

            {securityFeatures.map ( (feature, index) => (;
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
                className="flex items - center gap-3 text-slate -300"




"
}}""
                className="flex items-center gap-3 text-slate-300""
""
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>"
                <div>""
                  <h4 className="text-sm font-medium text-white">{feature.title}</h4>""
                  <p className="text-xs text-slate-400">{feature.description}</p>
                </div>
              </motion.div>;) ) }
          </motion.div>
        </div>
      </div>
"
      {/* Right Side - Benefits */}"'"
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 relative overflow-hidden">;'"'"
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>"
""
        <div className="relative z-10 flex items-center justify-center p-12">""
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





"
}}""
              className="mb-8""
""
              <div className="flex justify-center gap-4 mb-6">""
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">""
                  <Brain className="w-8 h-8 text-white"  />"
                </div>""
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">""
                  <Cloud className="w-8 h-8 text-white"  />"
                </div>""
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">""
                  <Rocket className="w-8 h-8 text-white"  />                </div>
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





"
}}""
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
              className="space - y-6 mb-8"




"
}}""
              className="space-y-6 mb-8"

              {benefits.map ( (benefit, index) => (;
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
                  className="flex items - center gap-4 text-left"




"
}}""
                  className="flex items-center gap-4 text-left""
""
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>"
                  <div>""
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}"
                    </h3>""
                    <p className="text-slate-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>;) ) }
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
              className="p - 6 bg-white / 10 border border-slate - 600 / 30 rounded-xl backdrop - blur -md"




"
}}""
              className="p-6 bg-white/10 border border-slate-600/30 rounded-xl backdrop-blur-md""
""
              <div className="flex items-center gap-3 mb-3">""
                <Shield className="w-6 h-6 text-cyan-400"  />"                <h3 className="text-lg font-semibold text-white">
                  Your Security is Our Priority
                </h3>"
              </div>""
              <p className="text-slate-300 text-sm">
                We use industry-standard security measures to protect your account and ensure your data remains safe and secure.
              </p>
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </div>;) };
'"
export default ForgotPassword}}}}}}}}}}'"`'"`
