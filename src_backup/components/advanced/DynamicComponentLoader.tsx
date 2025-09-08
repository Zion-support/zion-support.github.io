  <Card className='w-full max-w-md mx-auto'>
    <CardContent className='p-6'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='relative'>
          <Loader2 className='h-8 w-8 animate-spin text-primary' />
              className='absolute inset-0 rounded-full border-2 border-primary'
              style={
              }
              initial={ rotate: 0 }
              animate={ rotate: 360 }
              transition={ duration: 2, repeat: Infinity, ease: 'linear' }
  <Card className='w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10'>
    <CardContent className='p-6'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='p-3 rounded-full bg-red-100 dark:bg-red-900/20'>
          {isOnline ? (
            <AlertTriangle className='h-6 w-6 text-red-600' />
            variant='outline' 
            size='sm'
            className='border-red-300 text-red-700 hover:bg-red-100'
          >
            <RefreshCw className='h-4 w-4 mr-2' />
//       <div className='w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center'>
//         <span className='text-muted-foreground'>Loading chart...</span>
//       <div className='w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center'>
//         <span className='text-muted-foreground'>Loading 3D renderer...</span>
