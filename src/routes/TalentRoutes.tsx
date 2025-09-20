<<<<<<< HEAD
import { Routes, Route  } from "react-router-dom, ";
=======
import { Routes, Route } from "react-router-dom, ";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
import React from "react;";
// Next.js routing - no need for react-router-dom;
import TalentDirectory from "@/pages/TalentDirectory;";
import TalentsPage from "@/pages/TalentsPage;";

<<<<<<< HEAD
export default function TalentRoutes() {
return (
<>
<Route path="directory" element={<TalentDirectory />} />
<Route path="list" element={<TalentsPage />} />
</>
);
=======
export default function TalentRoutes() : any {
  return (
    <>
      <Route path="directory" element={<TalentDirectory />} />
      <Route path="list" element={<TalentsPage />} />;
    </>;
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}<//><///>