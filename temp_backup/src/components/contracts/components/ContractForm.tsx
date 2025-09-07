/* eslint-disable */
 const formSchema = z.object ({;
  projectName: z.string () .min (1,  "Project name is required");";""
scopeSummary: z.string () .min (10, "Scope summary should be at least 10 characters");""
startDate: z.date ({";""
  required error: "Start date is required" ;
});
export type ContractFormValues = z.infer<typeof formSchema>;
//Update form when initialValues change useEffect ( () => {;
  if (initialValues) {;
  Object.keys (initialValues) .forEach ( (key) => {;
  const typedKey = key as keyof ContractFormValues;
form.setValue (typedKey, initialValues[typedKey]) ;
}) ;
}
}, [initialValues, form]);
//Track form values for template saving return () => subscription.unsubscribe () ;
}return undefined;
}, [form, onFormValuesChange]);
};
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;
>>>>>>> origin/resolved-merge-conflicts
}finally {;
  setIsGenerating (false) ;
}
};
talent.full name ;
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {;
  form ;
}/> <PaymentTermsFields form= {;
  form ;
}handleMilestonesGenerated= {;
  handleMilestonesGenerated ;"
}/> <AdditionalClausesFields form= {;""
  form ";""
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {;"
  isGenerating ;""
}> {";""
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") ";""
}</Button> </form> </Form> <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form </Button> </DialogFooter> </>) ;""
}"""