import './zhuye.css';
import { duqvmdwenjian, duqvmdname, chuchijiaz, yingyue, gunlun } from './zhuycounter'

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
        <div class="music-player">
            <button id="playPauseButton" class="playPauseButton">你走</button>
            <video id="audioPlayer" style="display:none;">
                <source id="audioSource" type="video/mp4">
            </video>
        </div>
    </div>
    <div id="youbian" class="youbian_yangshi">
        <div id="wenzhang" class="wenzhang">
            
        </div>
        <div id="loadMore" class="loadMore">
            下拉加载更多
        </div>
    </div>
`;
    yingyue();
})
duqvmdname()

// gunlun();


// 监听滚动事件，加载更多数据
window.addEventListener('scroll', () => {
    // 不是监听高度而是数据才对
    console.log('加载',scrollTop,clientHeight);

    if (youbian.scrollTop + youbian.clientHeight >= youbian.scrollHeight) {
        // document.getElementById('loadMore').style.display = 'block';
        // chuchijiaz();
    }
});


