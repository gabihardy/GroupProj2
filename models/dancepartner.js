var orm = require('../config/orm.js');

var partner = {
	all: function(cb) {
		orm.all('allpartners', function(res){
			cb(res)
		});
	},
	create: function(name,cb) {
		orm.create('allpartners', ['userName', 'realName', 'password', 'age', 'skillLevel', 'image', 'aboutMe'], [name, false], cb);
	},
	update: function(id, cb) {
		var condition = 'id=' + id;
		orm.update('allpartners');
	}
};

module.exports = partner;