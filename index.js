const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/testGet', function(req, res) {
    console.log(req);
	res.send("testGet success");
});

app.post('/testPost', function(req, res) {
    console.log(req);
	res.send("testPost Success");
});


app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})