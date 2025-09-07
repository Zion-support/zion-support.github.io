import { useState, useEffect, useCallback } from 'react';'';
import { motion, AnimatePresence } from 'framer-motion';'';
import { Send, CheckCircle, AlertCircle, Eye, EyeOff, Loader2, Phone, Mail, User, MessageSquare, Building  } from 'lucide-react';
export const AdvancedForm = ({ fields, onSubmit, title = 'Contact Us', subtitle = 'Get in touch with our team', submitText = 'Send Message', className = '', enableAnalytics = true, showProgressBar = true }) => {