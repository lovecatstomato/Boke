# 小程序

## 文件构成

processDiagram 文件夹<br>
QueryProject 文件夹<br>
index.vue<br>
index.vue<br>
modifyThepage.vue<br>

## 详情页 index 技术点

在 vue 项目中代码可以分为三块，template 块放置页面代码，

> data 数据

    	```javascript
        data() {
    		return {
    			segmentValues: ['未审核', '已审核'], // 这里设置分段器的选项文本
    			currents: 0,
    			// 入参的数组
    			condition: {
    				ldProjectDatumName: '',
    				state: '',
    			},
    			from: {
    				id: null,
    				ldProjectDatumId: null,
    				// 项目编号
    				ldProjectDatumCode: '',
    				// 提交人
    				updateUser: '',
    				// 区域
    				branchOfficeName: '',
    				// 城市
    				fullName: '',
    				// 备注
    				remark: '',
    				// 项目名称
    				ldProjectDatumName: '',
    				// 创建日期
    				updateTime: '',


    			}
    		};
    	},
    	```

> 搜索框

    ```javascript
    <uni-search-bar style="width: 85%;" bgColor="#fff" radius=40 placeholder="请输入项目搜索"
    v-model="condition.ldProjectDatumName" @confirm="search" cancelButton="none"></uni-search-bar>
    <view @click="favClick(item)" class="new-button">
    	新增
    </view>
    ```

搜索框和新增都是使用的原生的 api，使用双向绑定

> 分段器

    ```javascript
    <uni-segmented-control styleType="text" :values="segmentValues"
    @clickItem="onClickItem"></uni-segmented-control>

    v-show="currents === 0"
    ```

这个使用的是原生的分段器<br>
使用 v-show 来判断 currents,只要等于 0,数据就为真,就显示要显示的作用域<br>

> 详情按钮事件(视情况而定,按钮要自己写样式,要使用原生的,使用其他的 ui 框架或者自己写样式比较好兼容市场需求)

    ```javascript
    // 详情
    faClick(jsonId) {
    	const jsonData = jsonId.id
    	const url = `/packageB/processDiagram/modifyThepage?id=${encodeURIComponent(jsonData)}`;
    	uni.navigateTo({
    		url: url
    	})
    },
    ```

点击详情按钮的时候会获取，请求中的 id 来判断去到另一个页面，判断要显示什么东西。<br>
jsonId 就是我们点击从请求中获取来的，url 赋值是将带过去另一个页面<br>
uni.navigateTo 是原生的方法，是一个跳转方法<br>

> 搜索事件

    		```javascript
            async getAddressLi() {
    			this.tui.request("app/project/page", "POST", {
    				condition: this.condition,
    				pagination: {
    					total: 0,
    					size: 1000,
    					current: 1
    				},
    			}, false, false, true, true).then((res) => {
    				this.from = res.data.records;
    			});
    		},
    		// 搜索
    		search() {
    			this.getAddressLi();
    		},
    		```

搜索框事件要使用 async 来进行异步处理,不要跟其他的请求一起进行处理<br>
this.tui.request 请求是已经封装好的方法,<br>
condition 是要发送去服务器的数据,<br>
pagination 是要返回的数据有多少条和数据总数<br>
then((res)中 res 是请求服务器回来的数据<br>
<br>
@confirm="search"搜索框中有这个属性触发数据进行执行

> 新增

    		```javascript
            /**
    		 * 新增
    		 */
    		favClick(fromId) {
    			fromId = null;
    			const url = `/packageB/processDiagram/modifyThepage?id=` + fromId;
    			uni.navigateTo({
    				url: url
    			})
    		},
    		```

新增也是跟上面的详情一样的判断请求的 id,但是,新增是判断是否 null 还有带数据过去另一个页面

> 页面加载的时候触发

    		```javascript
            /**
    		 * 请求
    		 */
    		getNumber() {
    			this.condition.state = 1;
    			// console.log(this.condition);
    			this.tui.request("app/project/page", "POST", {
    				condition: this.condition,
    				pagination: {
    					total: 0,
    					size: 1000,
    					current: 1
    				},
    			}, false, false, true, true).then((res) => {
    				this.from = res.data.records;
    				// console.log(res.code);
    				// console.log(this.from);
    				// console.log(this.selectedValue);
    			});
    		},

            onLoad() {
    		    // 加载页面的时候触发
    		    this.getNumber();
    	    },
    		```

onLoad(){}是在进入页面时就触发<br>
请求,进来的时候就要请求一次,毕竟这个使用的是分段器,要进来的时候就请求一次<br>
this.condition.state = 1;判断后端数据中 state 的数据,分段器中也是要判断,segmentValues: ['未审核', '已审核'],两个显示的数据<br>
`javascript
                // 入参的数组
				condition: {
					ldProjectDatumName: '',
					state: '',
				},
				`

data()中就有入参的数组数据

> 分段器事件

    		```javascript
            /**
    		 *  分段器
    		 */
    		onClickItem(e) {
    			if (this.current != e.currentIndex) {
    				this.current = e.currentIndex;
    				// 未审核
    				if (this.current == 0) {
    					// this.currents = 1;
    					this.condition.state = 1;
    					this.tui.request("app/project/page", "POST", {
    						condition: this.condition,
    						pagination: {
    							total: 0,
    							size: 1000,
    							current: 1
    						},
    					}, false, false, true, true).then((res) => {
    						this.from = res.data.records;
    						console.log(res);
    						// console.log(this.from);
    						// console.log(this.selectedValue);
    					});
    					// 已审核
    				} else if (this.current == 1) {
    					// this.currents = 3;
    					this.condition.state = 3;
    					this.tui.request("app/project/page", "POST", {
    						condition: this.condition,
    						pagination: {
    							total: 0,
    							size: 1000,
    							current: 1
    						},
    					}, false, false, true, true).then((res) => {
    						this.from = res.data.records;
    						console.log(res);
    						// console.log(this.from);
    						// console.log(this.selectedValue);
    					});
    				}
    			}
    		}
    		```

这个分段器分为两个判断,未审核,已审核,判断的是 this.current 这个是要显示什么数据<br>
this.condition.state = 3;这个要上传回去服务器中的,<br>
3:已审核<br>
1:未审核<br>

> css

    ```CSS
    border-radius: 20rpx;
    ```

对块级元素进行圆切<br>

## addedSupport

> 选择后怎么检查选择后的数组有没有重复的

    	``` javascript
			dianji(index){
				for(let i = 0;i < this.shuz.length;i++){
					
				}
			}
		```

