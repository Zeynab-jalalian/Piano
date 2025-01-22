const pianokeys = document.querySelectorAll('.piano-keys .key');

// تابع مشترک برای پخش صدا و فعال‌سازی کلید
function playSound(key) {
    const keySound = key.dataset.key;
    const audio = new Audio(`notes/${keySound}.mp3`);
    audio.play();
    key.classList.add('active');

    // حذف کلاس active بعد از مدتی
    setTimeout(function() {
        key.classList.remove('active');
    }, 200);
}

// رویداد کلیک روی کلیدهای پیانو
pianokeys.forEach(function(key) {
    key.addEventListener('click', function() {
        playSound(key);
    });
});

// رویداد فشردن کلید کیبورد
window.addEventListener('keydown', function(event) {
    const key = document.querySelector(`.key[data-key="${event.key}"`);
    if (key) {
        playSound(key);
    }
});

// رویداد رها کردن کلید کیبورد (برای حذف سریع‌تر کلاس active)
window.addEventListener('keyup', function(event) {
    const key = document.querySelector(`.key[data-key="${event.key}"]`);
    if (key) {
        key.classList.remove('active');
    }
});