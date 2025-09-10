import React from "react";
import { ArrowRight, CheckCircle, ExternalLink  } from "lucide-react";
const anchor = (url: unknownstring, label?: string)  => (
  <a className="text-cyan-400 underline" href={url} target="_blank" rel="noopener noreferrer">
    {label ?? new URL(url).host + (url.includes("/pricing") ? "/pricing" : "")}
  </a>
);
const ServicesAdvertising: React.FC = (): JSX.Element => {
  const contact = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"