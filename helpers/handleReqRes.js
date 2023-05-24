/*

*Title: handle request response
*Description: handle request and response
*Author: Abdur Rahman Razu
*Data: 22-05-2023

*/ 

// dependencies::::::
const url =require('url');
const {StringDecoder}= require('string_decoder');
const routes =require('../routes');
const {notFoundHandler}=require('../handlers/routeHandlers/notFoundHandler')

// module scaffolding:::::
const handler = {};

handler.handlerReqRes=(req,res)=>{

    // request handling:::::
    const parsedUrl=url.parse(req.url,true);
    const path =parsedUrl.pathname;
    const trimmedPath =path.replace(/^\/+|\/+$/g,'')
    const method =req.method.toLowerCase();
    const queryStringObject =parsedUrl.query;
    const headersObject =req.headers;
    
    const decoder= new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer)=>{
        realData += decoder.write(buffer)
    })

    req.on('end', ()=>{
        realData +=decoder.end();
        console.log(realData);

         // response handling:::::
    res.end('Hellow World')
    })

   
}

module.exports =handler;