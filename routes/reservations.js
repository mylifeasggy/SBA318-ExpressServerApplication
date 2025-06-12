import express from "express"
import bodyParser from "body-parser";





const router = express.Router();

router.use(bodyParser.json());

let reservations = [
    {
        firstName: "Ginellys",
        lastName: "Medina",
        Date: "2025-09-06",
        Time: "20:00 PM",
        Email: "GinellysMsuarez@gmail.com",
        Phone: "732-277-9594",
        People: "6"
    },





    {
        firstName: "Michelangelo",
        lastName: "Medina",
        Date: "2025-09-06",
        Time: "20:00 PM",
        Email: "GinellysMsuarez@gmail.com",
        Phone: "284-232-23232",
        People: "6"
    }
];



router.get("/", (req, res) => {
    res.send("Hello User")
    console.log(reservations)
})
router.post("/", (req, res) => {
   
    const { firstName, lastName, Date, Time, Email, Phone, People } = req.body
    const reservation = req.body;

    reservations.push(reservation )
    console.log(reservation)
    res.status(201).json({ message: 'Reservartion created successfully', reservation })
})

router.route("/:phone")

    .get((req, res) => {
       // const reservationphone=

        console.log("find reservation details")
        res.send("Get reservation with phone")

    }).put((req, res) => {
        const reservationPhone = req.params.phone;
        const reservationTobeUpdated = reservations.find((reservation) => reservation.Phone === reservationPhone)
        const { Date, Time } = req.body;
        if(Date) reservationTobeUpdated.Date = Date;
        if(Time) reservationTobeUpdated.Time= Time;
        console.log(reservations)
        res.send("Your reservation has been updated")

    }).delete((req, res) => {
        const reservationPhone  = req.params.phone;
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
  