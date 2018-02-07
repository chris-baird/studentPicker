const students = ['wesbos', 'bryan89tran']
const randomStudent = students[Math.floor(Math.random() * students.length)]

function findStudent() {
    fetch('https://api.github.com/users/' + randomStudent)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        document.getElementsByTagName('h1')[0].innerHTML = data.name
        document.getElementsByTagName('img')[0].src = data.avatar_url
    });
}

document.getElementsByTagName('span')[1].addEventListener('click', findStudent)