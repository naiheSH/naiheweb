// 设置随机背景壁纸
function setRandomBackground() {
    const backgroundWallpaper = document.createElement('div');
    backgroundWallpaper.className = 'background-wallpaper';
    
    // 使用picsum.photos生成随机图片
    const randomSeed = Math.floor(Math.random() * 1000);
    backgroundWallpaper.style.backgroundImage = `url(https://picsum.photos/seed/${randomSeed}/1920/1080)`;
    
    // 将背景元素添加到body的最前面
    document.body.insertBefore(backgroundWallpaper, document.body.firstChild);
}

// 联系方式点击事件处理
function showContactInfo(platform, value, qrUrl) {
    // 如果有二维码URL，显示包含二维码的模态框
    if (qrUrl) {
        const modal = document.getElementById('qr-modal');
        const qrImage = document.getElementById('qr-image');
        const platformName = document.getElementById('platform-name');
        const contactValue = document.getElementById('contact-value');
        
        qrImage.src = qrUrl;
        platformName.textContent = platform;
        contactValue.textContent = value;
        modal.classList.remove('hidden');
    } else {
        // 否则显示简单的提示框
        alert(`${platform}：${value}`);
    }
}

// 关闭二维码模态框
function closeQRModal() {
    const modal = document.getElementById('qr-modal');
    modal.classList.add('hidden');
}

// 页面加载完成后的初始化
window.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');
    // 设置随机背景壁纸
    setRandomBackground();
});