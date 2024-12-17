// marked：一个将 Markdown 转换为 HTML 的库。
// highlight.js（简写为hljs）：一个用于代码高亮显示的库。
import { marked } from "marked";
import hljs from "highlight.js";

const markdownFilePath = '/biji/bijiweiz.json'; // 注意这里的路径可能是相对于构建后的根目录

export function mdduqv(chuanr) {
    // console.log(chuanr);
    fetch(markdownFilePath).then(response => response.json()).then(data => {
        for (const item of data) {
            if (chuanr === item.name) {
                fetch(item.type)
                    .then(response => response.text())
                    .then(markdownText => {
                        const html = marked(markdownText, {
                            highlight: function (code, lang) {
                                const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
                                return hljs.highlight(validLang, code).value;
                            }
                        });
                        // const html = marked(markdownText);
                        // 将 HTML 插入到 DOM 中
                        document.getElementById('youbian').innerHTML = html;
                        // 对页面上的所有代码块进行高亮处理
                        document.querySelectorAll('pre code').forEach((block) => {
                            hljs.highlightElement(block);
                        });
                    })
            }
        }
    })
}


export function fanhui(element) {
    element.addEventListener('click', () => {
        window.location.replace("/yemian/zhuye.html");
    })
}