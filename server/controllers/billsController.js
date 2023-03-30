const Bill = require("../model/billModel");
module.exports.addbill = async(req,res,next) =>{
    try{
        const{billname,itemname,amount,proof} = req.body;
        const user = await User.create({
            billname,
            itemname,
            amount,
            proof,
          });
          return res.json({status:true,bill});
    }
    catch(ex){
        next(ex);
    }
};