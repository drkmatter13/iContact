var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Project', user: req.user });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Project'});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/about');
	}
}
module.exports = router;
