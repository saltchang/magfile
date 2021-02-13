import { format } from 'date-fns';

export default {};

const formatArticleDate = (dateISOString: string): string => {
  return format(new Date(dateISOString), 'MMMM dd, yyyy');
};

export { formatArticleDate };
