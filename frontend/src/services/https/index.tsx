import axios from "axios";

const apiUrl = "http://localhost:8000";

const requestOptions = {

  headers: {

    "Content-Type": "application/json",

  },

};
//arm

async function CheckFlagLevel3(data: any) {

  return await axios

    .put(`${apiUrl}/checkflaglevel3`,data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}

async function GetKeyLevel4() {

  return await axios

    .get(`${apiUrl}/keylevel4`, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}

async function CheckFlagLevel4(data: any) {

  return await axios

    .put(`${apiUrl}/checkflaglevel4`,data, requestOptions)

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

    .put(`${apiUrl}/check-key-level62`, data, requestOptions)

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
  CheckFlagLevel3,

  GetKeyLevel4,
  CheckFlagLevel4,

  Lv1GetEncryptText,
  Lv1CheckAns,
  GetKeyLevel5,
  CheckLevel5,

  GetKeyLevel6,
  CheckLevel6,
  CheckLevel62,


  CheckLevel7,
};
