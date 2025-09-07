import { useState, useCallback } from 'react';'';
import { motion, AnimatePresence } from 'framer-motion';'';
import { Wallet, Smartphone, Coins, Image, TrendingUp, BarChart3, Plus, Send, Download, Loader2 } from 'lucide-react';'';
export const BlockchainWeb3Dashboard = ({ className = '' }) => {const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true})';';