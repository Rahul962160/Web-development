let jsonRes =
  '{"message":"https://images.dog.ceo/breeds/labrador/n02099712_2118.jpg","status":"success"}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.message);

let student = {
  name: "Rahul",
  marks: 95,
};
let convalidRes = JSON.stringify(student);
console.log(convalidRes);
