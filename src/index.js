// basic-way
console.log("First");

setTimeout(() => {
  console.log("Reading Data from RudraInnovative Database...");
  return;
}, 2000);

console.log("Second");

// using function
console.log("first");
getUser(1, (user) => {
  console.log("User", user);
});

console.log("Second");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading data from our Database....");
    callback({ id, userName: "Rupam" });
  }, 2000);
}