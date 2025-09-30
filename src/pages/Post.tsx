import React from "react";

export default function Post(): React.JSX.Element {
  const { slug } = useParams();
  return <div>Post: {slug}</div>;
}

