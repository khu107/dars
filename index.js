// import uuid from "uuid";
const uuid = require("uuid");

class User {
  constructor() {
    this.db = [];
  }
  addUser(record) {
    const newRecord = { ...record, _id: uuid.v4() };
    this.db = [...this.db, newRecord];
    return newRecord;
  }
  delteUser(_id) {
    if (!_id) return `id mavjud emas`;
    this.db = this.db.filter((v) => v._id !== _id);
    return 1;
  }
  updateUser(_id, oldRecord) {
    if (!_id) return `id mavjud emas`;
    this.db = this.db.map((v) => (v._id === _id ? oldRecord : v));
    return 1;
  }
  sayHi() {}
}
const user = new User();
const resultRecord = user.addUser({
  name: "husan",
  surname: "butaev",
  age: 48,
  email: "husa@naver.com",
  phone: "0104444445",
});

// console.log(user.delteUser(resultRecord._id));
console.log(
  user.updateUser(resultRecord._id, { ...resultRecord, name: "Asadbek" })
);
console.log(user.db);
