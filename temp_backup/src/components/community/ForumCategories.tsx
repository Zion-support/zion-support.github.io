/* eslint-disable */
<<<<<<< HEAD
 {;
=======
 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const categories: ForumCategoryInfo[] = [ const visibleCategories = categories.filter (category => !category.adminOnly || isAdmin);
{;
>>>>>>> origin/resolved-merge-conflicts
  visibleCategories.map ( (category) => {;
  const Icon = iconMap[category.icon as keyof typeof iconMap];
return (<Link key= {;
  category.id ;
}href= {;
  `/community/category/$ {;
  category.id ;`
}` ;
}> <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer" > <CardHeader className="flex flex-row items-center gap-4" > <div className="p-2 bg-zion-purple/10 rounded-full" > <Icon className="h-6 w-6 text-zion-purple" /> </div> <CardTitle className="text-xl" > {;""
  category.name ";""
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text-base" > {;
  category.description ;
}</CardDescription> ;
}) ;
}</div>) ;
};"
export default ForumCategories;""
"""`