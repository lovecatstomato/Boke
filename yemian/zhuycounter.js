import { marked } from 'marked';

const markdownFilePath = '/biji/bijiweiz.json'; // 注意这里的路径可能是相对于构建后的根目录

// 读取json文件篇数
export function duqvmdwenjian() {
    return fetch(markdownFilePath).then(response => response.json()).then(data => {
        let count = 0;
        for (const item of data) {
            count++;
        }
        return count;
    })
}

export let allData = []; // 存储所有文章数据
let currentPage = 1; // 当前页码
const jiazaigeshu = 5 // 要显示的文章数量
export let allDatas = [] //更新后的文章

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
        document.getElementById('loadMore').innerHTML = '没有更多的内容了';
    }
    allDatas = (currentPage - 1) * jiazaigeshu + items.length;
    currentPage++; // 更新当前页码
}

// script.js
export function yingyue() {
    const yinyue_diz = '/BGM/yinyuediz.json';// 音乐请求路径
    function yinyue_qingqiu() {
        return fetch(yinyue_diz).then(response => response.json()).then(data => {
            // 创建一个数组对请求的地址进行保存
            let yinyue_url_dizhi = [];
            for (let index = 0; index < data.length; index++) {
                let yinyue_url = data[index].url
                yinyue_url_dizhi.push(yinyue_url); // 将每个URL添加到数组中
            }
            return yinyue_url_dizhi
        })
    }
    // let audioFiles = [];// 音频文件列表（使用相对路径或绝对路径）
    // // 调用函数并处理返回的URL数组
    // yinyue_qingqiu().then(yinyue_url_dizhi => {
    //     // audioFiles.push(yinyue_url_dizhi);
    //     audioFiles = yinyue_url_dizhi
    // });
    let audioFiles = [
        '/BGM/Throwaway.mp3',
        '/BGM/nizou.mp3'
    ];// 音频文件列表（使用相对路径或绝对路径）
    console.log(audioFiles, "audioFiles");

    let currentIndex = 0;
    let audioPlayer = document.getElementById('audioPlayer');// 音频文件
    let timelinePlayed = document.getElementById('timelinePlayed');// 进度条
    let timelineTime = document.getElementById('timelineTime');// 时间
    let play_pause = document.querySelector(".play-pause")// 播放/暂停
    let prev = document.querySelector('.prev')// 上一曲
    let next = document.querySelector('.next')// 下一曲
    let isPlaying = false;// 判断暂停图标和开始图标

    // 更新进度条和时间显示
    function updateTimeline() {
        // 确保audioPlayer是有效的
        if (audioPlayer && audioPlayer.duration > 0) {
            var duration = audioPlayer.duration;
            var currentTime = audioPlayer.currentTime;

            // 计算播放进度百分比
            var percentagePlayed = (currentTime / duration) * 100;

            // 确保timelinePlayed是一个有效的DOM元素
            if (timelinePlayed) {
                timelinePlayed.style.width = percentagePlayed.toFixed(2) + '%'; // 使用toFixed()来限制小数位数
            }

            // 格式化并显示时间
            var minutes = Math.floor(currentTime / 60);
            var seconds = Math.floor(currentTime % 60);
            var formattedCurrentTime = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);

            minutes = Math.floor(duration / 60);
            seconds = Math.floor(duration % 60);
            var formattedDuration = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);

            // 确保timelineTime是一个有效的DOM元素
            if (timelineTime) {
                timelineTime.textContent = formattedCurrentTime + ' / ' + formattedDuration;
            }
        } 
    }

    // 播放下一个音频文件
    function nextAudio() {
        currentIndex = (currentIndex + 1) % audioFiles.length;
        loadAudio(audioFiles[currentIndex]);
    }

    // 播放上一个音频文件
    function prevAudio() {
        currentIndex = (currentIndex - 1 + audioFiles.length) % audioFiles.length;
        loadAudio(audioFiles[currentIndex]);
    }


    // 加载并播放音频文件
    function loadAudio(file) {
        audioPlayer.src = file;
        console.log(audioPlayer.src);

        audioPlayer.load();
        audioPlayer.currentTime = 0; // 重置播放位置到开头
        if (isPlaying) {
            audioPlayer.play();
        }
        // 更新总时长显示（在加载元数据后）
        audioPlayer.addEventListener('loadedmetadata', function () {
            var duration = audioPlayer.duration;
            var minutes = Math.floor(duration / 60);
            var seconds = Math.floor(duration % 60);
            var totalTimeDisplay = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
            var currentTimeDisplay = '0:00 / ' + totalTimeDisplay;
            if (timelineTime.textContent.indexOf(totalTimeDisplay) === -1) {
                // 只有当总时长变化时才更新显示（避免重复设置相同的文本）
                timelineTime.textContent = currentTimeDisplay;
            }
        }, { once: true }); // 使用{once: true}来确保事件监听器只被触发一次
    }

    // 播放/暂停控制
    function playPause() {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
    }

    // 初始化播放列表
    loadAudio(audioFiles[currentIndex]);

    // 事件监听器
    audioPlayer.addEventListener('timeupdate', updateTimeline);
    play_pause.addEventListener('click', playPause);
    prev.addEventListener('click', prevAudio);
    next.addEventListener('click', nextAudio);


    // play_pause.addEventListener("click",function() {
    //     play_pause.src = isPlaying ? '../img/yinyue/zhanting.png' : '../img/yinyue/bofang.png'
    //     if (isPlaying) {
    //         console.log("zhanting");
    //     } else {
    //         console.log("bofang");
    //     }
    // })
}
