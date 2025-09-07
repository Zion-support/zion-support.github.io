/* eslint-disable */
 return (<div className="space-y-6" > <div> <h2 className="text-xl font-semibold mb-2" >Certifications & Licenses</h2> <p className="text-muted-foreground" > Add any professional certifications, licenses, or credentials you have earned. </p> </div> {;
  certifications.length > 0 && (<CertificationsList certifications= {;
  certifications ;
}onEdit= {;
  handleEdit ;
}onDelete= {;"
  handleDelete ;""
}/>) ";""
}<div className="flex justify-between pt-2" > <Button if (editingId) {;
  setEditingId (null);
form.reset ({;
}
}> {;
  editingId ? 'Cancel' : 'Back' ;'"
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) ;'"'"
}'"'"'"