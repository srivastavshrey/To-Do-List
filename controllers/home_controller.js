//controller to fetch data
module.exports.home = function(req,res){
    return res.render('home',{
        title:'Home',
        test:'Shrey'
    });
    }
