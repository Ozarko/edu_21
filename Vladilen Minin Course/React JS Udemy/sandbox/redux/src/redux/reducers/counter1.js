import { ADD, ADD_NUMBER, SUB } from "../actions/actionTypes"

const initialState = {
  counter1: 10
}

export default function counter1 (state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {
        counter1: state.counter1 + 1
      }
    case SUB:
      return {
        counter1: state.counter1 - 1
      }
    case ADD_NUMBER:
      return {
        counter1: state.counter1 + action.payload
      }
    default: 
      return state
  }
}