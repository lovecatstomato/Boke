import './zhuye.css';
// 读取md文件库
import { marked } from 'marked';
import fs from 'fs'
import path from 'path';

document.querySelector('#add').innerHTML = `
    <div id="wenzhang">
        
    </div>
`
// // 假设你的 Markdown 文件在构建后的 public 文件夹中，并且可以通过相对路径访问  
const markdownFilePath = '/biji/bijiweiz.json'; // 注意这里的路径可能是相对于构建后的根目录  

// fetch('/biji/bijiweiz.json').then(response => response.json()).then(data => {
//     console.log(data, 'data');
//     // 清空之前的列表内容（如果存在）  
//     let listElement = document.getElementById("wenzhang");

//     for (const item of data) {
//         let listItem = document.createElement('li');
//         listItem.textContent = item.name; // 设置列表项的内容为文件名 
//         console.log(item.name, 'item.name');
//         // 将新的列表项添加到列表中  
//         listElement.appendChild(listItem);
//     }
// })

fetch('/biji/bijiweiz.json').then(response => response.json()).then(data => {
    console.log(data, 'data');
    // 清空之前的列表内容（如果存在）  
    let listElement = document.getElementById("wenzhang");

    for (const item of data) {
        let listItem = document.createElement('li');
        listItem.textContent = item.name; // 设置列表项的内容为文件名 
        console.log(item.name, 'item.name');
        // 将新的列表项添加到列表中  
        listElement.appendChild(listItem);
    }
})
fetch(markdownFilePath)
    .then(response => response.text())
    .then(markdownText => {
        console.log(markdownText);
        // const html = marked(markdownText);
        // // 将 HTML 插入到 DOM 中
        // document.getElementById('wenzhang').innerHTML = html;
    })


