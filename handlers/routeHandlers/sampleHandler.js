/*

*Title: sample handler
*Description: sample Handler
*Author: Abdur Rahman Razu
*Date: 22/05/2023

*/ 

// Module scaffolding:::
const handler= {};

handler.sampleHandler=(requestProperties,callback)=>{
    console.log(requestProperties);
    
    callback(200, {
        message: 'This is a sample url'
    })
}

module.exports =handler;