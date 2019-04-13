module.exports=(...args)=>{
    return args.reduce((agg,val)=>{return agg+=val},0);
};