import express from "express"
import bodyParser from "body-parser";





const router = express.Router();

router.use(bodyParser.json());

let reservations = [];

router.get("/", (req, res) => {
    res.send("Hello User")
    console.log(users)
})
router.post("/", (req, res) => {
    console.log("ROUTE REACHED")

    // const { firstName, lastName, Date, Time, Email, Phone, People } = req.body
    const reservation = req.body
     users.push({ reservation })
    res.send("A new reservation has been created")
    res.status(201).json({ message: 'Reservartion created successfully', reservation })
})

router.route("/:id")

    .get((req, res) => {
       // const reservationId=

        console.log("find reservation details")
        res.send(`Get reservation with ID ${req.params.reservationId}`)

    }).put((req, res) => {
        const reservationId = req.params;
        const reservationTobeUpdated = reservations.find((reservation) => reservation.id === id)
        const { Date, Time } = req.body
        res.send(`Your reservation has been updated ${req.params.id}`)

    }).delete((req, res) => {
        const reservationId  = req.params
        reservations = reservations.filter((reservation) => reservation.id !== id);
        res.send(`Delete user with id ${req.params.id} deleted from the database`);
    })


export default router;