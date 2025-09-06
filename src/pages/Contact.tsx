
import { useState  } from 'react';
import { Header  } from '@/components/Header';
import { SEO  } from '@/components/SEO';
import { GradientHeading  } from '@/components/GradientHeading';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Card  } from '@/components/ui/card';
import { toast  } from '@/components/ui/use-toast';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import z from 'zod';
import { ChatAssistant  } from '@/components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '';
    email: '';
    message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string
  }>({}),
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = null;
            role: 'Support Bot'}}
          onSendMessage={handleSendMessage}
          starterQuestions={[
            'How do I list a product?What services does Zion offer?Where can I view pricing plans?How do I create an account?Can I talk to a human representative?']}
        />
      )}
    </>
  )
}

