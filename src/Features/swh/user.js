class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function printName(user) {
  // console.log(`User's name is ${user.name}`);
}
function printAge(user) {
  // console.log(`User is ${user.age} years of age`);
}

export default User;
// module.exports = User;
export { printAge, printName };
