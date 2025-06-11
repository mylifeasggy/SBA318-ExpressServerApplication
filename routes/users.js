import express from "express"

const router = express.Router()

   router.get ("/",(req, res)=>{
    res.send("User list")
})
   router.post("/new",(req, res)=>{
    res.send("Create user")
})

router.route("/:id")

   .get ((req, res)=>{
    res.send(`Get user with ID ${req.params.id}`)
}) .put ((req, res)=>{

    res.send(`Update user with ID ${req.params.id}`)
}).delete((req, res)=>{

    res.send(`Delete user with ID ${req.params.id}`)
})


export default router;