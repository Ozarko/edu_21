import axios from "axios";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email, password,
      returnSecureToken: true
    }
    
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCDSL-M0YG_1dOPJ-p-qU1fqmUvLfZAIo'

    if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCDSL-M0YG_1dOPJ-p-qU1fqmUvLfZAIo'
    }
      const response = await axios.post(url, authData);
      const data = response.data
      const epirationDate = new Date(new Date().getTime()+ data.expiresIn * 1000)

      localStorage.setItem('token', data.idToken)
      localStorage.setItem('userId', data.localId)
      localStorage.setItem('epirationDate', epirationDate)

      dispatch(authSuccess(data.idToken))
      dispatch(autoLogout(data.expiresIn))
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(()=> {
      dispatch(logout())
    }, time * 1000)
  }
}

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('epirationDate')
  return {
    type: AUTH_LOGOUT
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token')
    if(!token) {
      dispatch((logout()))
    }else {
      const expirationDate = new Date(localStorage.getItem('epirationDate'));
      if(expirationDate <= new Date()) {
        dispatch((logout()))
      }else {
        dispatch(authSuccess(token))
        dispatch(autoLogout(
              (expirationDate.getTime() - new Date().getTime()) / 1000
            )
          )
      }
    }
  }
}