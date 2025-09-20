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
