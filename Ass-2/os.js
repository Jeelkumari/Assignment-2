var os = require("os");

// Cpus
console.log('CPUs : ' + (os.cpus()).length);

//1. OS CPU architecture
console.log("Architecture: " + os.arch());

//2. Free memory of the system
console.log('Free memory : ' + os.freemem() + " bytes.");

//3. Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

//4. OS platform
console.log('platform : ' + os.platform());

//5. Information about the current user
console.log('Current User Information: ' + os.userInfo());





