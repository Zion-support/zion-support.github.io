import React from "react";
import { useParams } from "react-router-dom";

export default function Post(): React.JSX.Element {
  const { slug } = useParams();
  return <div>Post: {slug}</div>;
}

