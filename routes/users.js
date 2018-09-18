const express = require('express');
const router = express.Router();

router.get('/:name',function(req,res){
        res.render('users',{  //users 会匹配views/users.ejs
                   name:req.params.name
        })
})

module.exports = router