import moment from 'moment';

const timeFormat = (config = 'YYYY.MM.DD HH:mm:ss') => rawVal => {
    const mT = moment(rawVal);
    return mT.isValid() ? mT.format(config) : rawVal;
};

export const dateFormat = rawVal => {
    return timeFormat('YYYY.MM.DD')(rawVal);
};

export const dateTimeFormat = rawVal => {
    return timeFormat('YYYY.MM.DD HH:mm:ss')(rawVal);
};

