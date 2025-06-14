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


let reservations = [

    {
        id: "605fe58b-885f-41f9-9995-3e284f6b4c81",
        firstName: "Michelangelo",
        lastName: "Medina",
        date: "2025-09-06",
        time: "20:00 PM",
        email: "GinellysMsuarez@gmail.com",
        phone: "284-232-23232",
        people: "9"
    },
    {
        id: '10960e54-9272-402e-bc5d-9357f83e9e28',
        firstName: 'Oussama',
        lastName: 'Hamani',
        date: '2025-09-10',
        time: '08:00pm',
        email: 'OussamaHamani@gmail.com',
        phone: '284-232-23232',
        people: '2'
    }
];

console.log(reservations)
router.get("/", (req, res) => {
    res.render('reservation', {title: 'Reservations'});

   
})
router.post("/", (req, res) => {

    const { firstName, lastName, date, time, email, phone, people } = req.body
      if (!firstName || !lastName || !date || !time || !email || !phone || !people) {
        return res.status(400).send({ error: "Missing one or more required reservation fields." });
    } 
    
    const id= uuidv4()

      const newReservation = {
        id,
        firstName,
        lastName,
        date,
        time,
        email,
        phone,
        people,
        
    };

    reservations.push(newReservation)

  
        res.status(201).json({ message: 'Reservartion created successfully', newReservation })
    

})

router.route("/:id")

    .get((req, res) => {
        const reservationbyId = reservations.find(r => r.id ===(req.params.id));
       
     if (!reservationbyId) return res.status(404).send('Reservation not found')
        res.json(reservationbyId);


    }).put((req, res) => {
        req.params.id;
        const rUpdate = reservations.find((reservation) => reservation.id === req.params.id)
        //const {date , time}
        rUpdate.date = req.body.date;
        rUpdate.time = req.body.time;

        res.send("Your reservation has been updated")

    }).delete((req, res) => {
        const rDelete = reservations.filter((reservation) => reservation.id !== req.params.id);
        let reservations = rDelete
        res.status(200).send("Reservation deleted from the database");
    })

export default router;

