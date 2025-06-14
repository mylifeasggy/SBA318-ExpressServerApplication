import express from "express"
import bodyParser from "body-parser";
import reservationRoutes from './routes/reservations.js';
import reviewsRoutes from "./routes/review.js"




const app = express()
const port = 3000


app.use(bodyParser.json());
app.use("/reservations", reservationRoutes);
app.use("/reviews", reviewsRoutes)




// VIEW ENGINE 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  console.log('Homepage');
  res.render('index');

});

app.get("/reservations", (req, res) => {

  res.render('reservations');


});



app.listen(port, () => { 
  console.log(`Express web server listening on port http://localhost:${port}`);
}); 
