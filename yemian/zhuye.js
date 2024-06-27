import './zhuye.css';
import { duqvmdwenjian,duqvmdname } from './zhuycounter'
// 读取md文件库
import { marked } from 'marked';

duqvmdwenjian().then(count => {
    let shuliang = count
    document.querySelector('#add').innerHTML = `
    <div id="zuobian" class="zuobian_yangshi">
        <img class="touxing" src="../img/touxing.jpg">
        <div class="wenzhi">
            <span>文章篇幅</span>
            <span>${shuliang}篇</span>
            <span>铭记</span>
            <span>2016.6.6</span>
        </div>
    </div>
    <div id="youbian" class="youbian_yangshi">
        <div id="wenzhang" class="wenzhang">
            
        </div>
    </div>
`

})

duqvmdname()

// fetch(markdownFilePath)
//     .then(response => response.text())
//     .then(markdownText => {
//         console.log(markdownText);
//         // const html = marked(markdownText);
//         // // 将 HTML 插入到 DOM 中
//         // document.getElementById('wenzhang').innerHTML = html;
//     })


