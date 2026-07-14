// 联系方式点击事件处理
function showContactInfo(platform, value, qrUrl, addUrl) {
    if (qrUrl) {
        const modal = document.getElementById('qr-modal');
        const qrImage = document.getElementById('qr-image');
        const platformName = document.getElementById('platform-name');
        const contactValue = document.getElementById('contact-value');
        const addContactBtn = document.getElementById('add-contact-btn');
        
        qrImage.src = qrUrl;
        platformName.textContent = platform;
        contactValue.textContent = value;
        
        if (platform === '飞书 (Lark)' && addUrl) {
            addContactBtn.href = addUrl;
            addContactBtn.classList.remove('hidden');
        } else {
            addContactBtn.classList.add('hidden');
        }
        
        modal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    } else {
        alert(platform + '：' + value);
    }
}

// 关闭二维码模态框
function closeQRModal() {
    const modal = document.getElementById('qr-modal');
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

// Escape 键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var modal = document.getElementById('qr-modal');
        if (!modal.classList.contains('hidden')) {
            closeQRModal();
        }
    }
});

// 复制邮箱到剪贴板
function copyEmail() {
    var email = '2768697066@qq.com';
    
    navigator.clipboard.writeText(email).then(function() {
        alert('邮箱号已复制到剪贴板');
    }).catch(function() {
        alert('复制失败，请手动复制：' + email);
    });
}

// 樱花飘落效果（根据屏幕尺寸动态数量）
function createSakuraEffect() {
    if (document.hidden) return;
    
    var container = document.createElement('div');
    container.className = 'sakura-container';
    document.body.appendChild(container);
    
    // 桌面 120，移动端 40
    var isMobile = window.innerWidth < 768;
    var sakuraCount = isMobile ? 40 : 120;
    
    var colors = [
        '#ffb3b3', '#ffc0cb', '#ffe4e1', '#ffdab9',
        '#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb',
        '#b5ead7', '#c7ceea', '#ffc8dd', '#ffafcc'
    ];
    
    for (var i = 0; i < sakuraCount; i++) {
        var sakura = document.createElement('div');
        sakura.className = 'sakura';
        
        var size = Math.random() * 15 + 3;
        sakura.style.width = size + 'px';
        sakura.style.height = size + 'px';
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.top = Math.random() * -10 + 'vh';
        sakura.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sakura.style.opacity = Math.random() * 0.6 + 0.4;
        sakura.style.animationDuration = (Math.random() * 15 + 8) + 's';
        sakura.style.animationDelay = (Math.random() * 10) + 's';
        
        container.appendChild(sakura);
    }
}

// 页面不可见时暂停樱花动画
document.addEventListener('visibilitychange', function() {
    var container = document.querySelector('.sakura-container');
    if (!container) return;
    
    if (document.hidden) {
        container.style.animationPlayState = 'paused';
        container.querySelectorAll('.sakura').forEach(function(s) {
            s.style.animationPlayState = 'paused';
        });
    } else {
        container.style.animationPlayState = 'running';
        container.querySelectorAll('.sakura').forEach(function(s) {
            s.style.animationPlayState = 'running';
        });
    }
});

// 页面加载完成后的初始化
window.addEventListener('DOMContentLoaded', function() {
    createSakuraEffect();
});
