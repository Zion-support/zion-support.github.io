 > <option value='light' >Light</option> <option value='dark' >Dark</option> </select>) ) 
}</select> </>) 
}</div> </div> <PdfExportButton targetRef= {
  targetRef 
}fileName= {
  `resume-$ {
  activeData.name.replace (/\s+/g, '-') .toLowerCase () 
}.pdf` 
}/> </div> </div>) 
}if (!user) {
  return {
  redirect: {
  
}//Placeholder: fetch resume data for the logged-in user and versions if any const initialData: ResumeData = {
  name: 'Your Name', contact: {
  email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com' 
};

