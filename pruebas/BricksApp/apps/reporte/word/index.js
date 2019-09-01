'use strict';
var officegen = require('officegen');
var tempfile=require('tempfile');
var fs=require('fs');
var reporte={};

reporte.WORD=function(data,callback){

	    var docx = officegen ({
        'type': 'docx',
        'subject': 'testing it',
        'keywords': 'some keywords',
        'description': 'a description'
    });
	var tempFilePath = tempfile('.docx');
    docx.setDocSubject ( 'testDoc Subject' );
    docx.setDocKeywords ( 'keywords' );
    docx.setDescription ( 'test description' );
    var pObj = docx.createP({align: 'center'});
    pObj.addText('Policy Data', {bold: true, underline: true});
    pObj.addText('Policy Denis', {bold: true, underline: true});
    pObj.addText('Policy Ricardo', {bold: true, underline: true});

    docx.on('finalize', function(written) {
        console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
    })
    docx.on('error', function(err) {
        console.log(err);
    });

var out = fs.createWriteStream ( 'out.docx' );
out.on ( 'error', function ( err ) {
    console.log ("vemos que hace",err );
});

docx.generate(out);
var buf = new Buffer([docx]);
callback(buf);


}
module.exports=reporte;