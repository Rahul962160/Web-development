let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts(); //as you are calling async function then you will get promise
  // as a result hence we need to use await with getFact and again async after the click
  //  as await only can be used inside async
  console.log(fact);
  let p = document.querySelector("p");
  p.innerText = fact;
});
async function getFacts() {
  try {
    let res = await axios.get(url);

    return res.data.fact;
  } catch (e) {
    console.log("Error - ", e);
    return "No fact found";
  }
}

// Sending Headers with API requests
async function getJokes() {
  try {
    const config = { headers: { Accept: "Application/json" } }; //Accept header to indicate that the client (your code)
    // prefers to receive the response in JSON format and data get removed.
    let res = await axios.get(url, config);

    console.log(res.data);
  } catch (e) {
    console.log("Error - ", e);
    return "No fact found";
  }
}
// api call

// using fetch()

// fetch(url) // this is an promise hence return response
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data1 =", data);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("Data2 =", data2);
//     return res.json();
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

// api call using async and await function

// async function getfacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);//in one line(res.data.fact) we are unable to get our data so we use axios.get
//   } catch (e) {
//     console.log("Error - ", e);
//   }
// }

// api call using axios.get

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     // let data = await res.json();
//     console.log(res.data.fact); // now in one line we can get our result
//   } catch (e) {
//     console.log("Error - ", e);
//   }
// }

// api calls run in backend as they take some time untill then other code get executed and when they are called they get executed
console.log("I am Happy");
