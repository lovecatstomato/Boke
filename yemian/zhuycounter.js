import { marked } from 'marked';

const markdownFilePath = '/biji/bijiweiz.json'; // 注意这里的路径可能是相对于构建后的根目录


// 读取json文件篇数
export function duqvmdwenjian() {
    return fetch(markdownFilePath).then(response => response.json()).then(data => {
        // console.log(data, 'data');
        let count = 0;
        for (const item of data) {
            count++;
        }
        return count;
    })
}

let allData = []; // 存储所有文章数据
let currentPage = 1; // 当前页码
const jiazaigeshu = 5

// 读取json文件内容名称
export function duqvmdname() {
    return fetch(markdownFilePath).then(response => response.json()).then(data => {

        data.sort((a, b) => {
            // 将字符串转换为 Date 对象进行比较  
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);
            // 返回结果决定了排序的方向，这里是升序排序  
            return dateB - dateA;
        });

        allData = data; // 存储排序后的数据
        chuchijiaz(); // 初次加载数据
    })
}

export function chuchijiaz() {
    const start = (currentPage - 1) * jiazaigeshu;
    const end = start + jiazaigeshu;
    const items = allData.slice(start, end);


    let listElement = document.getElementById("wenzhang");
    items.forEach(item => {
        let listItem = document.createElement('div');
        let listTitle = document.createElement('h2');
        let listDate = document.createElement('span')
        let listintroduce = document.createElement('span')
        listItem.className = 'wenbkuangjia'; // 设置 div 的 class
        listintroduce.className = 'wenbjieshao'; // 设置文本介绍 class
        const encodedUserId = encodeURIComponent(item.name);
        // 为每个div添加点击事件监听器
        listItem.addEventListener('click', function () {
            window.location.replace(`/wenzyemian/index.html?userId=${encodedUserId}`);
        });
        // 文本内容
        listTitle.textContent = item.name; // 标题内容
        listintroduce.textContent = item.text // 文本介绍
        listDate.textContent = item.time// 日期
        // 添加文本
        listElement.appendChild(listItem);// 将新的列表项添加到列表中
        listItem.appendChild(listTitle);// 文本标题
        listItem.appendChild(listintroduce);// 文本介绍
        listItem.appendChild(listDate);// 日期
    });

    // 显示或隐藏“加载更多”按钮
    if (end < allData.length) {
        document.getElementById('loadMore').style.display = 'block';
    } else {
        document.getElementById('loadMore').style.display = 'none';
    }

    currentPage++; // 更新当前页码
}