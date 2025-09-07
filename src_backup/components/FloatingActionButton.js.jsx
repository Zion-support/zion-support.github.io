import React, { useState } from 'react''';
import { motion, AnimatePresence  } from 'framer-motion';
import {}
  PlusIcon, XMarkIcon, ChatBubbleLeftRightIcon, PhoneIcon,'';
  EnvelopeIcon} from '@heroicons/react/24/outline';
const FloatingActionButton = ({ className = '' }) => {}
  const [isOpen, setIsOpen] = useState(false)const toggleMenu = () => setIsOpen(!isOpen)const actionItems = [];
    {}
      icon: ChatBubbleLeftRightIcon, '';
      label: 'Live Chat','';
      action: () => window.open('https: //ziontechgroup.com/chat', _blank'), ';
      color: 'bg-green-500 hover:bg-green-600'}, {}
      icon: PhoneIcon, '';
      label: 'Call Us','';
      action: () => window.open('tel: +1-555-0123', _self'), ';
      color: 'bg-blue-500 hover:bg-blue-600'}, {}
      icon: EnvelopeIcon, '';
      label: 'Email','';
      action: () => window.open('mailto: info@ziontechgroup.com', _self'), ';
      color: 'bg-purple-500 hover:bg-purple-600'}
  ];
  return ()<div className={`fixed bottom-6 right-6 z-50 ${className}`}>;
      <AnimatePresence>;
        {isOpen && (<motion.div;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className='absolute bottom-16 right-0 mb-2 space-y-3''''';
          >;
            {actionItems.map((item, index) => (<motion.div;
                key={item.label}
<<<<<<< HEAD:src_backup/components/FloatingActionButton.js.jsx
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}'''';
                transition={{ delay: index * 0.1 }}'''';
                className='flex items-center space-x-3 '>;
=======
                initial={{ opacity: 0, x: 20 ,}
}
                animate={{ opacity: 1, x: 0 ,}
}
                exit={{ opacity: 0, x: 20 ,}
}'''';
                transition={{ delay: index * 0.1 ,}
}'''';
                className='flex items-center space-x-3 ' />;
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/FloatingActionButton.js.jsx
                <motion.button`;
                  onClick={item.action}``;
                  className={`${item.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}'''';
                >'''';
                  <item.icon className='w-5 h-5' />;
                </motion.button>;
                <motion.span;
                  initial={{ opacity: 0, x: -10 }}'''';
                  animate={{ opacity: 1, x: 0 }}'''';
                  className='bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap '>;
                  {item.label}
                </motion.span>;
              </motion.div>;
            ))}
          </motion.div>;
        )}
      </AnimatePresence>;
      <motion.button'''';
        onClick={toggleMenu}'''';
        className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover: shadow-xl transition-all duration-300 transform hover:scale-110''';
        whileHover={{ scale: 1.1 }}
<<<<<<< HEAD:src_backup/components/FloatingActionButton.js.jsx
        whileTap={{ scale: 0.95 }}'';
=======
        whileTap={{ scale: 0.95 ,}
}'';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/FloatingActionButton.js.jsx
        aria-label={isOpen ? 'Close quick actions' : 'Open quick actions'}'''';
      >'''';
        <AnimatePresence mode='wait'>;
          {isOpen ? ('''';
            <motion.div'''';
              key='close''';
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
<<<<<<< HEAD:src_backup/components/FloatingActionButton.js.jsx
              transition={{ duration: 0.2 }}'''';
            >'''';
=======
              transition={{ duration: 0.2 ,}
}'''';
             />'''';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/FloatingActionButton.js.jsx
              <XMarkIcon className='w-6 h-6' />;
            </motion.div>;
          ) : ('''';
            <motion.div'''';
              key='open''';
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
<<<<<<< HEAD:src_backup/components/FloatingActionButton.js.jsx
              transition={{ duration: 0.2 }}'''';
            >'''';
=======
              transition={{ duration: 0.2 ,}
}'''';
             />'''';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/FloatingActionButton.js.jsx
              <PlusIcon className='w-6 h-6' />;
            </motion.div>;
          )}
        </AnimatePresence>;
      </motion.button>;
    </div>)}
export default FloatingActionButton;
<<<<<<< HEAD:src_backup/components/FloatingActionButton.js.jsx
export { FloatingActionButton }export { FloatingActionButton }export { FloatingActionButton }export { FloatingActionButton }export { FloatingActionButton }
=======

export { FloatingActionButton }

export { FloatingActionButton }

export { FloatingActionButton }

export { FloatingActionButton }

export { FloatingActionButton }
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/FloatingActionButton.js.jsx
