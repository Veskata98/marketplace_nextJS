import moment from 'moment';

export const formatTimeToReadableString = (time: string | number) => {
    return moment(time).format('h:mm:ss, DD MMMM YYYY');
};

export const formatTimeToHourAndDateOnly = (time: string | number) => {
    return moment(time).format('HH:mm, DD MMMM YYYY');
};

export const formatTimeToRelative = (time: string | number) => {
    return moment(time).fromNow();
};
