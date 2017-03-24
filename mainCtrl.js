const users = require(`./users.json`);

exports.getData = (req, res, next) => {
  res.json(users);
};
exports.deleteData = (req, res, next) =>{
  let id = req.body.id;

  for(let i=0;i<users.length;i++){
      if(id == users[i].id){
          users.splice(i,1);
      }
  }
    res.json(users)
};




