import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style.js'; // 全局样式
import App from './App';
import { Toast } from 'antd-mobile';
Toast.config({
	duration: 0,
	mask: true
}) //  duration = 0 时，toast 不会消失；隐藏 toast 需要手动调用 hide

ReactDOM.render(
  <React.StrictMode>
		<GlobalStyle />
		<App />
  </React.StrictMode>,
  document.getElementById('root')
);
