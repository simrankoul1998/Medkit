const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI,(err)=>{
  
//     if (!err){console.log('successfull');}
//     else{console.log('error:' +JSON.stringify(err,undefined,2));}

// }); 
// require('./user.model');