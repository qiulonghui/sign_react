const { override, fixBabelImports, addWebpackAlias, addWebpackExternals } = require('customize-cra');
const path = require('path');
 
const cdn = {
	css: [],
	js: [
		'https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js',
		'https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js',
		'https://cdn.bootcss.com/react-transition-group/4.3.0/react-transition-group.min.js',
	]
}

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		style: 'css',
	}),
	addWebpackAlias({ //路径别名
		'@': path.resolve(__dirname, 'src'),
	}),
	addWebpackExternals({
		react: "React",
		"react-dom": "ReactDOM",
		"react-transition-group": "ReactTransitionGroup",
	}),
	(config) => { //暴露webpack的配置 config 
		// 去掉打包生产map 文件
		config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
		Object.assign(config.plugins[0].options, { cdn })
		return config
	}
);