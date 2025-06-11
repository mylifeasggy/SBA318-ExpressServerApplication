import express from "express"
import router from './user.js'



const app = express()
const port = 3000

app.use("/users", router)

// VIEW ENGINE 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  console.log('Here');
  res.render("index", { text: "World" })

})

app.get("/user", (req, res) => {
  console.log("Hi") 


})


app.get("/user/:id", (req, res) => {
  console.log("Hi")
  res.send(`Get user ${req.params.id}`)
  console.log(req.params.id)
})

app.put("/user", (req, res) => {

  res.send(`Update user  ${req.params.id}`)
})
app.delete("/user", (req, res) => {

  res.send(`Delete user  ${req.params.id}`)
})

app.listen(port, () => { 
  console.log(`Express web server listening on port http://localhost:${port}`);
}); 
