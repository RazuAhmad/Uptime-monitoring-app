const http=require('http');

// Create a server:::::

const app= http.createServer((req,res)=>{
    res.write('Hellow brothers and sisters');
    res.end()
})


app.listen(5680)

console.log("Listening on port 5680 okay?");