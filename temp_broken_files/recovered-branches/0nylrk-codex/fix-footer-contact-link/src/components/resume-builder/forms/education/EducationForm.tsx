 return (<div className="space-y-6" > <div> <h2 className="text-xl font-semibold mb-2" >Education</h2> <p className="text-muted-foreground" > Add your educational background and academic achievements. </p> </div> <EducationList educationEntries= {
  educationEntries 
}onEdit= {
  handleEdit 
}onDelete= {
  handleDelete 
}/> </h3> <EducationFormFields isEditing= {
  !!editingId 
}onSubmit= {
  handleAddOrUpdate 
}onCancel= {
  handleCancel 
}/> </div> Next </Button> </div>) 
}</div>) 
}