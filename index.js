/*
*Title: Uptime Monitoring Application...
*Description: A RESTFul API to monitor up or down time of user defined links.
*Author: Abdur Rahman Razu

*/

// dependencies:::::
const http=require('http');
const {handlerReqRes}=require('./helpers/handleReqRes');
const environment =require('./helpers/environments')

// app object - module scaffolding:::
const app = {};
 


// create server:::
app.createServer = ()=>{
    const server =http.createServer(app.handleReqRes);

    server.listen(environment.port, ()=>{

        console.log(`Listening to the port ${environment.port}`);
    })
}

// handle request response:::
app.handleReqRes=handlerReqRes

// Start the server:::
app.createServer()