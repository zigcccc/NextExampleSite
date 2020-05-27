import { parseISO, format } from 'date-fns';

export const Date = ({ dateString }) => {
	const date = React.useMemo(() => parseISO(dateString), [dateString, parseISO]);
	return <time dateTime={dateString}>{format(date, 'dd. LL. yyyy')}</time>;
};
