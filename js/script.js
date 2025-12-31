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
function showContactInfo(platform, value, qrUrl, addUrl) {
    // 如果有二维码URL，显示包含二维码的模态框
    if (qrUrl) {
        const modal = document.getElementById('qr-modal');
        const qrImage = document.getElementById('qr-image');
        const platformName = document.getElementById('platform-name');
        const contactValue = document.getElementById('contact-value');
        const addContactBtn = document.getElementById('add-contact-btn');
        
        qrImage.src = qrUrl;
        platformName.textContent = platform;
        contactValue.textContent = value;
        
        // 显示或隐藏立即添加按钮
        if (platform === '飞书 (Lark)' && addUrl) {
            addContactBtn.href = addUrl;
            addContactBtn.classList.remove('hidden');
        } else {
            addContactBtn.classList.add('hidden');
        }
        
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

// 复制邮箱号到剪贴板
function copyEmail() {
    const email = '2768697066@qq.com';
    
    // 使用Clipboard API复制文本
    navigator.clipboard.writeText(email)
        .then(() => {
            // 可以添加一个提示，告知用户复制成功
            alert('邮箱号已复制到剪贴板');
        })
        .catch(err => {
            console.error('复制失败:', err);
            // 备用方案：使用传统的textarea方法复制
            const textarea = document.createElement('textarea');
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('邮箱号已复制到剪贴板');
        });
}

// 樱花飘落效果
function createSakuraEffect() {
    // 创建樱花容器
    const sakuraContainer = document.createElement('div');
    sakuraContainer.className = 'sakura-container';
    document.body.appendChild(sakuraContainer);
    
    // 生成樱花花瓣
    const sakuraCount = 200;
    
    for (let i = 0; i < sakuraCount; i++) {
        const sakura = document.createElement('div');
        sakura.className = 'sakura';
        
        // 随机大小（增加大小范围）
        const size = Math.random() * 15 + 3;
        sakura.style.width = `${size}px`;
        sakura.style.height = `${size}px`;
        
        // 随机初始位置
        sakura.style.left = `${Math.random() * 100}vw`;
        sakura.style.top = `${Math.random() * -10}vh`;
        
        // 随机颜色（增加更多粉色系颜色）
        const colors = [
            '#ffb3b3', '#ffc0cb', '#ffe4e1', '#ffdab9',
            '#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb',
            '#b5ead7', '#c7ceea', '#ffc8dd', '#ffafcc'
        ];
        sakura.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机透明度
        const opacity = Math.random() * 0.6 + 0.4;
        sakura.style.opacity = opacity;
        
        // 随机动画持续时间（增加变化范围）
        const duration = Math.random() * 15 + 8;
        sakura.style.animationDuration = `${duration}s`;
        
        // 随机延迟
        sakura.style.animationDelay = `${Math.random() * 10}s`;
        
        // 添加到容器
        sakuraContainer.appendChild(sakura);
    }
}

// 页面加载完成后的初始化
window.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');
    // 设置随机背景壁纸
    setRandomBackground();
    // 创建樱花飘落效果
    createSakuraEffect();
});