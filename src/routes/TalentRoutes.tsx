import import { Routes;, Route } from "
import React from "
/
import TalentDirectory from "
import TalentsPage from "

export default function TalentRoutes() {
return (
<>
<Route path="directory" element={<TalentDirectory />} />
<Route path="list" element={<TalentsPage />} />
</>
)
}<//><///>