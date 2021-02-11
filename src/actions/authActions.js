import { fetchWithOutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../store/types";

export const startLogin = async (dispatch, values) => {
  try {
    const resp = await fetchWithOutToken("auth/login", values, "POST");
    const body = await resp.json();
    if (!body.ok) return body;
    localStorage.setItem("token", body.token);
    dispatch({ type: types.login, payload: body });
    return body;
  } catch (error) {
    console.log("error:", error);
    return false;
  }
};

export const startChecking = async () => {
  const token =localStorage.getItem("token")
  if(!token) return null
  try {
    const resp = await fetchWithToken("auth/renew")
    const body = await resp.json()
    console.log("body:", body)
  } catch (error) {
    
  }
}
