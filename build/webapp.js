'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userList = [{ id: 1, user: 'bob' }, { id: 2, user: 'sue' }];

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
var root = __dirname + '/public';
app.use(_express2.default.static(root));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('example app listening on port: ' + port);
});

app.get('/', function (req, res) {
  res.send('Hello World, express here');
});

// This responds a GET request for the /list_user page.
app.get('/api/list_user', function (req, res) {
  console.log('Got a GET request for /list_user');
  res.status(200).send(JSON.stringify(userList));
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(userList, 'userList', 'webapp.js');

  __REACT_HOT_LOADER__.register(app, 'app', 'webapp.js');

  __REACT_HOT_LOADER__.register(server, 'server', 'webapp.js');

  __REACT_HOT_LOADER__.register(root, 'root', 'webapp.js');
}();

;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYmFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksV0FBVyxDQUNiLEVBQUUsSUFBSSxDQUFOLEVBQVMsTUFBTSxLQUFmLEVBRGEsRUFFYixFQUFFLElBQUksQ0FBTixFQUFTLE1BQU0sS0FBZixFQUZhLENBQWY7O0FBS0EsSUFBSSxNQUFNLHdCQUFWO0FBQ0EsSUFBSSxHQUFKLENBQVEscUJBQVcsSUFBWCxFQUFSO0FBQ0EsSUFBTSxPQUFVLFNBQVYsWUFBTjtBQUNBLElBQUksR0FBSixDQUFRLGtCQUFRLE1BQVIsQ0FBZSxJQUFmLENBQVI7O0FBRUEsSUFBSSxTQUFTLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBWTtBQUN4QyxNQUFJLE9BQU8sT0FBTyxPQUFQLEdBQWlCLElBQTVCO0FBQ0EsVUFBUSxHQUFSLENBQVksb0NBQW9DLElBQWhEO0FBQ0QsQ0FIWSxDQUFiOztBQUtBLElBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CO0FBQy9CLE1BQUksSUFBSixDQUFTLDJCQUFUO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBLElBQUksR0FBSixDQUFRLGdCQUFSLEVBQTBCLFVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0I7QUFDNUMsVUFBUSxHQUFSLENBQVksa0NBQVo7QUFDQSxNQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBQXFCLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBckI7QUFDRCxDQUhEOzs7Ozs7OztnQ0FwQkksUTs7Z0NBS0EsRzs7Z0NBS0EsTTs7Z0NBSEUsSSIsImZpbGUiOiJ3ZWJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuXHJcbnZhciB1c2VyTGlzdCA9IFtcclxuICB7IGlkOiAxLCB1c2VyOiAnYm9iJyB9LFxyXG4gIHsgaWQ6IDIsIHVzZXI6ICdzdWUnIH1cclxuXVxyXG5cclxudmFyIGFwcCA9IGV4cHJlc3MoKVxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG5jb25zdCByb290ID0gYCR7X19kaXJuYW1lfS9wdWJsaWNgXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocm9vdCkpXHJcblxyXG52YXIgc2VydmVyID0gYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHBvcnQgPSBzZXJ2ZXIuYWRkcmVzcygpLnBvcnRcclxuICBjb25zb2xlLmxvZygnZXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQ6ICcgKyBwb3J0KVxyXG59KVxyXG5cclxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIHJlcy5zZW5kKCdIZWxsbyBXb3JsZCwgZXhwcmVzcyBoZXJlJylcclxufSlcclxuXHJcbi8vIFRoaXMgcmVzcG9uZHMgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIC9saXN0X3VzZXIgcGFnZS5cclxuYXBwLmdldCgnL2FwaS9saXN0X3VzZXInLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBjb25zb2xlLmxvZygnR290IGEgR0VUIHJlcXVlc3QgZm9yIC9saXN0X3VzZXInKVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHVzZXJMaXN0KSlcclxufSlcclxuIl19