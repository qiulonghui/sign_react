import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js'; // 全局样式
import App from './App';
import { Toast } from 'antd-mobile';
// import Vconsole from 'vconsole'

Toast.config({
  duration: 2,
  mask: true
})

React.$Toast = function (content) {
  Toast.info(content)
}
React.$LoadingClear = function () {
  Toast.hide()
}

// const vConsole = new Vconsole()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
