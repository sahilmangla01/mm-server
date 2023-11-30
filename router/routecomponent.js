const route = require('express').Router();
const {register , loginUser}=require("../Controller/controller")

route.post("/register",register)
route.post("/login",loginUser)


module.exports = route;