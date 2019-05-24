### 1.概述
网格布局（grid）是最强大的CSS布局方案。将网页划分为一个个的网格，可以任意组合不同的网格，做出各种各样的布局。
grid布局与flex布局有一定的相似性，都可以指定容器内部多个项目的位置，但是，flex布局是轴线布局，只能指定项目轴线上的位置，可看作一维布局，grid则是将容器划分为行和列，产生单元格，然后指定项目所在的单元格，可看作二维布局。
###2.容器和项目
- 容器：采用网格布局的区域。
- 项目：容器内部的采用网格定位的子元素。

		//容器
		<div>
			//项目 
			<div></div>
			<div></div>
		</div>
###3.容器属性
grid布局属性分为两类。一是定义在容器上的称为容器属性；另一个是定义在项目上的称为项目属性。
##### 3-1.display属性
	div{
		display：grid/inline-grid；
	}
	设置为网格布局后容器子元素（项目）的
		float：...;
		display:inline-block;
		display:table-cell;
		vertical-align:...;
		column-*:...;
	等设置都将失效。
#####3-2.grid-template-column、grid-template-rows属性
	.container{
		display: grid;
		grid-template-columns: 100px 100px 100px;
		grid-template-rows: 100px 100px 100px;
	}
	<=> 等价于
	.container{
		display:grid;
		grid-template-columns: repeat(3,100px);
		grid-template-rows: repeat(3,100px);
	}
	// 亦可使用百分比 33.33%
###### 3-2-1. repeat()
如上例↑
###### 3-2-2. auto-fill 关键字表示自动填充
场景：单元格大小固定，容器大小不定时，希望一排容纳尽可能多的单元格。
	
	.container{
		display: grid;
		grid-template-columns: repeat(auto-fill, 100px);	
	}
###### 3-2-3. fr 关键字
场景：方便表示比例关系。
	
	.container{
		display: grid;
		grid-template-columns: 1fr 2fr; 
	}
	/* 后者是前者的两倍 */
		
###### 3-2-4. minmax() 函数
场景：产生一个长度范围。
	
	grid-template-columns: 1fr 1fr minmax(100px 1fr);
###### 3-2-5. auto 关键字
场景：表示长度有浏览器自己决定。
		
	grid-template-columns: 100px auto 100px;
###### 3-2-6. 网格线名称
场景：使用方括号[]指定名字，方便后边使用。
	
	grid-template-columns: [a1] 100px [a2] 100px [a3];
	grid-template-rows: [b1 b1_1] 100px [b2] 100px [b3];
	/* 允许同一根有多个名字 */
### 3-3. row-gap, column-gap, grid-gap
设置行、列健间隔（间距）。
	
	.container{
		row-gap: 20px;  //行间距
		column-gap: 30px //列间距
	}
	<=>
	.container{
		grid-gap: 20px 30px;  
	}
	// 省略第二个值默认等于第一个值
### 3-4. grid-template-areas
网格布局允许指定区域，一个区域由单个或者多个单元格组成。

	.container{
		display: grid;
		grid-template-columns: 100px 100px 100px;
		grid-template-rows: 100px 100px 100px;
		grid-template-areas: 'a b c' 'd e f' 'g h i';
	}
上面代码划分出9个单元格， 分别命名为a-i。
### 3-5. grid-auto-flow
网格默认的排序是 **先行后列**（即默认属性值为：row），设置属性值为column时排序为 **先列后行** 也可以设置为 row dense 或 column dense 表示紧密排列
	
	grid-auto-flow: row/column
	//grid-auto-flow: row dense/ column dense
### 3-6. justify-items，align-items，place-items
设置单元格内容的水平(左中右)和垂直位置(上中下)
	
	.container{
		justify-items: start | end | center | stretch;
		align-items: start | end | center | stretch;
	}
	- start: 对齐起始边缘。
	- end: 对齐结束边缘。
	- center： 居中对齐。
	- stretch： 拉伸填满（默认）
	- place-items: 合并简写
	- place-items: <align-items> <justify-items>  
	- 省略第二个默认等于第一个
### 3-7. justify-content、align-content、place-content
设置整个内容区域在容器内的位置。
	
	// 语法类似flex布局
	justify-content： start | end | center | stretch | space-around | space-between | space-evenly
### 3-8. grid-auto-columns、grid-auto-rows
自动创建多余的列宽和行高
	
	grid-auto-columns: 50px;  // 新增列宽为50px
### 3-9. grid-template、grid
	
	// 该属性是多个属性的合并简写形式
	grid-template: <grid-template-columns> <grid-template-rows> <grid-template-areas> //三个属性的简写
	grid: <grid-template-rows> <grid-template-columns> <grid-template-areas> <grid-auto-rows> <grid-auto-columns> <grid-auto-flow> //六个属性简写
### 4.项目属性
### 4-1. grid-column-start|end、grid-row-start|end
指定项目位置，指定项目的四个边分别定位在哪根网格线。
	
	.item_1{
		grid-column-start: 2;
		grid-column-end: 4;
	}
	//如果产生重叠通过设置 z-index
### 4-2. grid-column、grid-row
4-1属性的合并简写
	
	grid-column： 1/2
	grid-row： 2/6
### 4-3 grid-area
指定项目放在哪个区域
	
	grid-area: a;
	// 也可作为4-1属性的合并简写
	// grid-area: 1 / 1 / 3 / 3;
### 4-4 justify-self、align-self、place-self
设置单元格内容的位置

















	
