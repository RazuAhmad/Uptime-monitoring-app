/*

*Title: Not Found handler
*Description: 404 Not Found Handler
*Author: Abdur Rahman Razu
*Date: 22/05/2023

*/ 

// Module scaffolding:::
const handler= {};

handler.notFoundHandler=(requestProperties, callback)=>{

    callback(404, {
        message: 'Your requested URL was not found'
    });
    
}

module.exports =handler;