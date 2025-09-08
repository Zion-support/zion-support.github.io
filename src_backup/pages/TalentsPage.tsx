      <div className='container py-8' data-testid='talents-loading'>
        <motion.div
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          className='text-center mb-8'
        >
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
            AI & IT Talent Directory
          </h1>
          <p className='text-muted-foreground text-lg'>
}{';
  isFetching ? (<Spinner className=' mx-auto h-6 w-6'/>) : (<Button onClick={;
}{'';
  !hasMore && talents.length > 0 && (<motion.div > <div className=' text-muted-foreground text-lg mb-2'> 🎉 You've explored all available talents! </div> </div> </motion.div>) ;
  scrollToTop ';
}> <ArrowUp className=' h-5 w-5 text-primary-foreground' /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}''
