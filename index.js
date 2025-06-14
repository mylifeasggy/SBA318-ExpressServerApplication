import express from "express"
import bodyParser from "body-parser";
import reservationRoutes from './routes/reservations.js';
import reviewsRoutes from "./routes/reviews.js"




const app = express()
const port = 3000




app.use(bodyParser.json());
app.use(express.static('public'))


app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});


app.use("/reservations", reservationRoutes);
app.use("/reviews", reviewsRoutes)

// VIEW ENGINE 
app.set('view engine', 'ejs');


//HomePAGE
app.get("/", (req, res) => {

  res.render('index',{title: 'Home'});

});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).send('Internal Server Error!');
});

app.listen(port, () => { 
  console.log(`Express web server listening on port http://localhost:${port}`);
}); 
