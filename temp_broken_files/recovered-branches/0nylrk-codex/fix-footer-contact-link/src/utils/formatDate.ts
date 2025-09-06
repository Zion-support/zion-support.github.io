 /** * Format a date string or timestamp into a readable format * @param date Date to format * @param format Optional format specification * @returns Formatted date string */ switch (format) {
  case 'short': return dateObj.toLocaleDateString ();
case 'medium': 
}
};
/** * Format a date to show how long ago it was * @param date Date to format * @returns Time ago string (e.g., "2 hours ago") */ if (interval >= 1) {
  return interval === 1 ? '1 year ago' : `$ {
  interval 
}years ago` 
}