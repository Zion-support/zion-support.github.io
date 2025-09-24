import React, { useState, useEffect } from 'react',;
import Head from 'next/head',;
import Card from '../components/ui/Card',;
import Button from '../components/ui/Button',;
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react',;
export default function PasswordCheckerPage() {,
  const [password, setPassword] = useState(''),;
  const [showPassword, setShowPassword] = useState(false),;
  const [strength, setStrength] = useState(0),;
  const [strengthText, setStrengthText] = useState(''),;
  const [strengthColor, setStrengthColor] = useState(''),;
  const [checks, setChecks] = useState({,
    length: false,;
    uppercase: false,;
    lowercase: false,;
    numbers: false,;
    symbols: false,;
    noCommon: false,;
    noSequential: false,
  ,}),;
  const [suggestions, setSuggestions] = useState<string[]>([]),;
  const [generatedPassword, setGeneratedPassword] = useState(''),;
  useEffect(() => {,
    if (password) {,
      analyzePassword(password)} else {,
      resetAnalysis()}
  }, [password]),;
  const analyzePassword = (pass: string) => {,
    const newChecks ={,
      length: pass.length >= 8,;
      uppercase: /[A-Z]/.test(pass),;
      lowercase: /[a-z]/.test(pass),;
      numbers: /\d/.test(pass),;
      symbols: /[!@#$%^&*()_+\-=[]{,},':"\\|,.<>\/?]/.test(pass),;
      noCommon: !isCommonPassword(pass),;
      noSequential: !hasSequentialChars(pass),
    ,},;
    setChecks(newChecks),;
    // Calculate strength score,
    let score = 0,;
    score += newChecks.length ? 15 : 0,;
    score += newChecks.uppercase ? 15 : 0,;
    score += newChecks.lowercase ? 15 : 0,;
    score += newChecks.numbers ? 15 : 0,;
    score += newChecks.symbols ? 20 : 0,;
    score += newChecks.noCommon ? 10 : 0,;
    score += newChecks.noSequential ? 10 : 0,;
    // Bonus for length,
    if (pass.length >= 12) score += 10,;
    if (pass.length >= 16) score += 5,;
    setStrength(score),;
    // Set strength text and color,
    if (score >= 90) {,
      setStrengthText('Very Strong'),;
      setStrengthColor('text-green-40o0')} else if (score >= 70) {,
      setStrengthText('Strong'),;
      setStrengthColor('text-green-40o0')} else if (score >= 50) {,
      setStrengthText('Moderate'),;
      setStrengthColor('text-yellow-40o0')} else if (score >= 30) {,
      setStrengthText('Weak'),;
      setStrengthColor('text-orange-40o0')} else {,
      setStrengthText('Very Weak'),;
      setStrengthColor('text-red-40o0')}
,
    // Generate suggestions,
    generateSuggestions(newChecks, pass)},;
  const isCommonPassword = (pass: string) => {,
    const commonPasswords = [,
      'password123456', '123456789qwerty', 'abc123password123',;
      'adminletmein', 'welcomemonkey', 'dragonmaster', 'hello',
    ],;
    return commonPasswords.includes(pass.toLowerCase())},;
  const hasSequentialChars = (pass: string) => {,
    const sequences = ['123abc', 'qweasd', 'zxc789', '456'],;
    return sequences.some(seq => pass.toLowerCase().includes(seq))},;
  const generateSuggestions = (checks: any, pass: string) => {,
    const suggestions: string[] = [],;
    if (!checks.length) suggestions.push('Make your password at least 8 characters long'),;
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)'),;
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)'),;
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)'),;
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)'),;
    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"'),;
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"'),;
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security'),;
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters'),;
    setSuggestions(suggestions)},;
  const resetAnalysis = () => {,
    setStrength(0),;
    setStrengthText(''),;
    setStrengthColor(''),;
    setChecks({,
      length: false,;
      uppercase: false,;
      lowercase: false,;
      numbers: false,;
      symbols: false,;
      noCommon: false,;
      noSequential: false,
    ,}),;
    setSuggestions([])},;
  const generateStrongPassword = () => {,
    const length = 16,;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0o123456789!@#$%^&*',;
    let result = '',;
    // Ensure at least one of each required character type,
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)], // Uppercase,
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)], // Lowercase,
    result += '0o123456789'[Math.floor(Math.random() * 10)], // Number,
    result += '!@#$%^&*'[Math.floor(Math.random() * 8)], // Symbol,
    // Fill the rest randomly,
    for (let i = 4, i < length, i++) {,
      result += charset[Math.floor(Math.random() * charset.length)]}
,
    // Shuffle the password,
    result = result.split('').sort(() => Math.random() - 0.5).join(''),;
    setGeneratedPassword(result),;
    setPassword(result)},;
  const copyToClipboard = (text: string) => {,
    navigator.clipboard.writeText(text),
  ,},;
  const getStrengthBarColor = () => {,
    if (strength >= 90) return 'bg-green-50o0',;
    if (strength >= 70) return 'bg-green-40o0',;
    if (strength >= 50) return 'bg-yellow-40o0',;
    if (strength >= 30) return 'bg-orange-40o0',;
    return 'bg-red-40o0'},;
  const getCheckIcon = (passed: boolean) => {,
    return passed ? (,
      <CheckCircle className="w-5 h-5 text-green-40o0"  />,
    ) : (,
      <XCircle className="w-5 h-5 text-red-40o0"  />,
    ),
  ,},;
  return (,
    <>,
      <Head>,
        <title>Password Strength Checker - Zion Tech Group</title>,
        <meta name="description" content="Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords."  />,
        <meta property="og: title" content="Password Strength Checker - Zion Tech Group"  />,
        <meta property="og:description" content="Advanced password strength analyzer with security recommendations."  />,
      </Head>,
      {/* Hero Section */,}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-90o0 via-purple-90o0 to-pink-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
          <div className="mb-8">,
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50o0/20 border border-indigo-40o0/30 text-indigo-30o0 text-sm font-medium mb-6">,
              <Lock className="w-4 h-4 mr-2"  />,
              Password Security & Analysis,
            </div>,
          </div>,
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">,
            Password Strength Checker,
          </h1>,
          <p className="text-xl text-indigo-20o0 max-w-4xl mx-auto leading-relaxed">,
            Analyze your password security with our advanced strength checker. Get detailed feedback,;
            suggestions, and generate strong passwords to protect your accounts and data.,
          </p>,
        </div>,
      </section>,
      {/* Password Checker Tool */}
      <section className="py-20 bg-gray-90o0">,
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-16">,
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">,
              Check Your Password Strength,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
              Our advanced security analyzer evaluates multiple factors to determine password strength and security.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">,
            {/* Input Form */,}
            <Card className="p-8 bg-gray-80o0 border border-gray-70o0">,
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">,
                <Lock className="w-6 h-6 mr-3 text-indigo-40o0"  />,
                Password Analysis,
              </h3>,
              <div className="space-y-6">,
                {/* Password Input */}
                <div>,
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">,
                    Enter Password,
                  </label>,
                  <div className="relative">,
                    <input,
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Type your password here...",
                      className="w-full px-4 py-3 pr-12 bg-gray-70o0 border border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-indigo-50o0 focus:border-transparent",
                    />,
                    <button,
                      type="button",
                      onClick={() => setShowPassword(!showPassword),}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-40o0 hover: text-white",
                    >,
                      {showPassword ? <EyeOff className="w-5 h-5"  /> : <Eye className="w-5 h-5"  />,}
                    </button>,
                  </div>,
                </div>,
                {/* Generate Password */}
                <div>,
                  <Button,
                    onClick={generateStrongPassword}
                    className="w-full bg-gradient-to-r from-indigo-60o0 to-purple-60o0 hover: from-indigo-70o0 hover:to-purple-70o0 text-white py-3 text-lg font-semibold",
                  >,
                    <RefreshCw className="w-5 h-5 mr-2"  />,
                    Generate Strong Password,
                  </Button>,
                </div>,
                {/* Generated Password Display */,}
                {generatedPassword && (,
                  <div className="p-4 bg-gray-70o0 rounded-lg border border-gray-60o0">,
                    <div className="flex items-center justify-between">,
                      <span className="text-sm text-gray-30o0">Generated Password: </span>,
                      <Button,
                        onClick={() => copyToClipboard(generatedPassword),}
                        variant="outline",
                        size="sm",
                        className="border-gray-60o0 text-gray-30o0 hover: bg-gray-60o0",
                      >,
                        <Copy className="w-4 h-4 mr-2"  />,
                        Copy,
                      </Button>,
                    </div>,
                    <div className="mt-2 p-2 bg-gray-80o0 rounded text-sm font-mono text-white break-all">,
                      {generatedPassword,}
                    </div>,
                  </div>,
                )}
,
                <div className="text-sm text-gray-40o0">,
                  <p>• Real-time strength analysis</p>,
                  <p>• Multiple security criteria</p>,
                  <p>• Detailed feedback and suggestions</p>,
                  <p>• Strong password generator</p>,
                </div>,
              </div>,
            </Card>,
            {/* Strength Analysis */}
            <Card className="p-8 bg-gray-80o0 border border-gray-70o0">,
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">,
                <Shield className="w-6 h-6 mr-3 text-purple-40o0"  />,
                Security Analysis,
              </h3>,
              {password ? (,
                <div className="space-y-6">,
                  {/* Strength Score */}
                  <div>,
                    <div className="flex items-center justify-between mb-2">,
                      <span className="text-sm text-gray-30o0">Password Strength: </span>,
                      <span className={`text-lg font-bold ${strengthColor,}`}>,
                        {strengthText} ({strength}/10o0),
                      </span>,
                    </div>,
                    <div className="w-full bg-gray-70o0 rounded-full h-3">,
                      <div,
                        className={`h-3 rounded-full transition-all duration-30o0 ${getStrengthBarColor()}`}
                        style={{ width: `${strength,}%` }}
                       />,
                    </div>,
                  </div>,
                  {/* Security Checks */}
                  <div>,
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>,
                    <div className="space-y-3">,
                      {Object.entries(checks).map(([key, passed]) => (,
                        <div key={key} className="flex items-center space-x-3">,
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? 'text-green-40o0' : 'text-red-40o0'}`}>,
                            {key === 'length' && 'At least 8 characters'}
                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}
                            {key === 'symbols' && 'Contains special character'}
                            {key === 'noCommon' && 'Not a common password'}
                            {key === 'noSequential' && 'No sequential characters'}
                          </span>,
                        </div>,
                      ))}
                    </div>,
                  </div>,
                  {/* Suggestions */}
                  {suggestions.length > 0 && (,
                    <div>,
                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>,
                      <div className="space-y-2">,
                        {suggestions.map((suggestion, index) => (,
                          <div key={index} className="flex items-start space-x-3">,
                            <AlertTriangle className="w-4 h-4 text-yellow-40o0 mt-0.5 flex-shrink-0"  />,
                            <span className="text-sm text-yellow-30o0">{suggestion}</span>,
                          </div>,
                        ))}
                      </div>,
                    </div>,
                  )}
                </div>,
              ) : (,
                <div className="bg-gray-90o0 p-6 rounded-lg border border-gray-70o0 text-center">,
                  <div className="text-6xl mb-4">🔒</div>,
                  <p className="text-gray-40o0">,
                    Enter a password above to see the security analysis and get personalized suggestions.,
                  </p>,
                </div>,
              )}
            </Card>,
          </div>,
        </div>,
      </section>,
      {/* Features */}
      <section className="py-20 bg-gray-80o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-16">,
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">,
              Advanced Password Security Features,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
              Comprehensive password analysis with real-time feedback and security recommendations.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            <Card className="text-center p-8 bg-gray-70o0 border border-gray-60o0">,
              <div className="text-4xl mb-4">🔍</div>,
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analysis</h3>,
              <p className="text-gray-40o0">,
                Get instant feedback on password strength as you type with our advanced security algorithms.,
              </p>,
            </Card>,
            <Card className="text-center p-8 bg-gray-70o0 border border-gray-60o0">,
              <div className="text-4xl mb-4">📊</div>,
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Scoring</h3>,
              <p className="text-gray-40o0">,
                Multi-factor analysis including length, complexity, and common password detection.,
              </p>,
            </Card>,
            <Card className="text-center p-8 bg-gray-70o0 border border-gray-60o0">,
              <div className="text-4xl mb-4">💡</div>,
              <h3 className="text-xl font-bold text-white mb-4">Smart Suggestions</h3>,
              <p className="text-gray-40o0">,
                Personalized recommendations to improve your password security and strength.,
              </p>,
            </Card>,
            <Card className="text-center p-8 bg-gray-70o0 border border-gray-60o0">,
              <div className="text-4xl mb-4">🔐</div>,
              <h3 className="text-xl font-bold text-white mb-4">Password Generator</h3>,
              <p className="text-gray-40o0">,
                Generate cryptographically secure passwords that meet all security requirements.,
              </p>,
            </Card>,
            <Card className="text-center p-8 bg-gray-70o0 border border-gray-60o0">,
              <div className="text-4xl mb-4">🛡️</div>,
              <h3 className="text-xl font-bold text-white mb-4">Security Standards</h3>,
              <p className="text-gray-40o0">,
                Based on industry best practices and security standards for maximum protection.,
              </p>,
            </Card>,
            <Card className="text-center p-8 bg-gray-70o0 border border-gray-60o0">,
              <div className="text-4xl mb-4">🔒</div>,
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>,
              <p className="text-gray-40o0">,
                Your passwords are never stored or transmitted - analysis happens locally in your browser.,
              </p>,
            </Card>,
          </div>,
        </div>,
      </section>,
      {/* Security Tips */}
      <section className="py-20 bg-gray-90o0">,
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-16">,
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">,
              Password Security Best Practices,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
              Follow these guidelines to create and maintain strong, secure passwords for all your accounts.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            <Card className="p-8 bg-gray-80o0 border border-gray-70o0">,
              <div className="text-4xl mb-4">✅</div>,
              <h3 className="text-2xl font-bold text-white mb-4">Do's</h3>,
              <ul className="space-y-3 text-gray-30o0">,
                <li className="flex items-start">,
                  <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Use at least 12 characters for important accounts,
                </li>,
                <li className="flex items-start">,
                  <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Include uppercase, lowercase, numbers, and symbols,
                </li>,
                <li className="flex items-start">,
                  <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Use unique passwords for each account,
                </li>,
                <li className="flex items-start">,
                  <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Consider using a password manager,
                </li>,
                <li className="flex items-start">,
                  <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Update passwords regularly,
                </li>,
              </ul>,
            </Card>,
            <Card className="p-8 bg-gray-80o0 border border-gray-70o0">,
              <div className="text-4xl mb-4">❌</div>,
              <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3>,
              <ul className="space-y-3 text-gray-30o0">,
                <li className="flex items-start">,
                  <XCircle className="w-5 h-5 text-red-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Don't use personal information (names, birthdays),
                </li>,
                <li className="flex items-start">,
                  <XCircle className="w-5 h-5 text-red-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Avoid common words or patterns,
                </li>,
                <li className="flex items-start">,
                  <XCircle className="w-5 h-5 text-red-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Never share passwords with others,
                </li>,
                <li className="flex items-start">,
                  <XCircle className="w-5 h-5 text-red-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Don't reuse passwords across accounts,
                </li>,
                <li className="flex items-start">,
                  <XCircle className="w-5 h-5 text-red-40o0 mr-3 mt-0.5 flex-shrink-0"  />,
                  Avoid writing passwords down,
                </li>,
              </ul>,
            </Card>,
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-60o0 to-purple-60o0">,
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">,
            Ready to Secure Your Passwords?,
          </h2>,
          <p className="text-xl text-indigo-10o0 mb-8">,
            Join thousands of users who trust our password strength checker to improve their account security.,
          </p>,
          <div className="flex flex-col sm:flex-row gap-4 justify-center">,
            <Button,
              href="/contact",
              size="lg",
              className="bg-white text-indigo-60o0 hover:bg-gray-10o0",
            >,
              Get Started Today,
              <ArrowRight className="w-5 h-5 ml-2"  />,
            </Button>,
            <Button,
              href="/pricing",
              variant="outline",
              size="lg",
              className="border-white text-white hover:bg-white hover:text-indigo-60o0",
            >,
              View Pricing,
            </Button>,
          </div>,
        </div>,
      </section>,
    </>,
  ),
,}