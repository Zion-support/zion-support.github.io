 interface SendNewsletterRequest {
  subject: string;
previewText: string;
body: string;
testMode?: boolean;
testEmail?: string 
}serve (async (req) => {
  
}const resend = new Resend (resendApiKey);
const {
  subject, previewText, body, testMode, testEmail 
}= await req.json () as SendNewsletterRequest;
//If test mode, send to test email only if (testMode && testEmail) {
  const emailResponse = await resend.emails.send ({
  from: "Zion Marketplace <newsletter@ziontechgroup.com>";
to: [testEmail];
subject: `[TEST] $ {
  subject 
}`;
text: previewText 
});
status: 200 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}//In production, we would fetch subscriber emails from the database //and send the newsletter to all subscribers //This is just a placeholder for now status: 500 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
