const news =  [
    {
      "title": "NEWS 01",
      "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."
    },
    {
      "title": "NEWS 02",
      "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."
    },
    {
      "title": "NEWS 03",
      "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."
    },
    {
      "title": "NEWS 04",
      "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."
    }
];

var sideContent = document.getElementById('side');
for(let i = 0; i < news.length;i++){
    let type = 'even-new-head-bgcolor'
    if(i % 2 === 0){
        type = 'odd-new-head-bgcolor';
    }
    sideContent.innerHTML += `
        <div class="news-blog">
            <div class="news-title ${type} open">
                <i class="ti-arrow-down"></i>
                <i class="ti-control-play display-none"></i>
                <p>${news[i].title}</p>
                <i class="ti-arrows-vertical"></i>
            </div>
            <div class="news-content"><p>${news[i].content}</p></div>
        </div>
    `;
}



// get the title of the blogs
var titles = document.getElementsByClassName('news-title');
for(let i in titles){
    titles[i].addEventListener('click',e => {
        let parent = titles[i].parentNode;
        let content = parent.querySelector('.news-content');
        let arrowDownIco = titles[i].querySelector('.ti-arrow-down');
        let controlPlayIco = titles[i].querySelector('.ti-control-play');
        if(titles[i].classList.contains('open')){
            content.classList.add('display-none');
            titles[i].classList.remove('open');
            arrowDownIco.classList.add('display-none');
            controlPlayIco.classList.remove('display-none');
            
        }else{
            content.classList.remove('display-none');
            titles[i].classList.add('open');
            arrowDownIco.classList.remove('display-none');
            controlPlayIco.classList.add('display-none');
        }
    })
}
