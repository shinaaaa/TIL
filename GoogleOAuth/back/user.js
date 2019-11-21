const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true }
}); //입력을 제한하기 위해 객체 사용

const User = model("User", userSchema);
//db에 접근할 때 사용
module.exports = {
  User
};