import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={'objects'}>
          <h1>Registration</h1>
        </div>
        <div className={'objects'}>
          <label>Phone Number: </label>
          <input id={'Phone Number'}/>
        </div>
        <div className={'objects'}>
          <label>Name : </label>
          <input id={'Phone Number'} type={'number'}/>
        </div>
        <div className={'objects'}>
          <label>Game Night
            <input id={'check'} type={'checkbox'}/>
          </label>
        </div>
        <div className={'objects'}>
          <label>D&D - Super Awesome Campaign one
            <input id={'check'} type={'checkbox'}/>
          </label>
        </div>
        <div className={'objects'}>
          <label>D&D - Super Awesome Campaign two
            <input id={'check'} type={'checkbox'}/>
          </label>
        </div>
        <div className={'objects'}>
          <button id={'submit'}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
