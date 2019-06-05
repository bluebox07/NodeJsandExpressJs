var express = require('express');
var router = express.Router();
let landing = require("../controller/landing");
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead)
router.all("/secret", landing.secret)
router.get('/about', landing.about);
router.get("/random.text", landing.random)
router.get("/ab?cd", landing.abcd)
///ab?cd" ab+cd , ab*cd, ab(cd)?e
// /a/ มีตัว a เข้าหมด no single or duble 
// .*fly$/ อะไรก็ได้ ที่มี fly นำหลัง


//router path = /users/:userId/books/:bookId
//req url = http://localhost:3000/users/34/books/98756
//req.params = {"userId":"34","bookId":"98756"}

router.get("/users/:userId/books/:bookId",function (req,res,next){
  res.send(req.params);
})
//route path: /flights/:from-:to
//req url = http://localhost:3000/flights/LAX-SFO
//req.params: = {"from":"LAX","to":"SFO"}
router.get("/flights/:from-:to",function (req,res,next){
  res.send(req.params);
})

//router path = /planet/:genus.:species
//req url = http://localhost:3000/planet/Prunus.persica
//req.params: = {"genus":"Prunus","species":"persica"}
router.get("/planet/:genus.:species",function (req,res,next){
  res.send(req.params);
})

//router path = /users:/userId(d+)
//req url = hhttp://localhost:3000/user/45    เข้าเฉพาะตัวเลขเท่านั้นป้องกันสคิป
//req.params: = {"userId":"45"}
router.get("/user/:userId(\\d+)",function (req,res,next){
  res.send(req.params);
})

router.get(
  "/example/b",
  function (req,res,next){
    console.log("send by next fn");
    next();
  },
  function(req,res){
    res.send("Hi from B");
  }
  );


var cb0 = (req,res,next)=>{
  console.log("CB0");
  next();
}

var cb1 = (req,res,next)=>{
  console.log("CB1");
  next();
}
var cb2 = (req,res,next)=>{
res.send("Hello from C");
}

router.get("/example/c",[cb0,cb1,cb2]);

router.get(
  "/example/d",
  [cb0,cb1],
  function (req,res,next){
    console.log("send by next fn");
    next();
  },
  function(req,res){
    res.send("Hi from D");
  }
  );

  router.route("/book")
  .get((req,res)=>{
    res.send("Get a book");
  })
  .post((req,res)=>{
    res.send("Add a book");
  })
  .put((req,res)=>{
    res.send("Upadate the book");
  })
  .delete((req,res)=>{
    res.send("Delete the book");
  })


router.get("/basicpug",(req,res,next)=>{
  res.render("basicpug");
})
module.exports = router;