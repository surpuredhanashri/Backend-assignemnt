var os = require("os");
console.log("Archecture:" + os.arch());
console.log("Number of CPUS" + JSON.stringify(os.cpus()));
console.log("Free memory:" + os.freemem(0 + "bytes"));
console.log("Home Directory. : " + os.homedir());
console.log("Network Interfaces : " + JSON.stringify(os.networkInterfaces()));
console.log("OS Platform : " + os.platform());

// os.homedir() - Home Directory.
// JSON.stringify(os.networkInterfaces()) - Network Interfaces.
// os.platform() - OS Platform.
// os.release() - Release of the OS.
// +os.tmpdir() - Temporary directory.
// os.totalmem() -Total Memory in bytes.
// os.type() - This method returns the operating system name.
// os.uptime() -  Total uptme of CPU in seconds.

// var path= require("path")
// console.log("Joining the path:"+path.join("","json","data","reading"));
// console.log("File extension:"+path.extname("/Users/mtxit/Desktop/Node/input.txt"));
// console.log("Directory name"+path.dirname("/Users/mtxit/Desktop/Node/input.txt"));

// var dns = require("dns");
// const { hostname } = require("os");

// dns.lookup("www.google.co.in", (err, address, family) => {
//   console.log("address:" + address);
//   console.log("family:" + family);
// });

// dns.resolve4("www.swiggy.com", (err, addresses) => {
//   if (err) throw err;

//   console.log(
//     "All the IP addresses of www.swiggy.com" + JSON.stringify(addresses)
//   );

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostname) => {
//       if (err) throw err;

//       console.log(`IP address is: ${a} and its hostname: ${hostname}`);
//     });
//   });
// });
