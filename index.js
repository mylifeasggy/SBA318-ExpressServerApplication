import express from "express"
import bodyParser from "body-parser";
import reservationRoutes from './routes/reservations.js';
import reviewsRoutes from "./routes/reviews.js"




const app = express()
const port = 3000


app.use(bodyParser.json());
app.use("/reservations", reservationRoutes);
app.use("/reviews", reviewsRoutes)




// VIEW ENGINE 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

  res.render('index');

});

/*app.get("/reservations", (req, res) => {

  res.render('reservation');


});

app.get('/reviews',(req, res)=>{
  res.render('review')


})

*/

app.listen(port, () => { 
  console.log(`Express web server listening on port http://localhost:${port}`);
}); 
