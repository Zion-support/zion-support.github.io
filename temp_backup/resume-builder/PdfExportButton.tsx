/* eslint-disable */
 setIsExporting (true);
try {;
  const options: ExportOptions = {;
}catch (error) {;
  logErrorToProduction ('Error exporting PDF:', {;
  data: error ;
});
toast ({;
}finally {;
  setIsExporting (false) ;
}
};
h-4 w-4"/>) ";""
}Export PDF <ChevronDown className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className=" w-56" > <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel> <DropdownMenuSeparator /> </DropdownMenuRadioGroup> <DropdownMenuSeparator /> <DropdownMenuCheckboxItem checked= {;
  includePortfolio ;
}onCheckedChange= {;
  setIncludePortfolio ;'"
}> Include Portfolio Projects </DropdownMenuCheckboxItem> <DropdownMenuSeparator /> Download PDF </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) ;'"'"
}'"'"'"