//Express, Body-parser and posts
const express = require("express")

const router = express.Router()

const bodyParser = require('body-parser');

const posts = require('../model/posts')

//coding
router.get("/all", (req, res)=>{

    res.json(JSON.stringify(posts.getAll()))
});

router.post("/new", bodyParser.json(), (req, res)=>{

    console.log(req);

let title = req.body.title;

let description = req.body.description;

posts.newPost(title, description);

res.send("Post adicionado");

});

module.exports = router;