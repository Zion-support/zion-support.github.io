
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
<<<<<<< HEAD
=======
import React from \"react\"; import Link from \"next/link\"; import { ArrowRight,Phone,Mail } from \"lucide-react\"; ); export default function Serviceinnovationhub() {}; return null} )}
const React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function Serviceinnovationhub() { return; }; return null} )}""
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
import _React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function Serviceinnovationhub() {}; return null} )}
=======
import _React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function Serviceinnovationhub() {}; return null} )}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
