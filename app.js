// get dependencies
const express = require('express');
const ejs = require('ejs');

const app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/fallenlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar:thing});
})

app.get("/posts", function(req, res){
    var posts = [
        {title:"post 1", author:"Charlie"},
        {title:"post 2", author:"Charlie 2"},
        {title:"post 3", author:"Charlie 3"}
    ]
    res.render("posts.ejs", {posts: posts});
})
// listen on port
app.listen(6661);
console.log("listening on 6661");