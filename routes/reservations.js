import express from "express"
import bodyParser from "body-parser";





const router = express.Router();

router.use(bodyParser.json());

let reservations = [
    {
        firstName: "Ginellys",
        lastName: "Medina",
        date: "2025-09-06",
        time: "20:00 PM",
        email: "GinellysMsuarez@gmail.com",
        phone: "732-277-9594",
        people: "6"
    },





    {
        firstName: "Michelangelo",
        lastName: "Medina",
        date: "2025-09-06",
        time: "20:00 PM",
        email: "GinellysMsuarez@gmail.com",
        phone: "284-232-23232",
        people: "9"
    }
];



router.get("/", (req, res) => {
    res.send("Hello User")
    console.log(reservations)
})
router.post("/", (req, res) => {

    const { firstName, lastName, date, time, email, phone, people } = req.body
    const newReservation = {
        firstName,
        lastName,
        date,
        time,
        email,
        phone,
        people,
    };
    reservations.push(newReservation)
    console.log(newReservation)
    res.status(201).json({ message: 'Reservartion created successfully', newReservation })
})

router.route("/:phone")

    .get((req, res) => {
        console.log(reservations)
        res.send(`Get reservation with phone ${req.params.phone}`)

    }).put((req, res) => {
        req.params.phone;
        const reservationTobeUpdated = reservations.find((reservation) => reservation.phone === req.params.phone)

        
        res.send("Your reservation has been updated")

    }).delete((req, res) => {
        const reservationPhone = req.params.phone;
        reservations = reservations.filter((reservation) => reservation.Phone !== reservationPhone);
        console.log(reservationPhone)
        console.log(reservations)
        res.send("Reservation deleted from the database");
    })


export default router;

/*
{ 
  "firstName": "Michelangelp", 
  "lastName": "Ferrer", 
  "Date":"2025-09-10", 
  "Time":"08:00pm", 
  "Email":"Milo@gmail.com", 
  "Phone":"284-232-23232", 
  "People":"9"
}*/
  