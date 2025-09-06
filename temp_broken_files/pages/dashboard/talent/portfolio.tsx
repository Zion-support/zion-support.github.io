 const data: ResumeData = {
  name: 'Your Name', contact: {
  email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country' 
};
summary: 'AI talent focused on LLM apps and marketplaces.';
> <option value="light" >Light</option> <option value="dark" >Dark</option> </select> </div> <PdfExportButton targetRef= {
  ref 
}fileName= {
  `resume-$ {
  data.name.replace (/\s+/g, '-') .toLowerCase () 
}.pdf` 
}/> <ResumePreview ref= {
  ref 
}data= {
  data 
}theme= {
  theme 
}/> </div>) 
}