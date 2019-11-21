import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import authAxios from "./authAxios";

const responseGoogle = async res => {
  const email = res.profileObj.email
  const name = res.profileObj.name
  const token = res.tokenId;
  const expires = new Date(res.profileObj.expires_at).toUTCString();

  document.cookie = `Authorization=${token};expires=${expires}`;
  const checkUser = await axios.get(`http://localhost:3000/user/check?email=${email}`)
  if (checkUser.data.result) {
    alert('로그인 성공')
  } else if (checkUser.data.result === false) {
    await axios.post(`http://localhost:3000/user/join`, { name, email })
    alert('회원가입 성공');
  } else {
    console.log(checkUser.data.error);

  }
};

const responseGoogleError = response => {
  console.log(response);
};
const getUser = async () => {
  const { data } = await authAxios().get(`http://localhost:3000/user`);
  console.log(data);

};
export default function App() {
  return (
    <div>
      <GoogleLogin
        clientId="912748114581-q81f3d8a8h7gh1csni29klrtod6d9g6p.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
      />
      <button onClick={getUser}>유저정보 가져오기</button>
    </div>
  );
}