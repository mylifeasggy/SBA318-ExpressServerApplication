import express from "express"
import reservationRoutes from './routes/reservations.js';
import reviewsRoutes from "./routes/reviews.js"
import menuRoutes from "./routes/menu.js"




const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());




//This middleware logs every incoming request's method and URL, then allows the request to proceed. 
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});


app.use("/reservations", reservationRoutes);
app.use("/reviews", reviewsRoutes)
app.use("/menu", menuRoutes)

// VIEW ENGINE 
//To parse HTML form data
app.set('view engine', 'ejs');// To enable rendering EJS views
app.use(express.static('public'));


//HomePAGE
app.get("/", (req, res) => {

  res.render('index',{title: 'Home'});

});

app.use((err, req, res, next) => {
  console.error(err.stack); // console.error(err.stack) prints it to the terminal or log, helping with debugging.  
  //diagnostic tool that shows a reverse timeline of what your code was doing before the error hit.
  res.status(500).send('Something Broke!');
});

app.listen(port, () => { 
  console.log(`Express web server listening on port http://localhost:${port}`);
}); 
