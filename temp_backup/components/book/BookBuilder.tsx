const coverPreview = useMemo ( () => {
  return (<img alt="ISBN barcode" className="h-16" src= {
  `/api/barcode/isbn?code=$ {
  encodeURIComponent (project.meta.isbn) 
}` 
}/> </div>) : null 
}</div> </div>) 
}, [project])
> <option value="LETTER" >8.5x11 Letter</option> <option value="A4" >A4</option> </select> </button> </div> </div> <section className="grid grid-cols-1 lg:grid-cols-2 gap-6" > <div className="space-y-4" > <h2 className="font-semibold flex items-center gap-2" > <BookOpen className="w-4 h-4" /> Cover & Branding </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-3" > <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >Title</div> <input /> </label> <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >Subtitle</div> <input /> </label> <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >Author</div> <input /> </label> <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >ISBN (optional) </div> <input </div> <div className="space-y-4" > <h2 className="font-semibold flex items-center gap-2" > <Settings className="w-4 h-4" /> Visual Elements </h2> </div>) ) 
}</div> </div> </div> </section> 
}
}/> </div>) ) 
}</div> </section> 
}
}placeholder="Attribution" /> <div /> </div>) ) 
}</div> </section> </div>) 
}


