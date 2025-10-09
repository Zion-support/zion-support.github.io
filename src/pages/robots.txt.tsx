import { generateRobotsTxt } from '../utils/sitemapGenerator';

const RobotsTxt = () => {
  const robotsTxt = generateRobotsTxt();
  
  return (
    <div>
      <pre>{robotsTxt}</pre>
    </div>
  );
};

export default RobotsTxt;