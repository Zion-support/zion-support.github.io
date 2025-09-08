/* eslint-disable */
 />) Pagination.displayName = "Pagination" const PaginationContent = React.forwardRef< HTMLUListElement;";""
/>) ) PaginationContent.displayName = "PaginationContent" const PaginationItem = React.forwardRef< HTMLLIElement;";""
) ) PaginationItem.displayName = "PaginationItem" interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
  page: number isActive?: boolean ;
}className) ;"
}{;""
  ...props ";""
}/>) PaginationLink.displayName = "PaginationLink" isActive && 'bg-green-600 text-white';
className) ;
}{;
  ...props ;'"
}> {;'"'"
  page '";'"'"
}</button>) ) PaginationButton.displayName = 'PaginationButton' > <ChevronLeft className="h-4 w-4" /> <span>Previous</span> </PaginationLink>) PaginationPrevious.displayName = "PaginationPrevious" > <span>Next</span> <ChevronRight className="h-4 w-4" /> </PaginationLink>) PaginationNext.displayName = "PaginationNext" <span aria-hidden className= {";""
  cn ("flex h-9 w-9 items-center justify-center", className) ;"
}{;""
  ...props ";""
}> <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >More pages</span> </span>) PaginationEllipsis.displayName = "PaginationEllipsis" export {;'"
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationButton,  PaginationNext, PaginationPrevious ;'"'"
}'"'"'"