export const log = (...args:any) => {
    const shouldLog = localStorage.getItem('log');

    // eslint-disable-next-line no-console
    return shouldLog ? console.log(args) : false;
};
