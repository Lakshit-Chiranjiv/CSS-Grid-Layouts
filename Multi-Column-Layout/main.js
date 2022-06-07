let articles = document.querySelectorAll('.simple-article')

articles.forEach((article) => {
    article.addEventListener('click',()=>{
        articles.forEach((x)=>{
            x.classList.remove('sub-selected');
        })
        article.classList.add('sub-selected');
    })
})