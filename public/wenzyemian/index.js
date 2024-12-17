import './index.css';
import { mdduqv,fanhui } from './indexcounter'

document.querySelector('#app').innerHTML = `
    <div id="zhukuangjia" class="zhukuangjia_kuangjia">
        <div id="tuic" class="tuic_anniu">
            返回主页
        </div>
        <div id="youbian" class="youbian_yangshi">
        
        </div>
    </div>
    
`

const queryString = window.location.search
// 创建 URLSearchParams 对象
const urlParams = new URLSearchParams(queryString);
// 获取特定的查询参数并进行解码
const userId = decodeURIComponent(urlParams.get('userId'));
mdduqv(userId)
fanhui(tuic)