## 1.概念
	
本质上，webpack是一个现代JavaScript应用程序的静态模块打包器（module bundler）。当webpack处理应用程序时，它会递归的构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。
### 四个核心概念

- 入口（entry）
- 输出（output）
- loader
- 插件（plugins）

### 入口（entry）

入口起点指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始。

###### webpack.config.js
	module.export = {
		entry: './path/to/my/entry/file.js'
	}

### 出口（output）

output属性告诉webpack在哪里输出它所建立的bundles，以及如何命名这些文件，默认值为./dist。

###### webpack.config.js
	const path = require('path')
	module.export = {
		entry: './path/to/my/entry/file.js',
		output: {
			paht: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
		}
	}

### loader

loader让webpack能够去处理那些非JavaScript文件（webpack自身只能理解JavaScript）。loader能将所有类型的文件转换为webpack能够处理的有效模块，然后就可以利用webpack的打包能力对它们进行处理。

###### webpack.config.js
	const path = ruquire('path')
	const config = {
			output: {
				filename: 'bundle.js'
			},
			module: {
				rules: [
					{ test: '/\.txt$/', use: 'raw-loader' }
				]
			}
		}
	module.exports = config

以上配置中，对一个单独的module对象定义了rules属性，里面包含两个必须属性：test和use它会告诉webpack如下信息：
	
	“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径时，在你对它打包之前，先使用 raw-loader 转换一下。”

### 插件（plugins）

loader被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可用来处理各种各样的任务。

	// webpack.config.js

	const HtmlWebpackPlugins = require('html-webpack-plugin')
	const webpack = require('webpack')
	const config = {
		module: {
			rules: [
				{ test: '/\.txt$/', use: 'raw-loader' } 
			]
		},
		plugins: [
			new HtmlWebpackPlugins(template: './src/index.html')
		]			
	}
	
	module.exports = config

### 模式

通过选择development或production设置为mode的参数可以启动相应模式下的webpack内置优化
	
	// webpack.config.js
	module.exports = {
		mode: 'production'
	}
	
## 2.如何配置
	
### 入口起点（entry points）
	
###### 单个入口（简写）语法

	// webpack.config.js
	const config = {
		entry: './path/to/my/entry/file.js'
	}

	module.exports = config	

	上边 是 下边 的简写语法
	const config = {
		entry: {
			main: './path/to/my/entry/file.js'
		}
	}

###### 对象语法

	//	webpack.config.js
	//	用法：entry: {[entryChunkName: string]: string|Array<string>}

	const config = {
  		entry: {
  		    app: './src/app.js',
    		vendors: './src/vendors.js'
  		}
	}

###### 常见场景

1.分离应用程序[App]和第三方库[vendor]入口
	
	// webpack.config.js
	const config = {
  		entry: {
  		    app: './src/app.js',
    		vendors: './src/vendors.js'
  		}
	}

2.多页面应用程序
	
	// webpack.config.js
	const config = {
	  entry: {
	    pageOne: './src/pageOne/index.js',
	    pageTwo: './src/pageTwo/index.js',
	    pageThree: './src/pageThree/index.js'
	  }
	}

### 输出（output）

配置output选项可以控制webpack如何向硬盘写入编译文件。注意即使可以存在多个入口起点，但是只能指定一个输出配置。

###### 用法 -> 多个入口起点
	{
	  entry: {
	    app: './src/app.js',
	    search: './src/search.js'
	  },
	  output: {
	    filename: '[name].js',
	    path: __dirname + '/dist'
	  }
	}
	// 写入到硬盘：./dist/app.js, ./dist/search.js

###### 高级进阶
	//使用CDN和资源hash的复杂示例

	output: {
	  path: "/home/proj/cdn/assets/[hash]",
	  publicPath: "http://cdn.example.com/assets/[hash]/"
	}

### 模式（mode）

提供mode模式配置选项告知webpack使用相应模式的内置优化
	
	module.exports = {
		mode: 'production' // development
	}

### loader
	
loader用于模块的源代码进行转换。

###### 使用loader

有三种使用loader的方式：

- 配置（推荐）： 在webpack.config.js中指定loader
- 内联：在每个import语句中显示指定的loader
- CLI：在shell命令中指定

###### 示例

	// 配置
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [
	          { loader: 'style-loader' },
	          {
	            loader: 'css-loader',
	            options: {
	              modules: true
	            }
	          }
	        ]
	      }
	    ]
	  }
	
	// 内联
	import Styles from 'style-loader!css-loader?modules!./styles.css';
	
	// CLI
	webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

### 插件（plugins）

插件是webpack的支柱功能，用于解决loader无法实现的其他事

###### 剖析

webpack插件是一个具有apply属性的JavaScript对象。apply属性会被webpack compiler调用，并且compiler对象可在整个编译生命周期访问。

	const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

	class ConsoleLogOnBuildWebpackPlugin {
	    apply(compiler) {
	        compiler.hooks.run.tap(pluginName, compilation => {
	            console.log("webpack 构建过程开始！");
	        });
	    }
	}

###### 用法
	
	// webpack.config.js
	const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
	const webpack = require('webpack'); //访问内置的插件
	const path = require('path');
	
	const config = {
	  entry: './path/to/my/entry/file.js',
	  output: {
	    filename: 'my-first-webpack.bundle.js',
	    path: path.resolve(__dirname, 'dist')
	  },
	  module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        use: 'babel-loader'
	      }
	    ]
	  },
	  plugins: [
	    new webpack.optimize.UglifyJsPlugin(),
	    new HtmlWebpackPlugin({template: './src/index.html'})
	  ]
	};
	
	module.exports = config;

### 配置（configuration）

###### 基本配置
	
	const path = require('paht')
	
	module.exports = {
		mode: 'development',
		entry: './foo.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'foo.bundle.js'
		}
	}















