import {INCREMENT } from "./types";

function increment() {
  return {
    type: INCREMENT
  }
}
function decrement() {
  return {
    type: INCREMENT
  }
}

function asyncDecrement() {
  return function (dispatch) {
  setTimeout(()=> {
    dispatch(increment());
  }, 1000)
  }
}

export { increment, decrement, asyncDecrement };