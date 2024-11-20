// 控制彈跳視窗的開啟與關閉
document.querySelector('.menu-btn').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = '0'; // 彈跳視窗完全展開
});

document.querySelector('.close-btn').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-100%'; // 彈跳視窗完全收合
});
