const project =[
    {
        id:1,
        img:"./public/project/project1.png",
        path:"https://sneaker-react-app.netlify.app/"
    },
    {
        id:2,
        img:"./public/project/project2.png",
        path:"https://plants-react-app.netlify.app/"
    },
    {
        id:3,
        img:"./public/project/project3.png",
        path:"https://riva-react-app.netlify.app/"
    },
    {
        id:4,
        img:"./public/project/project4.png",
        path:"https://plants-react-app.netlify.app/"
    },
]
//start portfolo
let container_portfolo = document.querySelector("#container-portfolo")
project.map(item=>{
    //start container
    let projects_card = document.createElement("div")
    projects_card.className = "projects-card"
    projects_card.id = item.id
    //start container img
    let projects_img = document.createElement("div")
    projects_img.className = "projects-img"
    let img = document.createElement("img")
    img.src = item.img
    projects_img.appendChild(img)
    projects_card.appendChild(projects_img)
    //start linke
    let rout_project = document.createElement("a")
    rout_project.className = "rout-project"
    rout_project.innerHTML= "Visit"
    rout_project.href = item.path
    rout_project.setAttribute("target", "_blank");
    projects_card.appendChild(rout_project)
    //start appund
    container_portfolo.appendChild(projects_card)
})
//end portfolo
