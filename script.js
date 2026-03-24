// script.js

// 1. 處理開場載入 (安撫功能 1)
let loadPercent = 0;
const loader = document.getElementById('loader');
const loadText = document.getElementById('loader-text');

const loadInt = setInterval(() => {
    loadPercent += Math.floor(Math.random() * 20) + 5;
    if (loadPercent >= 100) {
        loadPercent = 100;
        clearInterval(loadInt);
        setTimeout(() => loader.style.display = 'none', 500);
    }
    loadText.innerText = `正在接通門市連線中... ${loadPercent}%`;
}, 200);

// 2. 處理排隊倒數 (安撫功能 2)
let timeLeft = 15;
const bar = document.getElementById('bar');
const secSpan = document.getElementById('seconds');

const countdown = setInterval(() => {
    timeLeft--;
    secSpan.innerText = timeLeft;
    
    // 計算進度條比例
    let progress = ((15 - timeLeft) / 15) * 100;
    bar.style.width = progress + '%';

    if (timeLeft <= 0) {
        clearInterval(countdown);
        // 模擬重新連線成功
        alert("重新連線成功！正在導回結帳頁面...");
        window.location.reload(); 
    }
}, 1000);