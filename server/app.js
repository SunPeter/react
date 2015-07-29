var koa = require("koa");
var app = koa();
var React = require("react/addons");
require('node-jsx').install();
var HelloMessage = React.createFactory(require("./HelloMessage"));

app.use(function*() {
    var html = React.renderToString(HelloMessage({name: "John"}));
    this.body = html;
});

app.listen(8080);
