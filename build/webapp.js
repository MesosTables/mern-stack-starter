'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
var root = __dirname + '/public';
app.use(_express2.default.static(root));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYmFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksTUFBTSx3QkFBVjtBQUNBLElBQUksR0FBSixDQUFRLHFCQUFXLElBQVgsRUFBUjtBQUNBLElBQU0sT0FBVSxTQUFWLFlBQU47QUFDQSxJQUFJLEdBQUosQ0FBUSxrQkFBUSxNQUFSLENBQWUsSUFBZixDQUFSOztBQUVBLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBTTtBQUNyQixVQUFRLEdBQVIsQ0FBWSw2QkFBWjtBQUNELENBRkQiLCJmaWxlIjoid2ViYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbnZhciBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5jb25zdCByb290ID0gYCR7X19kaXJuYW1lfS9wdWJsaWNgO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHJvb3QpKTtcclxuXHJcbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdBcHAgbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCEnKTtcclxufSk7XHJcbiJdfQ==