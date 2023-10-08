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
                <i class="ti-arrow-down arrow-down"></i>
                <i class="ti-control-play control-play display-none"></i>
                <p>${news[i].title}</p>
                <i class="ti-arrows-vertical arrows-vertical"></i>
            </div>
            <div class="news-content"><p>${news[i].content}</p></div>
        </div>
    `;
}


var controlPlays = document.querySelectorAll('.news-blog .news-title .control-play');
controlPlays.forEach(ele =>ele.addEventListener('click', (e) =>{
    let title = e.target.parentNode;
    let content = title.nextElementSibling;
    let arrowDown = title.querySelector('.arrow-down');
    console.log(title,content,arrowDown);
    e.target.classList.add('display-none');
    content.classList.remove('display-none');
    arrowDown.classList.remove('display-none');        
}))
var arrowDowns = document.querySelectorAll('.news-blog .news-title .arrow-down');
arrowDowns.forEach(ele => ele.addEventListener('click',e=>{
    let title = e.target.parentNode;
    let content = title.nextElementSibling;
    let controlPlay = title.querySelector('.control-play');
    e.target.classList.add('display-none');
    content.classList.add('display-none');
    controlPlay.classList.remove('display-none');
}))

// var isDragArrowsVertical = false;
// var arrowsVerticals = document.querySelectorAll('.news-blog .news-title .arrows-vertical');
// for(let arrowsVertical of arrowsVerticals){
//     arrowsVertical.addEventListener('mousedown',e=>{
//         isDragArrowsVertical = true;
//         console.log(1);
//         let temp = e.target.parentNode.parentNode;
//         temp.setAttribute("draggable",true);
//     })
//     arrowsVertical.addEventListener('mouseup',e=>{
//         isDragArrowsVertical = false;
//         console.log(2);
//         let temp = e.target.parentNode.parentNode;
//         temp.setAttribute("draggable",false);
//     })
//     arrowsVertical.addEventListener('mouseover',e =>{
//       console.log(e);
//     })
// }
