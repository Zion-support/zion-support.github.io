import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
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
  Cloud} from 'lucide-react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  industry: string;
  location: string;
  website: string;
  bio: string;
  avatar: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
  securityAlerts: boolean;
  projectUpdates: boolean;
  weeklyReports: boolean;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  passwordLastChanged: string;
  lastLogin: string;
  loginHistory: Array<{
    date: string;
    location: string;
    device: string;
    status: 'success' | 'failed';
  }>;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'preferences'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    company: 'Zion Tech Group',
    position: 'Senior Developer',
    industry: 'Technology',
    location: 'San Francisco, CA',
    website: 'https://ziontechgroup.com',
    bio: 'Passionate technology professional with expertise in AI, cloud computing, and digital transformation. Committed to delivering innovative solutions that drive business growth.',
    avatar: '/api/placeholder/150/150'
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    projectUpdates: true,
    weeklyReports: false
  });

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: true,
    sessionTimeout: 30,
    passwordLastChanged: '2024-01-15',
    lastLogin: '2024-01-20 14:30:00',
    loginHistory: [
      { date: '2024-01-20 14:30:00', location: 'San Francisco, CA', device: 'Chrome on MacBook Pro', status: 'success' },
      { date: '2024-01-19 09:15:00', location: 'San Francisco, CA', device: 'Safari on iPhone', status: 'success' },
      { date: '2024-01-18 16:45:00', location: 'New York, NY', device: 'Chrome on Windows', status: 'success' },
      { date: '2024-01-17 11:20:00', location: 'Unknown', device: 'Unknown Smartphone', status: 'failed' }
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
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Other'
  ];

  const handleProfileUpdate = async () => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>
                <p className="text-zion-slate-light mb-4">{user.email}</p>
                <Button onClick={() => {
            logout();
            navigate("/");
        }} variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>);
}
;
export default Profile;
