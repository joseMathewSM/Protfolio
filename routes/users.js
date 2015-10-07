var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    
    // create a user list
    var userList = ['Me', 'You', 'Them'];
    
    //load a users view instead
    res.render('users', { userList: userList } );
});

module.exports = router;
