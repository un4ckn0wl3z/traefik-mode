const app1 = require("express")();
const app2 = require("express")();
const app3 = require("express")();
const app4 = require("express")();

const appid_1 = 1111
const appid_2 = 2222
const appid_3 = 3333
const appid_4 = 4444

app1.get("/", (req,res) => 
res.send(`appid: ${appid_1} home page: says hello!`))
app1.get("/app1", (req,res) => 
res.send(`appid: ${appid_1} app1 page: says hello!`))
app1.get("/app2", (req,res) => 
res.send(`appid: ${appid_1} app2 page: says hello!`))
app1.get("/admin", (req,res) => 
res.send(`appid: ${appid_1} ADMIN page: very few people should see this`))

app2.get("/", (req,res) => 
res.send(`appid: ${appid_2} home page: says hello!`))
app2.get("/app1", (req,res) => 
res.send(`appid: ${appid_2} app1 page: says hello!`))
app2.get("/app2", (req,res) => 
res.send(`appid: ${appid_2} app2 page: says hello!`))
app2.get("/admin", (req,res) => 
res.send(`appid: ${appid_2} ADMIN page: very few people should see this`))


app3.get("/", (req,res) => 
res.send(`appid: ${appid_3} home page: says hello!`))
app3.get("/app1", (req,res) => 
res.send(`appid: ${appid_3} app1 page: says hello!`))
app3.get("/app2", (req,res) => 
res.send(`appid: ${appid_3} app2 page: says hello!`))
app3.get("/admin", (req,res) => 
res.send(`appid: ${appid_3} ADMIN page: very few people should see this`))


app4.get("/", (req,res) => 
res.send(`appid: ${appid_4} home page: says hello!`))
app4.get("/app1", (req,res) => 
res.send(`appid: ${appid_4} app1 page: says hello!`))
app4.get("/app2", (req,res) => 
res.send(`appid: ${appid_4} app2 page: says hello!`))
app4.get("/admin", (req,res) => 
res.send(`appid: ${appid_4} ADMIN page: very few people should see this`))

 
app1.listen(appid_1, ()=>console.log(`${appid_1} is listening on ${appid_1}`))
app2.listen(appid_2, ()=>console.log(`${appid_2} is listening on ${appid_2}`))
app3.listen(appid_3, ()=>console.log(`${appid_3} is listening on ${appid_3}`))
app4.listen(appid_4, ()=>console.log(`${appid_4} is listening on ${appid_4}`))