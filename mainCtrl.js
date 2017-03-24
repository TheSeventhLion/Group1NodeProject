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

// exports.getUserByPhone = (req, res) => {
//     let phone;
//     let name = req.params.name;
//     console.log(name);
//     for(let i =0;i<users.length;i++){
//         if(name == users[i].username){
//             phone = users[i].phone
//         }
//     }
//     res.json(phone);
// };


