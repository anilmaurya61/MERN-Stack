const a = {
  avg: (a,b)=>{
    console.log((a+b/2));
  },
  prn : (a,b)=>{
    console.log((a/b)*100);
  }
};

module.exports = a;

// Module
// file based, Build in, Third Party


// app.js file

const a= require("./Filebased_module");
a.avg(4,10);
a.prn(20,100);

