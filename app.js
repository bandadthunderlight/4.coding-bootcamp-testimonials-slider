data = [
    {
        id: 1,
        fullName: 'Tanya Sinclair',
        post: 'UX Engineer',
        text: '“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future. ”',
        img: './images/image-tanya.jpg'
    },
    {
        id: 2,
        fullName: 'John Tarkpor',
        post: 'Junior Front-end Developer',
        text: '“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        img: './images/image-john.jpg'
    },
    {
        id: 3,
        fullName: 'Mercy Novakof',
        post: 'Product Manager',
        text: '“ I am the manager of the team and I really want to thanks all of the developers and testers here. I definetly love you guys and wish all of you the best results and future ”',
        img: './images/image-mercy.jpg'
    },
    {
        id: 4,
        fullName: 'Toomaj Bandad',
        post: 'App Tester',
        text: '“ I really love testing cause will help all of the players in the team and you now ... We are the best and no one knows that how much the sweet is this work ”',
        img: './images/image-toomaj.png'
    },
]


const mainBody = document.querySelector('.main-body')
const bootimg = document.querySelector('.boot-img')
const bootcamptextwrapper = document.querySelector('.bootcamp-text-wrapper')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
prevBtn.addEventListener('click', prevState)
nextBtn.addEventListener('click', nextState)

var currentId = 1
var currentObject

mainBody.addEventListener('keyup', keyHandler)

function keyHandler(event) {
    if (event.key == 'ArrowRight') {
        nextState()
    } else if (event.key == 'ArrowLeft') {
        prevState()
    }
}

function setStateToDom(currentId) {
    bootimg.innerHTML = ``
    bootcamptextwrapper.innerHTML = ''
    currentObject = data.find(item => {
        return item.id === currentId
    })
    // console.log(currentObject);
    bootimg.insertAdjacentHTML('afterbegin', (`

        <img class="bootcamp-image" src=${currentObject.img} />
    `))

    bootcamptextwrapper.insertAdjacentHTML('beforeend', (`
    <p class="bootcamp-text">${currentObject.text}</p>
    <p class="writer">${currentObject.fullName}</p>
    <p class="post-writer">${currentObject.post}</p>
    <div class="box"></div>
    `))

}

function prevState() {
    if (currentId < 2) {
        currentId = data.length
    } else {
        currentId--
    }
    // console.log(currentId);
    setStateToDom(currentId)
}

function nextState() {
    if (currentId == data.length) {
        currentId = 1
    } else {
        currentId++
    }
    // console.log(currentId);
    setStateToDom(currentId)
}

