const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const responseJson = {
    "success": 1,
    "data": null,
    "msg": null
}
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/testGet', function(req, res) {
    console.log(req.query);
    console.log("call testGet");
    res.send("testGet success");
});

app.post('/testPost', function(req, res) {
    console.log("call testPost");
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    var resjson = responseJson;
    resjson.data = "post response data";
    resjson.msg = "成功";
    //res.send("testPost Success");
    res.send(resjson);
});


app.listen(8089, () => {
    console.log(`App listening at port 8080`)
})