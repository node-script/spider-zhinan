var fs = require("fs");
var minify = require('html-minifier').minify;
var escape = require('escape-html');

var a = fs.readFileSync('basic.html');

function dotran(str) {
    str = str.replace(/"/g, "e").replace(/'/g, "E");
    
    return str;
}

var data = dotran(a.toString());

 var html = minify(data,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true})


console.log(html);

