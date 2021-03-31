import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'
import {combineReducers} from 'redux';


export default combineReducers({
  counter1, counter2
})