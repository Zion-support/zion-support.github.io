 doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Education', 20, yPos);
yPos += 8;
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 60, yPos);
yPos += 8;
// Sort education by date (newest first) for (const edu of sortedEducation) {
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (14);
doc.setTextColor (colors.subheading);
doc.text (edu.institution, 20, yPos);
doc.setFontSize (10);
doc.setTextColor (colors.text);
doc.text (dateText, 20, yPos + 10);
}return yPos + 5 
}