import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import StudentInfoComponent from './component/StudentInfoComponent';

class Main extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
    <>
    <StudentInfoComponent />
    </>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));
