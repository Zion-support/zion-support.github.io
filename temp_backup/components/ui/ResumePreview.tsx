 </h2>);
return (<div ref= {
  ref 
}className= {
  `resume-a4 $ {
  theme === 'dark' ? 'dark' : '' 
}bg-white dark:bg-black text-gray-900 dark:text-gray-100` 
}> GitHub </a>) 
}</div> </header> <SectionTitle>Professional Summary</SectionTitle> <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200" > {
  data.summary 
}</p> </section>) 
}</span>) ) 
}</div> </section>) 
}<span> {
  role.start || '' 
}{
  role.end ? `– $ {
  role.end 
}` : '' 
}</span>) 
}{
  role.location ? `• $ {
  role.location 
}` : '' 
}</div> </div>) ) 
}</ul>) : null 
}</div>) ) 
}</div> </section>) : null 
}.filter (Boolean) .join (' • ') 
}</div> </div>) ) 
}</div> </section>) : null 
}) ) 
}</ul> </section>) : null 
}link </a>) 
}</div> </span>) ) 
}</div>) : null 
}</div>) ) 
}</div> </section>) : null 
}</div> </div>) 
});
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
