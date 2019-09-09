"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _http = _interopRequireDefault(require("http"));

var _ejs = _interopRequireDefault(require("ejs"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.engine('html', _ejs["default"].renderFile);
app.set('views', "".concat(__dirname, "/../client"));
app.use(_express["default"]["static"]("".concat(__dirname, "/client")));
server.listen(port, function () {
  process.stdout.write("\n    Server running on port: ".concat(port));
});
app.get('/', function (req, res) {
  return res.status(200).render('./src/index.html');
});