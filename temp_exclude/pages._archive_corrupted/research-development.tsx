
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \'react\' import { Link } from \'react-router-dom\' import { FlaskConical,Lightbulb,Users,Award,ArrowRight,BookOpen,Microscope,Rocket } from \'lucide-react\' export default function ResearchDevelopment() { const researchAreas = [{ \"title\": \'AI & Machine Learning\',\"description\": \'Advancing autonomous systems,neural networks,and intelligent automation technologies.\',projects[\'Multi-agent AI systems\',\'Federated learning\',\'Explainable AI\'],\"icon\": \'FlaskConica l\',\"color\": \'blue\' },{ \"title\": \'Quantum Computing\',\"description\": \'Exploring quantum algorithms and their applications in business and scientific computing.\',projects[\'Quantum neural networks\',\'Quantum cryptography\',\'Quantum optimization\'],\"icon\": \'Microscop e\',\"color\": \'purple\' },{ \"title\": \'Edge Computing\',\"description\": \'Developing next-generation edge computing platforms for IoT and real-time applications.\',projects[\'Edge AI deployment\',\'5G integration\',\'Autonomous edge systems\'],\"icon\": \'Rocke t\',\"color\": \'green\' ] ></div> ></div> ></div> ></div> ></div> )};
import _React from 'react' import { Link } from 'react-router-dom' import { FlaskConical,Lightbulb,Users,Award,ArrowRight,BookOpen,Microscope,Rocket } from 'lucide-react' export default function ResearchDevelopment() { const researchAreas = [{ "title": 'AI & Machine Learning',"description": 'Advancing autonomous systems,neural networks,and intelligent automation technologies.',projects['Multi-agent AI systems','Federated learning','Explainable AI'],"icon": 'FlaskConica l',"color": 'blue' },{ "title": 'Quantum Computing',"description": 'Exploring quantum algorithms and their applications in business and scientific computing.',projects['Quantum neural networks','Quantum cryptography','Quantum optimization'],"icon": 'Microscop e',"color": 'purple' },{ "title": 'Edge Computing',"description": 'Developing next-generation edge computing platforms for IoT and real-time applications.',projects['Edge AI deployment','5G integration','Autonomous edge systems'],"icon": 'Rocke t',"color": 'green' ] ></div> ></div> ></div> ></div> ></div> )};
import React from \'react\' import { Link } from \'react-router-dom\' import { FlaskConical,Lightbulb,Users,Award,ArrowRight,BookOpen,Microscope,Rocket } from \'lucide-react\' export default function ResearchDevelopment() { const researchAreas = [{ \"title\": \'AI & Machine Learning\',\"description\": \'Advancing autonomous systems,neural networks,and intelligent automation technologies.\',projects[\'Multi-agent AI systems\',\'Federated learning\',\'Explainable AI\'],\"icon\": \'FlaskConica l\',\"color\": \'blue\' },{ \"title\": \'Quantum Computing\',\"description\": \'Exploring quantum algorithms and their applications in business and scientific computing.\',projects[\'Quantum neural networks\',\'Quantum cryptography\',\'Quantum optimization\'],\"icon\": \'Microscop e\',\"color\": \'purple\' },{ \"title\": \'Edge Computing\',\"description\": \'Developing next-generation edge computing platforms for IoT and real-time applications.\',projects[\'Edge AI deployment\',\'5G integration\',\'Autonomous edge systems\'],\"icon\": \'Rocke t\',\"color\": \'green\' ] ></div> ></div> ></div> ></div> ></div> )};
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
