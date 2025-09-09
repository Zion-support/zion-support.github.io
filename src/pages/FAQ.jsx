import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronRight, MessageCircle, BookOpen } from 'lucide-react';

export default function FAQ() {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (itemId) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(itemId)) {
                newSet.delete(itemId);
            } else {
                newSet.add(itemId);
            }
            return newSet;
        });
    };

    return (<div className="w - full space - y-4">
        {items.map ( (item, index) => {
          const isOpen = openItems.has (index) ;
          return (<div
              key={index}
              className="border border - zion - blue - light rounded - lg overflow - hidden"
            >
              <button
                onClick={ () => toggleItem (index) }
                className="w - full text - left text - white hover:text - zion - cyan px - 6 py - 4 bg - zion - blue - dark hover:bg - zion - blue transition - colors flex items - center justify - between"
              >
                <span className="text - lg font - medium">{item.question}</span>
                {isOpen ? (<ChevronUp className="w - 5 h - 5 text - zion - cyan"       />) : (<ChevronDown className="w - 5 h - 5 text - zion - cyan"       />) }
              </button>
              {isOpen && (<div className="px - 6 pb - 4 bg - zion - blue">
                  <p className="text - zion - slate - light leading - relaxed">
                    {item.answer}
                  </p>
                </div>) }
            </div>) ;
        }) }
      </div>) ;
  };

  return (<>
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about Zion Tech Group's AI and tech marketplace platform."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support"
        canonical="https://ziontechgroup.com / faq"
            />
      <Header       />
      <main className="min - h-screen bg - zion - blue pt - 24 pb - 20">
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div className="text - center mb - 16">
            <GradientHeading > Frequently Asked Questions</GradientHeading>
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">
              Find answers to the most common questions about Zion Tech Group
              and our marketplace platform
            </p>
          </div>
          <div className="max - w-4xl mx - auto">
            <CustomAccordion items={faqData}       />
          </div>
          <div className="mt - 16 text - center">
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - xl p - 8">
              <h2 className="text - 2xl font - bold text - white mb - 4">
                Still have questions?
              </h2>
              <p className="text - zion - slate - light mb - 6">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">
                <a
                  href="/contact"
                  className="inline - flex items - center justify - center px - 6 py - 3 bg - zion - purple hover:bg - zion - purple - dark text - white font - medium rounded - lg transition - colors"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="inline - flex items - center justify - center px - 6 py - 3 border border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white font - medium rounded - lg transition - colors"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer       />
    </>) ;
}
