var fs = require("fs");
var minify = require('html-minifier').minify;


function base64_encode(file) {
    let bitmap = fs.readFileSync(file);
    
    var html = minify(bitmap.toString(),{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true})

    return new Buffer(html).toString('base64');
}

function base64_encode2(file) {
    let bitmap = fs.readFileSync(file);

    return new Buffer(bitmap).toString('base64');
}

var base64 = base64_encode2("title.html");
fs.writeFile("title.txt", base64);

return;

var base64 = base64_encode("1基本信息.html");
fs.writeFile("1基本信息.txt", base64);

base64 = base64_encode("2申请材料.html");
fs.writeFile("2申请材料.txt", base64);

base64 = base64_encode("3申请条件.html");
fs.writeFile("3申请条件.txt", base64);


base64 = base64_encode("4办理形式.html");
fs.writeFile("4办理形式.txt", base64);

base64 = base64_encode("5办理依据.html");
fs.writeFile("5办理依据.txt", base64);


base64 = base64_encode("6其他依据.html");
fs.writeFile("6其他依据.txt", base64);

base64 = base64_encode("7办理流程.html");
fs.writeFile("7办理流程.txt", base64);

base64 = base64_encode("8流程图.html");
fs.writeFile("8流程图.txt", base64);

base64 = base64_encode("9常见问题.html");
fs.writeFile("9常见问题.txt", base64);






