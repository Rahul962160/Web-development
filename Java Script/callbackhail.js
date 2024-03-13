let h1 = document.querySelector("h1");

function changecolor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 3) {
        reject("Promise rejected");
      }
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}
// await function can only be called inside async function
// await function waits other function until it get executed
async function demo() {
  // to handle error in await function we always use try and catch
  try {
    await changecolor("red", 1000);
    await changecolor("yellow", 1000);
    await changecolor("green", 1000);
    changecolor("pink", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }
  let a = 5;
  console.log(a);
  console.log("New number =", a + 3);
}
demo();
// // when callback are called oen after the other that concept os called callback hail
// changecolor("red", 1000)
//   .then(() => {
//     console.log("red color was changed");
//     return changecolor("yellow", 1000);
//   })
//   .then(() => {
//     console.log("yellow color was changed");
//     return changecolor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was changed");
//     return changecolor("pink", 1000);
//   })
//   .then(() => {
//     console.log("pink color was changed");
//   });

// // function savetoDb(data, success, failure) {
// //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //   if (internetSpeed > 4) {
// //     success();
// //   } else {
// //     failure();
// //   }
// // }
// // savetoDb(
// //   "apna college",
// //   () => {
// //     console.log("Success : your data was saved");
// //     savetoDb(
// //       "Hello",
// //       () => {
// //         console.log("Success : your data was saved");
// //         savetoDb(
// //           "Rahul",
// //           () => {
// //             console.log("Success : your data was saved");
// //           },
// //           () => {
// //             console.log("Failure : weak connection");
// //           }
// //         );
// //       },
// //       () => {
// //         console.log("Failure : weak connection");
// //       }
// //     );
// //   },
// //   () => {
// //     console.log("Failure : weak connection");
// //   }
// // );
// // Promises aobject represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// // three states can arise according to the condition met
// // 1 - pending - still in waiting state
// // 2 - resolve - the result is in favour
// // 3 - reject - the result is in not in our favour
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success your data was saved"); //resolve(result);
//     } else {
//       reject("Weak connection");
//     }
//   });
// }
// // then and catch = then executes when promise is resolved and catch get executed when promise get rejected that not able to meet condition
// savetoDb("Rahul")
//   .then((result) => {
//     console.log("Data 1 was saved");
//     console.log("Result of promise:", result);
//     return savetoDb("Hello world"); // this will return savetoDb("Hello world") to then and now again it need then which is weitten down
//   })
//   .then((result) => {
//     console.log("Data 2 was saved");
//     console.log("Result of promise:", result);

//     return savetoDb("Hello world");
//   })
//   .then((result) => {
//     console.log("Data 3 was saved");
//     console.log("Result of promise:", result);
//   })
//   .catch((result) => {
//     console.log("Promise was rejected");
//     console.log("Result of reject:", result);
//   });

// async functions is used to replace newe promise as it aumatically gives resolve and reject even without writting
// async function greet() {
//   // throw "404 error"; //throw is used to produce error
//   return "hello!"; //return a promise
// }
// greet()
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result was:", result);
//   })
//   .catch((err) => {
//     console.log("Promise was rejected with error:", err);
//   });
// let demo = async () => {
//   return 5;
// };
// demo();
