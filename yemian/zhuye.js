import './zhuye.css';
import { duqvmdwenjian, duqvmdname, chuchijiaz, yingyue, allDatas, allData } from './zhuycounter'

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


window.addEventListener('scroll', () => {
    let tinzi = false //文章加载
    // 换成按钮的加载方式，这样就不用监听滚动事件，妨碍数据加载
    if (allDatas < allData.length) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        console.log(allDatas, allData.length);

        console.log('加载', scrollTop, clientHeight, scrollHeight);
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            // console.log(1);
    
            if (!tinzi) {
                // console.log(2);
    
                tinzi = true
                if (allDatas < allData.length) {
                    // 当滚动到页面底部时，执行加载更多数据的操作  
                    document.getElementById('loadMore').style.display = 'block';
                    chuchijiaz();
                } else {
                    tinzi = false
                }
            }
            // tinzi = false
        }
    }

});



