const students = ['bryan89tran']
var students = ["https://github.com/bseitz754",
    "https://github.com/bpham2002",
    "https://github.com/cameron4k",
    "https://github.com/chieuduy",
    "https://github.com/chriserb614",
    "https://github.com/clopes1",
    "https://github.com/chrisyforshort",
    "https://github.com/gavinquirk",
    "https://github.com/dynamicmosiac",
    "https://github.com/floresjacob",
    "https://github.com/jacobv2410",
    "https://github.com/javierleon94",
    "https://github.com/jdknappe",
    "https://github.com/jodecile84",
    "https://github.com/JodeciLe84",
    "https://github.com/Dev533",
"https://github.com/jgsilverman",
    "https://github.com/jphamxuan",
    "https://github.com/khurlock",
    "https://github.com/MariGMartinez",
    "https://github.com/markchiang1",
    "https://github.com/hoang-minh",
    "https://github.com/oale444",
    "https://github.com/PRESTONPOWELL22",
    "https://github.com/pujasodha",
    "https://github.com/thomasseaman",
    "https://github.com/vfgonzalez",
    "https://github.com/yunwhyjay"]
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
