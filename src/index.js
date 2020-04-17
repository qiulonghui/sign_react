import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style.js'; // 全局样式
import App from './App';
import { Toast } from 'antd-mobile';
Toast.config({
	duration: 2,
	mask: true
}) 

React.$Toast= function(content){
	Toast.info(content)
}
React.$ToastHide= function(){
	Toast.hide()
}

ReactDOM.render(
  <React.StrictMode>
		<GlobalStyle />
		<App />
  </React.StrictMode>,
  document.getElementById('root')
);
