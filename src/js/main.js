import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.jsx';
import MyCounter from './mycounter.jsx';
import BasicExample from './basic-example.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>This is one co0ol ap!!!!!</h1>
				<Counter />
				<MyCounter />
				<BasicExample />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);