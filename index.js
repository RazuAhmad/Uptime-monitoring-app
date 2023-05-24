/*
*Title: Uptime Monitoring Application...
*Description: A RESTFul API to monitor up or down time of user defined links.
*Author: Abdur Rahman Razu

*/

// dependencies:::::
const http=require('http');
const {handlerReqRes}=require('./helpers/handleReqRes');

// app object - module scaffolding:::
const app = {};
 
// configuration::
app.config={
    port: 4000
};

// create server:::
app.createServer = ()=>{
    const server =http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Listening to the port ${app.config.port}`);
    })
}

// handle request response:::
app.handleReqRes=handlerReqRes

// Start the server:::
app.createServer()