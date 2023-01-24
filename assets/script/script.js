let userList = [];
let newUser = {};

function setFirstName(event) {
  newUser.firstName = event.target.value;
}

function setLastName(event) {
  newUser.lastName = event.target.value;
}

function setEmail(event) {
  newUser.email = event.target.value;
}

function setTel(event) {
  newUser.tel = event.target.value;
}

function setSubmit(event) {
  event.preventDefault();
  console.log(newUser);
  userList.push(newUser);
  console.log(userList, "Total Users!");
}
