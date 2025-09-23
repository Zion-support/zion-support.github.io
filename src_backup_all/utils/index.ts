export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};