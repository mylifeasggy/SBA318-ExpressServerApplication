import express from "express"
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';



const app = express()
const port = 3000
app.use(bodyParser.json());
app.use("/users", usersRoutes);

// VIEW ENGINE 
//app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  console.log('Homepage');
  res.send("Hello from Homepage")

});


app.listen(port, () => { 
  console.log(`Express web server listening on port http://localhost:${port}`);
}); 
