exports.get_landing = function(req,res,next){
    res.render("landing",{ title: "Express XD"});
}

exports.submit_lead = (req,res,next)=>{
    console.log("Lead email: ", req.body.lead_email);
    res.redirect("/");
}
exports.secret = (req,res,next)=>{
    res.render("secret");
}
exports.about = (req,res,next)=>{
    res.render("About");
}
exports.random = (req, res, next) => {
    res.send("random1.text");
}
exports.abcd = (req, res, next) => {
    res.send("abcd");
}