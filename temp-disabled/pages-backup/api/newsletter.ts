<<<<<<<< HEAD:pages-disabled/api/newsletter.ts
}
  interests?: string[];}
========
import { NextApiRequest, NextApiResponse } from 'next';

interface NewsletterData {
  email: string;
  name?: string;
  interests?: string[];
>>>>>>>> origin/main:temp-disabled/pages-backup/api/newsletter.ts
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
<<<<<<<< HEAD:pages-disabled/api/newsletter.ts
) {}
  if (req.method !== 'POST') {}
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {}
    const { email, name, interests }: NewsletterData = req.body
    // Validate email
if (!email) {
      return res.status(400).json({ }
        message: 'Email is required' }
      })
    }

    // Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ }
        message: 'Invalid email format' }
      })
========
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name, interests }: NewsletterData = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ 
        message: 'Email is required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
>>>>>>>> origin/main:temp-disabled/pages-backup/api/newsletter.ts
    }

    // Here you would typically:
    // 1. Add to newsletter database
    // 2. Send confirmation email
    // 3. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
    // 4. Track subscription analytics
<<<<<<<< HEAD:pages-disabled/api/newsletter.ts
========

>>>>>>>> origin/main:temp-disabled/pages-backup/api/newsletter.ts
    // Log subscription data (in production, use proper logging service)
    const subscriptionData = {
      email,
      name,
      interests,
<<<<<<<< HEAD:pages-disabled/api/newsletter.ts
      timestamp: new Date().toISOString()}
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress}
    }
========
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };
    
>>>>>>>> origin/main:temp-disabled/pages-backup/api/newsletter.ts
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Newsletter subscription:', subscriptionData);
    }

    // Simulate processing time
<<<<<<<< HEAD:pages-disabled/api/newsletter.ts
await new Promise(resolve => setTimeout(resolve, 500))
    res.status(200).json({ 
      message: 'Successfully subscribed to our newsletter!'}
  success: true}
    })
========
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(200).json({ 
      message: 'Successfully subscribed to our newsletter!',
      success: true
    });

>>>>>>>> origin/main:temp-disabled/pages-backup/api/newsletter.ts
  } catch (error) {
    // Log error (in production, use proper logging service)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Newsletter subscription error:', error);
    }
    res.status(500).json({ 
<<<<<<<< HEAD:pages-disabled/api/newsletter.ts
      message: 'Internal server error. Please try again later.'}
  success: false}
    })
========
      message: 'Internal server error. Please try again later.',
      success: false
    });
>>>>>>>> origin/main:temp-disabled/pages-backup/api/newsletter.ts
  }
}