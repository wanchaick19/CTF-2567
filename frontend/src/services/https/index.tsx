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

async function CheckFish(data:any) {
  return await axios
  .put(`${apiUrl}/CheckFish`, data, requestOptions)
  
  .then((res) => res)

  .catch((e) => e.response);
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
export {
  AjanParin,
  CheckAjanParin,

  CheckFish,

  GetKeyLevel5,
  CheckLevel5,
};
