 return (<div className="container max-w-4xl py-10" > <h1 className="text-3xl font-bold mb-6 flex items-center gap-2" > <BadgeDollarSign className="h-6 w-6" /> Wallet </h1> <Card className="mb-6" > <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Balance </CardTitle> <CardDescription>Your current ZION$ balance</CardDescription> </CardHeader> <CardContent>) : (<p className="text-2xl font-bold" > {
  wallet?.balance ?? 0 
}ZION$</p>) 
}</CardContent> </Card> <Tabs defaultValue="earnings" > <TabsList className="grid w-full grid-cols-2 mb-4" > <TabsTrigger value="earnings" >Earnings</TabsTrigger> <TabsTrigger value="spending" >Spending</TabsTrigger> </TabsList>) : (<ul className="space-y-2" > {
  transactions.filter (t => t.transaction type === 'earn') .map (t => (</li>) ) 
}</ul>) 
}</TabsContent>) : (<ul className="space-y-2" > {
  transactions.filter (t => t.transaction type === 'burn') .map (t => (</li>) ) 
}</ul>) 
}</TabsContent> </Tabs> </div> </div>) 
}