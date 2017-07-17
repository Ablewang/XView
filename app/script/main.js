import React from 'react';
import {
	render
} from 'react-dom';
import Index from './Index'
let menu = [{
	index: 1,
	text: '任务',
	class: 'work'
}, {
	index: 2,
	text: '任务',
	class: 'reward'
}, {
	index: 3,
	text: '任务',
	class: 'my'
}];

let task = [{
	index: 1,
	from: 'Richard',
	title: '冒泡排序，画出动态排序效果',
	descript: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML',
	category: 'JavaScript',
	point: 100
}, {
	index: 2,
	from: 'Richard',
	title: '选择排序，画出动态排序效果',
	descript: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML',
	category: 'JavaScript',
	point: 80
}, {
	index: 3,
	from: 'Richard',
	title: '归并排序，画出动态排序效果',
	descript: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML',
	category: 'JavaScript',
	point: 150
}, {
	index: 4,
	from: 'Richard',
	title: '黑客雨',
	descript: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML',
	category: 'JavaScript',
	point: 90
}]


render(<Index menu={menu} />, document.getElementById('root'))