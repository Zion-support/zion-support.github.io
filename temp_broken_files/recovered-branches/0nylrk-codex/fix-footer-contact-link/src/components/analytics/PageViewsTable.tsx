 type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Get top pages by views const {
  data, error 
}= await supabase .from ('analytics events') .select ('path, count') .eq ('event typepage view') .gte ('created at', new Date (Date.now () - days * 24 * 60 * 60 * 1000) .toISOString () ) if (error) throw error;
return data || [] 
}
});
//Format path names for better display <div> <CardTitle className="text-white text-lg" >Top Pages</CardTitle> <CardDescription className="text-zion-slate-light" >Most viewed pages on your platform</CardDescription> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light" > <SelectItem value="1d" >Last 24h</SelectItem> <SelectItem value="7d" >Last 7 days</SelectItem> <SelectItem value="30d" >Last 30 days</SelectItem> <SelectItem value="90d" >Last 3 months</SelectItem> <SelectItem value="365d" >Last year</SelectItem> </SelectContent> </Select> </div> </CardHeader> <CardContent> </div> </div> </div>) 
}) ) : (<div className="text-center py-8 text-zion-slate" > No page view data available for this time period </div>) 
}</div> </CardContent> </Card>) 
}