const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

function generateCard(member) {
  const { name, role, email, img } = member;
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  newDiv.innerHTML = `
                <img src="./${img}" alt="picture of the team-member">
                <div class="card-description">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>${email}</p>
                </div>
            `;
  return newDiv;
}

const containerCard = document.querySelector(".container");

for (let i = 0; i < teamMembers.length; i++) {
  containerCard.append(generateCard(teamMembers[i]));
}



const formNewMember = document.getElementById("add-member");
const nameMember = document.getElementById("name-member");
const roleMember = document.getElementById("role-member");
const emailMember = document.getElementById("email-member");
const imgMember = document.getElementById("img-member");

formNewMember.addEventListener("submit", (e)=>{
  e.preventDefault();
  
})