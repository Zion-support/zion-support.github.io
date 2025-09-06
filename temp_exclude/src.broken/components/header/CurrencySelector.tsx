return (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10" > <DollarSign className="h-5 w-5" /> <span className="sr-only" >Select currency</span> </Button> </DropdownMenuTrigger> <DropdownMenuItem key= {
  c.code 
}className= {
  `cursor-pointer $ {
  currency.code === c.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10' 
}` 
}onClick= {
  () => setCurrency (c.code) 
}> {
  c.symbol 
}{
  c.code 
}</DropdownMenuItem>) ) 
}</DropdownMenuContent> </DropdownMenu>) 
}
