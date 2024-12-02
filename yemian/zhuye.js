import './zhuye.css';
import {
    duqvmdwenjian,
    duqvmdname,
    chuchijiaz,
    yingyue,
    allDatas,
    allData
} from './zhuycounter'

duqvmdwenjian().then(count => {
    let shuliang = count
    document.querySelector('#add').innerHTML = `
    <div id="zuobian" class="zuobian_yangshi">
        <img class="touxing" src="../img/touxing.jpg">
        <div class="wenzhi">
            <span>文章篇幅：${shuliang}篇</span>
            <span>铭记：2016.6.6</span>
        </div>
        <div class="shejiao">
            <div>
                <a href="https://github.com/lovecatstomato">
                    <img border="0" class="shejiao_tubiao" src="../img/tubiao/github.png">
                </a>
            </div>
            <div>
                <a href="https://gitee.com/lovecatstomato">
                    <img border="0" class="shejiao_tubiao" src="../img/tubiao/gitee.png">
                </a>  
            </div>
            <div>
                <a href="https://space.bilibili.com/269891432?spm_id_from=333.337.0.0">
                    <img border="0" class="shejiao_tubiao" src="../img/tubiao/bilibili.png">
                </a>  
            </div>
        </div>
        <div class="yinyue_zhuti">
            <div>
                <img class="yinyue_touxiang" src="../img/yinyue/zhuti.jpg">
            </div>
            <div>
                <img class="yinyue_tubiao" src="../img/yinyue/shagnyiq.png">
            </div>
            <div>
                <img class="yinyue_tubiao" src="../img/yinyue/zhanting.png">
            </div>
            <div>
                <img class="yinyue_tubiao" src="../img/yinyue/xiayiq.png">
            </div>
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
{/* <div class="music-player">
            <button id="playPauseButton" class="playPauseButton">你走</button>
            <video id="audioPlayer" style="display:none;">
                <source id="audioSource" type="video/mp4">
            </video>
        </div> */}

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