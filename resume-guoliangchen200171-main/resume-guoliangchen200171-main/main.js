//where are the functions?
/**
 * this assignment enable the user to use the api to search the film that they wanted through name or id.
 * @param content
 * @returns {Promise<*>}
 */
let currentSize = 16; // 默认字体大小

// 调整字体大小的函数
function adjustFontSize(step) {
    currentSize += step; // 根据需要调整字体大小的步长
    document.body.style.fontSize = `${currentSize}px`;
}
function toggleColor() {
    var body = document.body;
    var currentColor = window.getComputedStyle(body).backgroundColor;
    var isDarkMode = currentColor === 'rgb(34, 34, 34)'; // 此处根据你的深色背景色值进行判断
    if (isDarkMode) {
        body.style.backgroundColor = '#fff'; // 切换到浅色
    } else {
        body.style.backgroundColor = '#222'; // 切换到深色
    }
}