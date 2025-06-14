import express from "express"
import bodyParser from "body-parser";

//import reviewsRoutes from "./routes/review.js"


import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware executed');
  next();
});


router.use(bodyParser.json());

let plates=[
    {
    id:"7da760b9-506b-4a74-bfd2-751be48df392",
    item_name:"Dragon Roll",
    item_description:"Rice, seaweed, shrimp, cucumber, tempura, avocado,Eel sauce",
    serving_size:"10 rolls",
    category:"sushi",
    price:"24.00",
    vegan:"No"
},
{
    id:"c6ff682d-a5c4-4171-a05a-d5367bda51f1",
    item_name: "Mangu",
    item_description: "Mashed Plaintains, Salami, fried eggs, fried cheese,onion",
    serving_size: "1",
    category: "breakfast",
    price: "15.00",
    vegan: "No"

}


/* {
    "item_name": "Mangu",
    "item_description": "Mashed Plaintains, Salami, fried eggs, fried cheese,onion",
    "serving_size": "1",
    "category": "breakfast",
    "price": "15.00",
    "vegan": "No"

}
 */

]
router.get("/", (req, res) => {
    res.send(plates)

   
})

router.post("/", (req, res) => {

    const { item_name,item_description,serving_size, category, price, vegan} = req.body
    const id= uuidv4()

    let newPlate= {
        id,
        item_name,
        item_description,
        serving_size,
        category,
        price,
        vegan,
    };

    plates.push(newPlate)
    
    res.status(201).json({ message: 'Plate created successfully', newPlate })
})


router.route("/:id")

    .get((req, res) => {
        const platesbyId = plates.find(p => p.id ===(req.params.id));
       
     if (!platesbyId) return res.status(404).json('plate not found')
        return;


    }).put((req, res) => {
        req.params.id;
        const rUpdate = plates.find((plate) => plate.id === req.params.id)
        //const {date , time}
        rUpdate.price = req.body.price;

        res.send("The price has been updated")

    }).delete((req, res) => {
        const rDelete = plates.filter((plate) => plate.id !== req.params.id);
        let plates = rDelete
        res.status(200).send("Plate deleted from the database");
    })




export default router;
