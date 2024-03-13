let list = [];
let req = prompt("Enter your request");
while (true) {
  if (req === "quit") {
    console.log("Quiting todo list");
    break;
  }
  if (req == "list") {
    for (names of list) {
      console.log(names);
    }
    console.log("-------------------");
  } else if (req == "add") {
    let elem = prompt("Enter element to insert in your list");
    list.push(elem);
    console.log("Task Added");
  } else if (req == "delete") {
    let ind = prompt("Enter the index from where to delete element");
    list.splice(ind, 1);
    console.log("element Deleted");
    console.log("-------------------");
  }
  req = prompt("Enter your request");
}
