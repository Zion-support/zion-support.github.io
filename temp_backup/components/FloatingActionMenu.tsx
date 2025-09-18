import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Phone, Calendar, 
  FileText, X, Plus,
  Zap, Star, Globe, ArrowRight
} from 'lucide-react';

interface Action {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  action: () => void;
}

interface FloatingActionMenuProps {
  className?: string;
}

const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const actions: Action[] = [
    {
      id: 'contact',
      icon: <Phone className="w-5 h-5" />,
      label: 'Contact Us',
      description: 'Get in touch with our experts',
      color: 'from-cyan-500 to-blue-600',
      action: () => window.location.href = '/contact'
    },
    {
      id: 'demo',
      icon: <Calendar className="w-5 h-5" />,
      label: 'Schedule Demo',
      description: 'Book a personalized demo',
      color: 'from-purple-500 to-pink-600',
      action: () => window.location.href = '/demo'
    },
    {
      id: 'quote',
      icon: <FileText className="w-5 h-5" />,
      label: 'Get Quote',
      description: 'Request a custom quote',
      color: 'from-emerald-500 to-teal-600',
      action: () => window.location.href = '/quote'
    },
    {
      id: 'support',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Live Chat',
      description: 'Chat with our support team',
      color: 'from-orange-500 to-red-600',
      action: () => window.location.href = '/support'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveAction(null);
    }
  };

  const handleActionClick = (action: Action) => {
    setActiveAction(action.id);
    setTimeout(() => {
      action.action();
      setActiveAction(null);
    }, 300);
  };

const FloatingActionMenu: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FloatingActionMenu</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FloatingActionMenu;
