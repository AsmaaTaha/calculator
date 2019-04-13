module.exports = (first, ...args) => {
    return args.reduce((agg, val) => {
        return agg / val;
    }, first);
};