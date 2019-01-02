var http = require('http');
var url = require('url');
var fs = require("fs");

var iconv = require('iconv-lite');


function spider(u,dirid,cb){

    http.get( url.parse(u), function(res){
        var d = ''
        res.on('data',function(chunk){
            d += chunk;
        })
        res.on('end',function(){
            //console.log('spider_end && do cb');
            cb(d,dirid);
        })
    });


};

var u = "http://zwfw.tj.gov.cn/lawguide/120116000000300717847186.jspx";
var id = "G2";





/*
if( require.main === module ) {
    u = process.argv[2]
};
*/
var libxmljs = require("libxmljs");

var xpathText = function(selector, value){ 
    
    var xmlDoc = libxmljs.parseHtmlString(value);
    var result = xmlDoc.find(selector);
    var results = [];
    result = [result];
    result.forEach(function(node){
        
        if(node) results.push("\uFEFF"+ node.toString());
    })
    return results;
};



fs.readFile('./memo.txt', 'utf8', function (err, data) {

    var items = data.split("\r\n");

    items.forEach(function (item, index) {
        if(item)
         {
            var kv = item.split("=");
            console.log(kv[0]+ "=" +kv[1]);

            spider(kv[0],kv[1].trim(),function( html,dirid_param ){
                　　//这个返回的是网页内容的信息;
                
                    var filepath = "data2/"+ dirid_param +"/";
                    if (!fs.existsSync(filepath)){
                        fs.mkdirSync(filepath);
                    }
                    
                    var node_title = xpathText("/html/body/div[1]/div[2]/div[2]/div[1]/div[1]",html)[0];
                    //console.log("node_title=" + node_title);
                
                    fs.writeFile(filepath + "title.txt", node_title);
                
                    var node_jibenxinxi = xpathText("/html/body/div[1]/div[2]/div[2]/div[1]/table",html)[0];
                
                    //console.log("node_jibenxinxi=" + node_jibenxinxi);
                    var _tichu_jibenxinxi = fs.readFileSync("_tichu_jibenxinxi.txt");
                    node_jibenxinxi = node_jibenxinxi.replace(_tichu_jibenxinxi,"");
                    node_jibenxinxi = node_jibenxinxi.replace("滨海新区审批局","生态城审批局");
                
                    node_jibenxinxi = node_jibenxinxi.replace("022-66897800","022-66328010");
                
                    node_jibenxinxi = node_jibenxinxi.replace("022-66897866","022-67288959");
                    node_jibenxinxi = node_jibenxinxi.replace("022-66897700","022-67288959");
                
                    node_jibenxinxi = node_jibenxinxi.replace("工作日上午：9:00 至 12:00下午：13:30 至 17:00","工作日上午：9:00至12:00下午：13:00至16:30");
                
                    
                    fs.writeFile(filepath + "jibenxinxi.txt", node_jibenxinxi);
                
                    var node_shenqingcailiao_1 =xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[1]/div/div/table",html)[0];
                    //console.log("node_shenqingcailiao_1=" + node_shenqingcailiao_1);
                    fs.writeFile(filepath + "shenqingcailiao-1.txt", node_shenqingcailiao_1);
                
                    var node_shenqingtiaojian_2 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[2]",html)[0];
                    //console.log("node_shenqingtiaojian_2=" + node_shenqingtiaojian_2);
                    fs.writeFile(filepath + "shenqingtiaojian-2.txt", node_shenqingtiaojian_2);
                
                    var node_banlixingshi_3 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[3]/table",html)[0];
                    //console.log("node_banlixingshi_3="+node_banlixingshi_3);
                    fs.writeFile(filepath + "banlixingshi-3.txt", node_banlixingshi_3);
                
                
                    var node_banliyiju_4 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[4]/div[2]/table",html)[0];
                    //console.log("node_banliyiju_4="+node_banliyiju_4);
                    //var _tichu_banliyiju = fs.readFileSync("_tichu_banliyiju.txt");
                    //node_banliyiju_4 = node_banliyiju_4.replace(_tichu_banliyiju,"");
                    
                    node_banliyiju_4 = node_banliyiju_4.replace("/getPolicyFile.jspx","http://103.233.7.12:8091/api/ws_zhinan.asmx/getPolicyFile");
                    
                    fs.writeFile(filepath + "banliyiju-4.txt", node_banliyiju_4);
                
                    var node_qitayiju_5 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[5]",html)[0];
                    //console.log("node_qitayiju_5=" + node_qitayiju_5);
                    fs.writeFile(filepath + "qitayiju-5.txt", node_qitayiju_5);
                
                    var node_banliliucheng_6 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[6]/div[2]/table",html)[0];
                    //console.log("node_banliliucheng_6=" + node_banliliucheng_6);
                    fs.writeFile(filepath + "banliliucheng-6.txt", node_banliliucheng_6);
                
                    var node_liuchengtu_7 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[7]",html)[0];
                    //console.log("node_liuchengtu_7=" + node_liuchengtu_7)
                    node_liuchengtu_7 = node_liuchengtu_7.replace("/fileService/downloadFile.jspx","http://zwfw.tj.gov.cn/fileService/downloadFile.jspx");
                    fs.writeFile(filepath + "liuchengtu-7.txt", node_liuchengtu_7);
                
                
                    var node_changjianwenti_8 = xpathText("/html/body/div[1]/div[2]/div[2]/div[2]/div/div[8]/div[2]/table",html)[0];
                    //console.log("node_changjianwenti_8=" + node_changjianwenti_8);
                    fs.writeFile(filepath + "changjianwenti-8.txt", node_changjianwenti_8);
                
                });

         }
    });

});


return;







//基本信息
/* 

    /html/body/div[1]/div[2]/div[2]/div[1]/table
    
    /html/body/div[1]/div[2]/div[2]/div[1]/table

*/





//参考：https://www.cnblogs.com/diligenceday/p/4047816.html

