import { MONTHS } from '../constants/config';

const date = (function () {
    const obj = {};
    obj.now = () => {
        const dateNow = new Date();
        return`${dateNow.getFullYear()}.${dateNow.getMonth() + 1}.${dateNow.getDate()}`;
    };

    obj.daysAgo = (days) => {
        const daysAgo = new Date(new Date() - (1000 * 3600 * 24 * days));
        return `${daysAgo.getFullYear()}.${daysAgo.getMonth() + 1}.${daysAgo.getDate()}`;
    };

    obj.cardDateTransform = (dateToTransform) => {
        const time = new Date(Date.parse(dateToTransform));
        return `${time.getDate()} ${MONTHS[time.getMonth()]}, ${time.getFullYear()}`;

    };

    return obj;
}());

export { date as default };