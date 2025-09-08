
import { Mail, Phone, MapPin, Globe, Sparkles, Send, Clock, Users } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Globe,
  Shield,
  Users
} from 'lucide-react';
        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-zion-dark/60 to-zion-dark/40 backdrop-blur-sm border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300 hover:-translate-y-2"
}
};

export default ContactPage;
