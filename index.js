const express = require('express')
const path = require('path')
const app = express()
const responseJson = {
    "success": 1,
    "data": null,
    "msg": null
}
app.use(express.static(path.join(__dirname, 'public')))

app.get('/testGet', function(req, res) {
    // console.log(req);
    res.send("testGet success");
});

app.post('/testPost', function(req, res) {
    // console.log(req);
    var resjson = responseJson;
    resjson.data = "post response data";
    resjson.msg = "成功";
    //res.send("testPost Success");
    res.send(resjson);
});


app.listen(8080, () => {
    console.log(`App listening at port 8080`)
})