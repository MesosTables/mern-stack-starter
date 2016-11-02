'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _contact = require('../app/models/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


_mongoose2.default.connect('localhost:27017/mern-stack-starter');

// configure POST data
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// set port
var port = process.env.PORT || 3000;

// instance of the express router
var router = _express2.default.Router();

var root = __dirname + '/public';
app.use(_express2.default.static(root));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// test route defined on the root
router.get('/', function (req, res) {
  res.json({ message: 'welcome' });
});

// on routes that end in /contact
router.route('/contacts')

// create a bear POST function
.post(function (req, res) {
  // create new instance of Bear model
  var contact = new _contact2.default();
  // set new models name to name that came in on the request
  contact.name = req.body.name;
  // save bear and check for errors;
  contact.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: contact.name + ' Contact Created! id is ' + contact._id });
  });
})

// GET all the bears /api/bears
.get(function (req, res) {
  _contact2.default.find(function (err, contacts) {
    if (err) {
      res.send(err);
    }

    res.json(contacts);
  });
});

// all of our routes, defined above, will be prefixed with /api
app.use('/api', router);

// START the server
app.listen(port);
console.log('Listening on port ' + port);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'webapp.js');

  __REACT_HOT_LOADER__.register(port, 'port', 'webapp.js');

  __REACT_HOT_LOADER__.register(router, 'router', 'webapp.js');

  __REACT_HOT_LOADER__.register(root, 'root', 'webapp.js');
}();

;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYmFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFIQSxJQUFJLE1BQU0sd0JBQVY7OztBQUtBLG1CQUFTLE9BQVQsQ0FBaUIsb0NBQWpCOztBQUVBO0FBQ0EsSUFBSSxHQUFKLENBQVEscUJBQVcsVUFBWCxDQUFzQixFQUFFLFVBQVUsSUFBWixFQUF0QixDQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEscUJBQVcsSUFBWCxFQUFSOztBQUVBO0FBQ0EsSUFBSSxPQUFPLFFBQVEsR0FBUixDQUFZLElBQVosSUFBb0IsSUFBL0I7O0FBRUE7QUFDQSxJQUFJLFNBQVMsa0JBQVEsTUFBUixFQUFiOztBQUVBLElBQU0sT0FBVSxTQUFWLFlBQU47QUFDQSxJQUFJLEdBQUosQ0FBUSxrQkFBUSxNQUFSLENBQWUsSUFBZixDQUFSOztBQUVBLElBQUksR0FBSixDQUFRLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUI7QUFDL0IsTUFBSSxNQUFKLENBQVcsNkJBQVgsRUFBMEMsR0FBMUM7QUFDQSxNQUFJLE1BQUosQ0FBVyw4QkFBWCxFQUEyQyxnREFBM0M7QUFDQTtBQUNELENBSkQ7O0FBTUE7QUFDQSxPQUFPLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0I7QUFDbEMsTUFBSSxJQUFKLENBQVMsRUFBRSxTQUFTLFNBQVgsRUFBVDtBQUNELENBRkQ7O0FBSUE7QUFDQSxPQUFPLEtBQVAsQ0FBYSxXQUFiOztBQUVFO0FBRkYsQ0FHRyxJQUhILENBR1EsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQjtBQUN4QjtBQUNBLE1BQUksVUFBVSx1QkFBZDtBQUNBO0FBQ0EsVUFBUSxJQUFSLEdBQWUsSUFBSSxJQUFKLENBQVMsSUFBeEI7QUFDQTtBQUNBLFVBQVEsSUFBUixDQUFhLFVBQVUsR0FBVixFQUFlO0FBQzFCLFFBQUksR0FBSixFQUFTO0FBQ1AsVUFBSSxJQUFKLENBQVMsR0FBVDtBQUNEOztBQUVELFFBQUksSUFBSixDQUFTLEVBQUUsU0FBUyxRQUFRLElBQVIsR0FBYywwQkFBZCxHQUEyQyxRQUFRLEdBQTlELEVBQVQ7QUFDRCxHQU5EO0FBT0QsQ0FoQkg7O0FBa0JFO0FBbEJGLENBbUJHLEdBbkJILENBbUJPLFVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0I7QUFDdkIsb0JBQVEsSUFBUixDQUFhLFVBQVUsR0FBVixFQUFlLFFBQWYsRUFBeUI7QUFDcEMsUUFBSSxHQUFKLEVBQVM7QUFDUCxVQUFJLElBQUosQ0FBUyxHQUFUO0FBQ0Q7O0FBRUQsUUFBSSxJQUFKLENBQVMsUUFBVDtBQUNELEdBTkQ7QUFPRCxDQTNCSDs7QUE2QkE7QUFDQSxJQUFJLEdBQUosQ0FBUSxNQUFSLEVBQWdCLE1BQWhCOztBQUVBO0FBQ0EsSUFBSSxNQUFKLENBQVcsSUFBWDtBQUNBLFFBQVEsR0FBUixDQUFZLHVCQUFzQixJQUFsQzs7Ozs7Ozs7Z0NBbEVJLEc7O2dDQVlBLEk7O2dDQUdBLE07O2dDQUVFLEkiLCJmaWxlIjoid2ViYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxudmFyIGFwcCA9IGV4cHJlc3MoKVxyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9hcHAvbW9kZWxzL2NvbnRhY3QnXHJcblxyXG5tb25nb29zZS5jb25uZWN0KCdsb2NhbGhvc3Q6MjcwMTcvbWVybi1zdGFjay1zdGFydGVyJylcclxuXHJcbi8vIGNvbmZpZ3VyZSBQT1NUIGRhdGFcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuXHJcbi8vIHNldCBwb3J0XHJcbnZhciBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwXHJcblxyXG4vLyBpbnN0YW5jZSBvZiB0aGUgZXhwcmVzcyByb3V0ZXJcclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbmNvbnN0IHJvb3QgPSBgJHtfX2Rpcm5hbWV9L3B1YmxpY2BcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhyb290KSlcclxuXHJcbmFwcC51c2UoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcclxuICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcclxuICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHRcIik7XHJcbiAgbmV4dCgpO1xyXG59KTtcclxuXHJcbi8vIHRlc3Qgcm91dGUgZGVmaW5lZCBvbiB0aGUgcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgcmVzLmpzb24oeyBtZXNzYWdlOiAnd2VsY29tZScgfSlcclxufSlcclxuXHJcbi8vIG9uIHJvdXRlcyB0aGF0IGVuZCBpbiAvY29udGFjdFxyXG5yb3V0ZXIucm91dGUoJy9jb250YWN0cycpXHJcblxyXG4gIC8vIGNyZWF0ZSBhIGJlYXIgUE9TVCBmdW5jdGlvblxyXG4gIC5wb3N0KGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgLy8gY3JlYXRlIG5ldyBpbnN0YW5jZSBvZiBCZWFyIG1vZGVsXHJcbiAgICB2YXIgY29udGFjdCA9IG5ldyBDb250YWN0KClcclxuICAgIC8vIHNldCBuZXcgbW9kZWxzIG5hbWUgdG8gbmFtZSB0aGF0IGNhbWUgaW4gb24gdGhlIHJlcXVlc3RcclxuICAgIGNvbnRhY3QubmFtZSA9IHJlcS5ib2R5Lm5hbWVcclxuICAgIC8vIHNhdmUgYmVhciBhbmQgY2hlY2sgZm9yIGVycm9ycztcclxuICAgIGNvbnRhY3Quc2F2ZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc2VuZChlcnIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogY29udGFjdC5uYW1lICsnIENvbnRhY3QgQ3JlYXRlZCEgaWQgaXMgJyArIGNvbnRhY3QuX2lkIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIC8vIEdFVCBhbGwgdGhlIGJlYXJzIC9hcGkvYmVhcnNcclxuICAuZ2V0KGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgQ29udGFjdC5maW5kKGZ1bmN0aW9uIChlcnIsIGNvbnRhY3RzKSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc2VuZChlcnIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcy5qc29uKGNvbnRhY3RzKVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuLy8gYWxsIG9mIG91ciByb3V0ZXMsIGRlZmluZWQgYWJvdmUsIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAvYXBpXHJcbmFwcC51c2UoJy9hcGknLCByb3V0ZXIpXHJcblxyXG4vLyBTVEFSVCB0aGUgc2VydmVyXHJcbmFwcC5saXN0ZW4ocG9ydClcclxuY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiBwb3J0ICcrIHBvcnQpXHJcbiJdfQ==