"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _productos = _interopRequireDefault(require("./routes/productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 8080;
const app = (0, _express.default)();

const layoutsPth = _path.default.resolve(__dirname, '../views/layouts');

const defaultLayerPth = _path.default.resolve(__dirname, '../views/main.hbs');

app.set('view engine', 'hbs');
app.engine('hbs', (0, _expressHandlebars.default)({
  layoutsDir: layoutsPth,
  defaultLayout: defaultLayerPth,
  extname: 'hbs'
}));
const server = app.listen(port, () => {
  console.log(`Server running in port:  ${port}`);
});
server.on('error', err => {
  console.error(`There was an error: ${err}`);
});
app.set('json spaces', 2);
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/', _productos.default);