<<<<<<< HEAD

  logInfo('CategoryContent - categoryId:', { data: categoryId }),
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),
<<<<<<< HEAD
  const category = categoryId ? categoriesInfo[categoryId] : null;
  const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null;

