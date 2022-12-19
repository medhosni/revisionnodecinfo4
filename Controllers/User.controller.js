const User =require("../Models/User.model")
module.exports = {
    getuser:(req,res)=>{
      User.findOne({nom :req.body.nom })
      .then((user)=>{
        res.status(200)
        .json(user)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
    },
    getusers:(req,res)=>{
      User.find()
      .then((users)=>{
        res.status(200)
        .json(users)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
    },
    postuser:(req,res)=>{
    /*User.create(req.body)
    .then((user)=>{
        res.status(200)
        .json(user)
      })
      .catch(err =>{
        res.status(400).json(err)
      })*/
      const user = new User(req.body)
      //cryptage password
      //user.image = req.files.filename
      user.save()
      .then((user)=>{
        res.status(200)
        .json(user)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
    },
    patchuser:(req,res)=>{
       User.findOneAndUpdate({nom : req.body.nom},{email :"a@a.tn"})
       .then((user)=>{
        res.status(200)
        .json(user)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
    },
    putuser:(req,res)=>{

    },
    deleteuser:(req,res)=>{
        User.findOneAndDelete({nom : req.body.nom},{email :"a@a.tn"})
        .then((user)=>{
         res.status(200)
         .json(user)
       })
       .catch(err =>{
         res.status(400).json(err)
       })
    },
};
//export default router;