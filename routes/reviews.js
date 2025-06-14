import express from "express"
import bodyParser from "body-parser";


import { v4 as uuidv4 } from 'uuid';

const reviewsrouter = express.Router();

reviewsrouter.use((req, res, next) => {
  console.log('Router-level middleware executed');
  next();
});



let reviews = [
    {
        id: "b3a1c4bc-aee3-4747-bf2e-5527b52108f1",
        email:"test@gmail.com",
        rating: "5",
        comment: "The food at SquareOne is exceptional! Very tasty and well prepared and you can chose among many menu options. I love the service at the place and the chef is so friendly with the guests and always takes care to offer the best quality! I highly recommend this place."

    },

    {
        id:"482b815b-455e-4ba2-bc3b-beebc58635d5",
        email:"test@gmail.com",
        rating: "4.5",
        comment: 'Dined at SquareOne with friends, and the experience was amazing! Great ambiance, attentive staff, and the food was to die for.'



    },
];

/*
{
"email":"test@gmail.com",
"rating": 5
"comment":"amazing food and amazing people"
}

*/
reviewsrouter.get("/", (req, res) => {
 

     const comentarios = [
        {comment: "The food at SquareOne is exceptional! Very tasty and well prepared and you can chose among many menu options. I love the service at the place and the chef is so friendly with the guests and always takes care to offer the best quality! I highly recommend this place.", rating: "5" },
        {comment: 'Dined at SquareOne with friends, and the experience was amazing! Great ambiance, attentive staff, and the food was to die for.', rating: "4.5"},
    ]
      res.render('review',{title:'Reviews', comentarios})

});

reviewsrouter.post('/', (req, res) => {
    const { rating, comment, email } = req.body
    const id = uuidv4()
    let newReview = {
        id,
        email,
        rating,
        comment
    }

    reviews.push(newReview);

    res.status(201).json({ message: 'Comment posted successfully', newReview })


});


reviewsrouter.delete('/', (req, res) => {
        const cDelete = reviews.filter((r) => r.id !== req.params.id);
        let reviews = cDelete
        res.status(200).json("Comment deleted from the database");
    })



//    res.status(404).json({ error: "Comment not found" });

export default reviewsrouter;