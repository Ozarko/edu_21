import React, {Component} from 'react'
import './App.css';
import {connect} from 'react-redux';
import Counter from './Counter'
import { add, addNumber, sub, asyncAdd} from './redux/actions/actions';

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.addThree}>Додати три</button>
        </div>
        <div className="Actions">
          <button onClick={()=> this.props.addNumber(15)}>Добавить 15</button>
          <button onClick={()=> this.props.addNumber(-17)}>Вычесть 17</button>
        </div>
        <div className="Actions">
          <button onClick={()=> this.props.onAsyncAdd(100)}>Асинхронно додати 100</button>
        </div>
        <Counter/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: ()=> dispatch(add()),
    onSub: ()=> dispatch(sub()),
    addNumber: number =>dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
