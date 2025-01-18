import { message } from "antd";
import axios from "axios";

const apiUrl = "http://localhost:8000";

const requestOptions = {

  headers: {

    "Content-Type": "application/json",

  },

};

async function AjanParin() {
  const requestOptions = {
    method: "GET",
  };

  try {
    const response = await fetch(`${apiUrl}/ajanparin`, requestOptions);
    const data = await response.json();

    return {
      status: response.ok,
      data: data,
      message: response.ok ? data.message : data.error,
    };
  } catch (error) {
    return {
      status: false,
      message: "An error occurred",
    };
  }
}


async function CheckAjanParin(data: any) {

  return await axios

    .put(`${apiUrl}/checkajanparin`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}
//==================================== Lee ==========================================

async function  Lv1GetEncryptText() {
  const requestOptions = {
    method: "GET",

  };
  try {
    const response = await fetch(`${apiUrl}/lv1-encrypted-text`, requestOptions);
    const data = await response.json();

    return{
      status: response.ok, data:data, message: response.ok ? data.message : data.error,
    };
  }catch(error){
    return{
      status: false,
      message: "Shit happened"
    };
  }
}

async function Lv1CheckAns(data: any){
  return await axios
  .put(`${apiUrl}/lv1-check-ans`,data,requestOptions)

  .then((res)=> res)

  .catch((e)=> e.response)
}

//==================================== por ==========================================
async function GetKeyLevel5() {
  const requestOptions = {
    method: "GET",
  };

  try {
    const response = await fetch(`${apiUrl}/get-key-level5`, requestOptions);
    const data = await response.json();

    return {
      status: response.ok,
      data: data,
      message: response.ok ? data.message : data.error,
    };
  } catch (error) {
    return {
      status: false,
      message: "An error occurred",
    };
  }
}
async function CheckLevel5(data: any) {

  return await axios

    .put(`${apiUrl}/check-key-level5`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}

async function GetKeyLevel6() {

  return await axios

    .get(`${apiUrl}/get-key-level6`, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}
async function CheckLevel6(data: any) {

  return await axios

    .put(`${apiUrl}/check-help-level6`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}

async function CheckLevel62(data: any) {

  return await axios

    .put(`${apiUrl}/check-key-level6`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}



async function CheckLevel7(data: any) {

  return await axios

    .put(`${apiUrl}/check-key-level7`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}
export {
  AjanParin,
  CheckAjanParin,
  Lv1GetEncryptText,
  Lv1CheckAns,
  GetKeyLevel5,
  CheckLevel5,

  GetKeyLevel6,
  CheckLevel6,
  CheckLevel62,


  CheckLevel7,
};
