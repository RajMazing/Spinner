
process.stdout.write('hello from spinner1.js... \rheyyy\n');
 beyBlade = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\n']
let start = 200;
let upAndItsStuck = 100;
for (let i = 0; i <  beyBlade.length; i++) {
    start += upAndItsStuck;
    setTimeout(() => {
        process.stdout.write( beyBlade[i]);
    }, start);

  }




























































// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');

// }, 100);


// setTimeout(() => {
//   process.stdout.write('\r/   ');

// }, 300);

// setTimeout(() => {
// process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backlash since its's a special character
//   process.stdout.write('\r\\    ');
// }, 700);


// // ... fill in the rest yourself...


// setTimeout(() => {
//   // Need to escape the backlash since its's a special character
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   // Need to escape the backlash since its's a special character
//   process.stdout.write('\r-   ');
// }, 1300);
// setTimeout(() => {
//   // Need to escape the backlash since its's a special character
//   process.stdout.write('\r\\   ');
// }, 1500);
// setTimeout(() => {
//   // Need to escape the backlash since its's a special character
//   process.stdout.write('\r|   ');
// }, 1600);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1900);
