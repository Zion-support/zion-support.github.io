 //Validate options this.validateOptions (finalOptions);
}getTemplates () : QRCodeTemplate[] {
  return [ {
  id: 'business-card', name: 'Business Card', description: 'Professional contact information in QR format', options: {
  size: 300, errorCorrectionLevel: 'H' 
};
category: 'business' 
};
{
  id: 'wifi-network', name: 'WiFi Network', description: 'Share WiFi credentials easily', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'business' 
};
{
  id: 'email-contact', name: 'Email Contact', description: 'Quick email composition with pre-filled details', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'business' 
};
{
  id: 'social-media', name: 'Social Media', description: 'Link to your social media profiles', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'social' 
};
{
  id: 'website-link', name: 'Website Link', description: 'Direct link to your website', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'business' 
};
{
  id: 'phone-number', name: 'Phone Number', description: 'Quick dial with pre-filled number', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'personal' 
}] 
}</svg> `;
vcard += 'END: VCARD';
return vcard;
}wifiString +=;
return wifiString;
}
}return mailto;
}
}return smsString;
}
}return geoString;
}// Utility methods 
}
}export const qrCodeService = new QRCodeService ();
