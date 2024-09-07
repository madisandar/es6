// =>Common JS

console.log("hello sir,i am file one");
// require('./l40filetwo.js');
// require('./l40filetwo.js');


// let girl = "Su Su";
// console.log(girl);

// let boy = require('./l40filetwo.js');
// console.log(boy);

// let man = require('./l40filetwo.js');
// console.log(man);



// let getcity = require('./l40filetwo.js');
// console.log(getcity); // { prop_city: 'Mandalay' }
// console.log(getcity.prop_city); // Mandalay










let getobj = require('./l40filetwo.js');
console.log(getobj); //{ greeting: 'Hello sir', message: 'Have a good day' }
console.log(getobj.greeting); //Hello sir
console.log(getobj.message); //Have a good day


// console.log(module);
console.log(module.children[0].exports); ////{ greeting: 'Hello sir', message: 'Have a good day' }
console.log(getobj === module.children[0].exports); //true
console.log(module.children[0].exports.greeting); // Hello sir
console.log(module.children[0].exports.message); // Have a good day




// node l40fileone
// node l40fileone.js