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



		
	
