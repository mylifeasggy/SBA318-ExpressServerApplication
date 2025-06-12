import express from "express"
import bodyParser from "body-parser";

const reviewsrouter = express.Router();

reviewsrouter.use(bodyParser.json());

/* let reviews = [
    {
     id, 
     reservationId, 
     rating, 
     comment
    }
]; 
*/






























export default reviewsrouter;