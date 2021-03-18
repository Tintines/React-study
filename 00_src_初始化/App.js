import logo from './logo.svg';  // react脚手架中引入图片的方式,使用变量接着
import './App.css';             // react脚手架中引入样式的方式

// import React from 'react';   // 语法一
import React, {Component} from 'react';      // 语法二: 主流写法

/* 定义组件的方式：ES6类组件 */
/* 语法一: */
// class App extends React.Component{
/* 语法二: 主流写法 */
class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React ,zhubaba fighting!
          </a>
        </header>
      </div>
    );
  }
}

/* 工厂函数的形式 */
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ,zhubaba fighting!
        </a>
      </header>
    </div>
  );
} */

export default App;   // 默认暴露
