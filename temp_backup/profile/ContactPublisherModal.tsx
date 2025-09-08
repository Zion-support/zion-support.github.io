/* eslint-disable */
 const schema: yup.ObjectSchema<FormValues> = yup .object ({;
  subject: yup .string () .min (5, 'Subject must be at least 5 characters') .required ('Subject is required'),  message: yup .string () .min (20, 'Message must be at least 20 characters') .required ('Message is required') ;
}) .required ();
return (<> <Dialog open= {;
  isOpen ;
}onOpenChange= {;
  onClose ;
}> <FocusLock disabled= {;
  !isOpen ;
}returnFocus> <DialogContent > <DialogHeader> <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2" > <Mail className="h-5 w-5 text-zion-cyan" /> Contact Publisher </DialogTitle> </DialogHeader> <FormItem> <FormLabel>Subject</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className="text-red-500" /> </FormItem>) ";""
}/> <FormField <FormItem> <FormLabel>Message</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage className="text-red-500" /> </FormItem>) ;
}/> <Button </Button> </form> </Form> </DialogContent> </FocusLock> </Dialog> <LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;'"
}/> </>) ;'"'"
}'"'"'"