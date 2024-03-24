const items = [
    {
        photo: 'photo-1.jpg',
        title: 'Title-1',
        date: '24 Mart 2024'
    },
    {
        photo: 'photo-2.jpg',
        title: 'Title-2',
        date: '25 Mart 2024'
    },
    {
        photo: 'photo-3.jpg',
        title: 'Title-3',
        date: '26 Mart 2024'
    }
]

let activeIndex = 2
const createUIElement = () => {
    const slider = items[activeIndex]
    const photo = document.querySelector('#photo')
    const title = document.querySelector('#title')
    const date = document.querySelector('#date')
    photo.src = './assets/images/' + slider.photo
    title.innerText = slider.title
    date.innerText = slider.date
}

document.querySelector('#btnNext').addEventListener('click', function () {
    if(activeIndex+1 < items.length) {
        activeIndex++
    
    }
    else activeIndex = 0
    createUIElement()
    
    
})

document.querySelector('#btnPrev').addEventListener('click', function () {
    if(activeIndex > 0) activeIndex--
    else activeIndex = items.length - 1
    createUIElement()
})

createUIElement()