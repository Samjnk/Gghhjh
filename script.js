document.addEventListener('DOMContentLoaded', function() {
    const news = JSON.parse(localStorage.getItem('news')) || [];
    const content = document.getElementById('content');

    function renderNews() {
        content.innerHTML = '';
        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p><button onclick="viewNews('${item.title}', '${item.content}')">قراءة المزيد</button>`;
            content.appendChild(newsItem);
        });
    }

    window.viewNews = function(title, content) {
        alert(`عنوان: ${title}\n\nمحتوى: ${content}`);
    };

    renderNews();
});