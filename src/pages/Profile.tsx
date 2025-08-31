<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
=======
<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { User,
  Mail,
  Phone,
  Building,
  Globe,
  MapPin,
  Camera,
  Save,
  Edit,
=======
import React, { useState              } from 'react.ts';
import { motion               } from 'framer-motion.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
import { User, 
  Mail, 
  Phone, 
  Building, 
  Globe, 
  MapPin, 
  Camera, 
  Save, 
  Edit, 
  X,
  Shield,
  Bell,
  Palette,
  Key,
  Trash2,
  Download,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Settings,
  UserCheck,
  CreditCard,
  Activity,
  BarChart3,
  Calendar,
  Star,
  Award,
  Zap,
  Brain,
  Cloud,
  Rocket
<<<<<<< HEAD
 } from 'lucide-react';
interface UserProfile {
=======
<<<<<<< HEAD
=======
              } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface UserProfile {














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comp: string;
  position: string;
  industry: string;
  location: string;
  website: string;
  bio: string;
<<<<<<< HEAD
  avatar: string}
interface NotificationSettings {
=======
<<<<<<< HEAD
  avatar: string;
=======
avatar: string;












}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface NotificationSettings {














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
  securityAlerts: boolean;
  projectUpdates: boolean;
<<<<<<< HEAD
  weeklyReports: boolean}
interface SecuritySettings {
=======
<<<<<<< HEAD
  weeklyReports: boolean;
=======
weeklyReports: boolean;












}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SecuritySettings {














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  passwordLastChanged: string;
  lastLogin: string;
<<<<<<< HEAD
loginHistory: Array<any>}
const Profile: React.FC = () => {;
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'preferences'>('profile');
=======
<<<<<<< HEAD
loginHistory: Array<any>;
=======
loginHistory: Array<any>;











}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
const Profile: React.FC = (): JSX.Element => {;
  const [activeTab, setActiveTab] = useState<any>('profile');
=======
const Profile: React.FC = (): JSX.Element => {;
  const [activeTab, setActiveTab] = useState<any>('profile');
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [profile, setProfile] = useState<any>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    comp: 'Zion Tech Group',
    position: 'Senior Developer',
    industry: 'Technology',
    location: 'San Francisco, CA',
    website: 'https://ziontechgroup.com',
    bio: 'Passionate technology professional with expertise in AI, cloud computing, and digital transformation. Committed to delivering innovative solutions that drive business growth.',
    avatar: '/api/placeholder/150/150'
  });
  const [notifications, setNotifications] = useState<any>({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    projectUpdates: true,
    weeklyReports: false
  });
  const [security, setSecurity] = useState<any>({
    twoFactorEnabled: true,
    sessionTimeout: 30,
    passwordLastChanged: '2024-01-15',
    lastLogin: '2024-01-20 14:30:00',
    loginHistory[
      { date: '2024-01-20 14:30:00', location: 'San Francisco, CA', device: 'Chrome on MacBook Pro', status: 'success' },
      { date: '2024-01-19 09:15:00', location: 'San Francisco, CA', device: 'Safari on iPhone', status: 'success' },
      { date: '2024-01-18 16:45:00', location: 'New York, NY', device: 'Chrome on Windows', status: 'success' },
      { date: '2024-01-17 11:20:00', location: 'Unknown', device: 'Unknown Device', status: 'failed' }
    ]
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const industries = [
    'Technology',
    'Healthcare',
    'Finance',;
    'Manufacturing',;
    'Retail',;
    'Education',;
    'Government',;
    'Non-profit',;
    'Other';
  ];
  const handleProfileUpdate = async () => {;
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess('Profile updated successfully!');
      setIsEditing(false)} catch (err) {
      setError('Failed to update profile. Please try again.')} finally {
      setIsLoading(false)}
  };
  const handlePasswordChange = async () => {;
    if (!currentPassword || !newPassword || !confirmPassword) {;
      setError('Please fill in all password fields');
      return}
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      return}
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return}
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('')} catch (err) {
      setError('Failed to change password. Please try again.')} finally {
      setIsLoading(false)}
  };
<<<<<<< HEAD
  const handleNotificationToggle = (key: keyof NotificationSettings) => {;
=======

<<<<<<< HEAD
  const handleNotificationToggle = (key: anyanyanyanyanyanyanyanyanyanyanyanyanykeyof NotificationSettings)               => {
    setNotifications(prev => ({
      ...prev,;
      [key]: !prev[key];
    }))};

  const getPasswordStrength = (password: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
=======;
  const handleNotificationToggle = (key: anyanyanyanyanyanyanyanyanyanyanyanyanykeyof NotificationSettings)              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    setNotifications(prev => ({;
      ...prev,;
      [key]: !prev[key];
    }));
  };
<<<<<<< HEAD
  const getPasswordStrength = (password: string) => {;
=======

  const getPasswordStrength = (password: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    if (password.length === 0) return { score: 0, label: '', color: '' };
    if (password.length < 8) return { score: 1, label: 'Weak', color: 'text-red-400' };
    if (password.length < 12) return { score: 2, label: 'Fair', color: 'text-yellow-400' };
    if (password.length < 16) return { score: 3, label: 'Good', color: 'text-blue-400' };
    return { score: 4, label: 'Strong', color: 'text-green-400' }};
  const passwordStrength = getPasswordStrength(newPassword);
  const stats = [;
    { label: 'Projects Completed', value: '24', icon: <BarChart3 className="w-5 h-5" /> },;
    { label: 'Active Projects', value: '3', icon: <Activity className="w-5 h-5" /> },;
    { label: 'Days Active', value: '156', icon: <Calendar className="w-5 h-5" /> },;
    { label: 'Rating', value: '4.9', icon: <Star className="w-5 h-5" /> };
  ];
  const achievements = [;
    { title: 'First Project', description: 'Completed your first project', icon: <Award className="w-6 h-6" />, earned: true },;
    { title: 'Team Player', description: 'Collaborated on 5+ projects', icon: <UserCheck className="w-6 h-6" />, earned: true },;
    { title: 'Innovator', description: 'Implemented AI solutions', icon: <Brain className="w-6 h-6" />, earned: true },;
    { title: 'Cloud Master', description: 'Deployed 10+ cloud solutions', icon: <Cloud className="w-6 h-6" />, earned: false },;
    { title: 'Speed Demon', description: 'Completed project ahead of schedule', icon: <Zap className="w-6 h-6" />, earned: false };
  ];
  const renderProfileTab = () => (
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
      className="space-y-8"
      {/* Profile Header */}
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">
              {profile.firstName} {profile.lastName}
            </h2>
            <p className="text-slate-300 text-lg mb-1">{profile.position}</p>
            <p className="text-slate-400">{profile.comp}</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
            {isEditing ? <X className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-4">
          {stats.map((stat, index)               => (
            <motion.div
              key={stat.label}
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
  delay: 0.1 + index * 0.1 
}}
              className="text-center p-4 bg-white/5 rounded-xl border border-slate-600/30"
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Profile Form */}
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white font-medium mb-2">First Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={profile.firstName}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  firstName: e.target.value 
}))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Last Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={profile.lastName}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  lastName: e.target.value 
}))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                value={profile.email}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  email: e.target.value 
}))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="tel"
                value={profile.phone}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  phone: e.target.value 
}))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white font-medium mb-2">Company</label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
<<<<<<< HEAD
                value={profile.company}
=======
<<<<<<< HEAD
                value={profile.comp}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  comp: e.target.value 

}))}
=======
                value={profile.comp}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  company: e.target.value 
}))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Position</label>
            <input
              type="text"
              value={profile.position}
              onChange = {
  (e) => setProfile(prev => ({ ...prev,
  position: e.target.value 
}))}
              disabled={!isEditing}
              className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white font-medium mb-2">Industry</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                value={profile.industry}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  industry: e.target.value 
}))}
                disabled={!isEditing}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {industries.map((industry)  => (
=======
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"

                {industries.map((industry)              => (
=======
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {industries.map((industry)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={profile.location}
                onChange = {
  (e) => setProfile(prev => ({ ...prev,
  location: e.target.value 
}))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Website</label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="url"
              value={profile.website}
              onChange = {
  (e) => setProfile(prev => ({ ...prev,
  website: e.target.value 
}))}
              disabled={!isEditing}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Bio</label>
          <textarea
            value={profile.bio}
            onChange = {
  (e) => setProfile(prev => ({ ...prev,
  bio: e.target.value 
}))}
            disabled={!isEditing}
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-none"
          />
        </div>
        {isEditing && (
          <div className="flex justify-end">
            <button
              onClick={handleProfileUpdate}
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        )}
      </div>
      {/* Achievements */}
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Achievements</h3>
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index)               => (
            <motion.div
              key={achievement.title}
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
  delay: 0.1 + index * 0.1 
}}
              className={`p-4 rounded-xl border ${
                achievement.earned
                  ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
                  : 'bg-white/5 border-slate-600/30'
              }`}
              <div className={`flex items-center gap-3 mb-3 ${
                achievement.earned ? 'text-yellow-400' : 'text-slate-400'
              }`}>
                {achievement.icon}
                <h4 className="font-medium">{achievement.title}</h4>
              </div>
              <p className={`text-sm ${
                achievement.earned ? 'text-yellow-300' : 'text-slate-400'
              }`}>
                {achievement.description}
              </p>
              {achievement.earned && (
                <div className="mt-3 flex items-center gap-2 text-yellow-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Earned
                </div>;
              )};
            </motion.div>;
          ))};
        </div>;
      </div>;
    </motion.div>;
  );
  const renderSecurityTab = () => (
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
      className="space-y-8"
      {/* Password Change */}
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Change Password</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Current Password</label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type={showPasswords.current ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick = {
  () => setShowPasswords(prev => ({ ...prev,
  current: !prev.current 
}))}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">New Password</label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type={showPasswords.new ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick = {
  () => setShowPasswords(prev => ({ ...prev,
  new: !prev.new 
}))}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
            <label className="block text-white font-medium mb-2">Confirm New Password</label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick = {
  () => setShowPasswords(prev => ({ ...prev,
  confirm: !prev.confirm 
}))}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <button
            onClick={handlePasswordChange}
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Changing Password...
              </>
            ) : (
              <>
                <Key className="w-5 h-5" />
                Change Password
              </>
            )}
          </button>
        </div>
      </div>
      {/* Security Settings */}
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Security Settings</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
            <div>
              <h4 className="font-medium text-white mb-1">Two-Factor Authentication</h4>
              <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={security.twoFactorEnabled}
                onChange = {
  (e) => setSecurity(prev => ({ ...prev,
  twoFactorEnabled: e.target.checked 
}))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
            <div>
              <h4 className="font-medium text-white mb-1">Session Timeout</h4>
              <p className="text-slate-400 text-sm">Automatically log out after {security.sessionTimeout} minutes of inactivity</p>
            </div>
            <select
              value={security.sessionTimeout}
              onChange = {
  (e) => setSecurity(prev => ({ ...prev,
  sessionTimeout: Number(e.target.value) 
}))}
              className="px-3 py-2 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
            </select>
          </div>
        </div>
      </div>
      {/* Login History */}
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Login History</h3>
        <div className="space-y-4">
          {security.loginHistory.map((login, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  login.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="text-white font-medium">{login.device}</p>
                  <p className="text-slate-400 text-sm">{login.location} • {login.date}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                login.status === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {login.status === 'success' ? 'Success' : 'Failed'};
              </span>;
            </div>;
          ))};
        </div>;
      </div>;
    </motion.div>;
  );
  const renderNotificationsTab = () => (
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
      className="space-y-8"
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Notification Preferences</h3>
        <div className="space-y-6">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
              <div>
                <h4 className="font-medium text-white mb-1">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h4>
                <p className="text-slate-400 text-sm">
                  {key === 'emailNotifications' && 'Receive notifications via email'}
                  {key === 'pushNotifications' && 'Receive push notifications in your browser'}
                  {key === 'marketingEmails' && 'Receive marketing and promotional emails'}
                  {key === 'securityAlerts' && 'Get notified about security-related events'}
                  {key === 'projectUpdates' && 'Receive updates about your projects'}
                  {key === 'weeklyReports' && 'Get weekly summary reports'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleNotificationToggle(key as keyof NotificationSettings)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>;
              </label>;
            </div>;
          ))};
        </div>;
      </div>;
    </motion.div>;
  );
  const renderPreferencesTab = () => (
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
      className="space-y-8"
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Account Preferences</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
            <div>
              <h4 className="font-medium text-white mb-1">Theme</h4>
              <p className="text-slate-400 text-sm">Choose your preferred color scheme</p>
            </div>
            <select className="px-3 py-2 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
            <div>
              <h4 className="font-medium text-white mb-1">Language</h4>
              <p className="text-slate-400 text-sm">Select your preferred language</p>
            </div>
            <select className="px-3 py-2 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30">
            <div>
              <h4 className="font-medium text-white mb-1">Time Zone</h4>
              <p className="text-slate-400 text-sm">Set your local time zone</p>
            </div>
            <select className="px-3 py-2 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white mb-6">Data Management</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30 hover:bg-white/10 transition-all duration-300 text-left">
            <div>
              <h4 className="font-medium text-white mb-1">Export Data</h4>
              <p className="text-slate-400 text-sm">Download all your data in JSON format</p>
            </div>
            <Download className="w-5 h-5 text-cyan-400" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg border border-slate-600/30 hover:bg-white/10 transition-all duration-300 text-left">
            <div>
              <h4 className="font-medium text-white mb-1">Import Data</h4>
              <p className="text-slate-400 text-sm">Upload data from a backup file</p>
            </div>
            <Upload className="w-5 h-5 text-cyan-400" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-red-500/20 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-all duration-300 text-left">
            <div>
              <h4 className="font-medium text-red-400 mb-1">Delete Account</h4>
              <p className="text-red-400/70 text-sm">Permanently delete your account and all data</p>;
            </div>;
            <Trash2 className="w-5 h-5 text-red-400" />;
          </button>;
        </div>;
      </div>;
    </motion.div>;
  );
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
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
          <h1 className="text-4xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-slate-300 text-lg">Manage your account settings and preferences</p>
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
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
            { key: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
            { key: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
            { key: 'preferences', label: 'Preferences', icon: <Settings className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as )}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-slate-600/30'
              }`}
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {activeTab === 'profile' && renderProfileTab()}
        {activeTab === 'security' && renderSecurityTab()};
        {activeTab === 'notifications' && renderNotificationsTab()};
        {activeTab === 'preferences' && renderPreferencesTab()};
      </div>;
    </div>;
  );
};
export default Profile;}}}}}}}}}