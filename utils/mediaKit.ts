export function buildPressRelease(data: {
  type: string;
  companyName: string;
  date: string;
  raiseAmount?: string;
  tokenName?: string;
}): string {
  const { type, companyName, date, raiseAmount, tokenName } = data;
  
  let headline = '';
  let subheadline = '';
  let body = '';
  let quote = '';

  switch (type) {
    case 'launch':
      headline = `${companyName} Launches Revolutionary Platform`;
      subheadline = `New technology platform promises to transform the industry`;
      body = `${companyName} today announced the launch of its groundbreaking platform, designed to revolutionize how businesses operate in the digital age. The platform combines cutting-edge technology with user-friendly design to deliver unprecedented value to customers.\n\nThe launch represents a significant milestone for ${companyName}, positioning the company as a leader in innovation. With a focus on scalability and performance, the platform is expected to serve thousands of users from day one.`;
      quote = `"We're excited to bring this innovative solution to market," said the company spokesperson. "This platform represents years of research and development, and we believe it will transform how our customers work."`;
      break;
    
    case 'funding':
      const amount = raiseAmount || '$10M';
      headline = `${companyName} Raises ${amount} in Series A Funding`;
      subheadline = `Investment will accelerate product development and market expansion`;
      body = `${companyName} today announced it has raised ${amount} in Series A funding led by top-tier investors. The funding round will be used to accelerate product development, expand the team, and scale operations to meet growing customer demand.\n\nThe investment comes at a pivotal time for ${companyName}, as the company experiences rapid growth and increasing market adoption. The additional capital will enable the company to invest in cutting-edge technology and expand its market presence.`;
      quote = `"This funding round validates our vision and positions us for significant growth," said the CEO. "We're grateful for the support of our investors and excited about the opportunities ahead."`;
      break;
    
    case 'partnership':
      headline = `${companyName} Announces Strategic Partnership`;
      subheadline = `Partnership will enhance product offerings and expand market reach`;
      body = `${companyName} today announced a strategic partnership that will enhance its product offerings and expand its market reach. The partnership combines ${companyName}'s innovative technology with complementary capabilities to deliver enhanced value to customers.\n\nThe collaboration represents a significant step forward for both companies, leveraging their respective strengths to create new opportunities in the market. The partnership is expected to drive growth and innovation across both organizations.`;
      quote = `"This partnership represents a perfect alignment of our goals and capabilities," said the company spokesperson. "We're excited about the opportunities this collaboration will create for our customers."`;
      break;
    
    case 'product':
      headline = `${companyName} Unveils Next-Generation Product`;
      subheadline = `New product features advanced capabilities and improved user experience`;
      body = `${companyName} today unveiled its next-generation product, featuring advanced capabilities and a significantly improved user experience. The new product builds on the company's proven track record while introducing innovative features that set new industry standards.\n\nThe product launch represents a major milestone for ${companyName}, demonstrating the company's commitment to continuous innovation and customer satisfaction. Early testing has shown significant improvements in performance and user engagement.`;
      quote = `"This product represents the culmination of our team's hard work and dedication," said the product lead. "We're confident it will exceed our customers' expectations and drive significant value."`;
      break;
    
    default:
      headline = `${companyName} Makes Major Announcement`;
      subheadline = `Company continues to innovate and expand its market presence`;
      body = `${companyName} today announced significant developments that will shape the future of the industry. The company's continued focus on innovation and customer satisfaction has positioned it as a leader in its field.\n\nThese developments represent the latest in a series of strategic initiatives designed to drive growth and deliver value to customers. The company remains committed to pushing the boundaries of what's possible in its industry.`;
      quote = `"We're proud of what we've accomplished and excited about what's next," said the company spokesperson. "Our commitment to excellence continues to drive our success."`;
  }

  return `# ${headline}

## ${subheadline}

**${date}** - ${body}

> ${quote}

---

*For more information, contact ${companyName} at press@${companyName.toLowerCase()}.com*`;
}