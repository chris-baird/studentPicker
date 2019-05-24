const students = [
  "github.com/vpvnguyen",
  "github.com/adrianarvizu29",
  "github.com/axxstar",
  "github.com/BryonLH",
  "github.com/ith1nk",
  "github.com/violinmana",
  "github.com/acabrera15",
  "github.com/ericmackensen",
  "github.com/morralex",
  "github.com/dmmarr",
  "github.com/nickidder1994",
  "github.com/zmorton8057",
  "github.com/anumasif1",
  "github.com/dpark123",
  "github.com/joevasquez344",
  "github.com/malvarius",
  "github.com/jephrocs",
  "github.com/fosterr334",
  "github.com/Ryanh899"
];

function findStudent() {
  //randomly grabbing studet's username
  const randomStudent = students[Math.floor(Math.random() * students.length)];
  const userName = randomStudent.split(".com/").pop();

  // //remove students who were already called
  const index = students.indexOf(randomStudent);
  if (index > -1) students.splice(index, 1);
  //api call to github to grab username and picture
  fetch("https://api.github.com/users/" + userName)
    .then(data => data.json())
    .then(data => {
      console.log(data);

      //check if null ? "true":"false";
      const displayName = data.name ? data.name : userName;

      document.getElementsByTagName("h1")[1].innerHTML = displayName;
      document.getElementsByTagName("img")[0].src = data.avatar_url;
    });
  if (students.length === 0)
    document.getElementsByTagName("h1")[0].innerHTML = "Last Question";
}

document.getElementsByTagName("span")[1].addEventListener("click", findStudent);
