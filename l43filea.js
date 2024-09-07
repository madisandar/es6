console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));


// console.log(module);
// console.log(require);
// console.log(require.main === module);  //true

// console.log(require.resolve); //[Function: resolve] { paths: [Function: paths] }
// console.log(require.resolve("./l43fileb.js")); ///home/thiri_sandar/Documents/es6batch1/l43fileb.js
// console.log(require.cache[require.resolve('./l43fileb')].exports);  //1723024324838


// require.cache[require.resolve('./l43fileb')].exports = "Here is a new value";
// console.log(require("./l43fileb.js"));  //Here is a new value


delete require.cache[require.resolve("./l43fileb")];
console.log(require("./l43fileb.js"));  //1723024545364

