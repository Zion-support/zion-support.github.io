import React from "react";
import { useParams } from "react-router-dom";

export default function Post(): React.JSX.Element {
  const { slug } = useParams();
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Post</h1>
      <p>{slug}</p>
    </main>
  );
}

