import { applyMiddleware, createStore } from 'redux';
import { decrement, increment, asyncDecrement } from "./redux/actions";
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import './styles.css';

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById("theme");

const store = createStore(
    rootReducer,
    0,
    applyMiddleware(thunk)
  );

add.addEventListener('click', ()=> {
  store.dispatch(increment());
})

sub.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
 store.dispatch(asyncDecrement());
});

theme.addEventListener("click", () => {
  // document.body.classList.toggle('dark')
});

store.subscribe(()=> {
  const state = store.getState()
  counter.textContent = state
})

store.dispatch({type: 'INIT_APLICATION'})