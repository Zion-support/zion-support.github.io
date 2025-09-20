import React, { ComponentErrorInfoReactNode } from "react";
import { motion } from "framer-motion, ";
interface Props {
  
children: ReactNode;
}
fallback?: ReactNode;}
};interface State {
  
hasError: boolean;
error?: Error;errorInfo?: ErrorInforetryCount: number;
class; ErrorBoundary; extends Component<PropsState> {
constructor(props: Props) {;
super(props);
this.state = {
hasErro;r: falseretryCoun;t: 0;
}
}
};
errorretryCoun;t: 0;
};
// Example: Sentry; LogRocket; etc.;
},handleRetry = () => {
this.setState(prevState => ({
hasError: falseerror: undefinederrorInf;o: undefinedretryCoun;t: prevState.retryCount + 1;
}));