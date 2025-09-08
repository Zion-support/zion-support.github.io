/* eslint-disable */
 key= {;
  option.id ;
}className= {;
  `w-full text-left p-3 rounded-md transition $ {;
  selectedResume?.id === option.id ? 'bg-zion-purple/20 border border-zion-purple' : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50' ;`
}` ;
}onClick={;
  () => handleResumeSelect (option.id) ;'
}> </div> </button>) ) ;''
}{';''
  selectedResume?.type === 'ai resume' && selectedResume.resume && (<ResumePreviewCard resume= {;
  selectedResume.resume as Resume ;
}onDownload= {;
  handleDownloadResume ;
}isLoading= {;
  isLoading ;
}/>) ;
}</>) ;'
}</div>) ;''
}'''`