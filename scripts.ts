// Define Resume Object structure
interface Resume {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  education: string[];
  experience: string[];
  skills: string[];
}

// Resume data
const resumeData: Resume = {
  name: "Iqra",
  title: "Full-Stack Web Developer",
  email: "ABCDEF@gmail.com",
  phone: "+123456789",
  website: "https://ABCForexample.com",
  education: [
    "Diploma In Information Technology- XYZ University (2020-2024)",
    "Certified:Web designing and Engineering Certificate(2022)",
  ],
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js"],
  experience: [
    "Sublime Project Website (2022)",
    "Herbal Products website(2024)",
  ],
};

// Function to update resume info dynamically
function updateResume(resume: Resume) {
  document.getElementById("name")!.textContent = resume.name;
  document.getElementById("title")!.textContent = resume.title;
  document.getElementById("email")!.textContent = resume.email;
  document.getElementById("phone")!.textContent = resume.phone;
  document.getElementById("website")!.setAttribute("href", resume.website);
  document.getElementById("website")!.textContent = resume.website;

  const educationList = document.getElementById("education-list")!;
  educationList.innerHTML = "";
  resume.education.forEach((edu) => {
    const li = document.createElement("li");
    li.textContent = edu;
    educationList.appendChild(li);
  });
  const skillsList = document.getElementById("skills-list")!;
  skillsList.innerHTML = "";
  resume.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const experienceList = document.getElementById("experience-list")!;
  experienceList.innerHTML = "";
  resume.experience.forEach((exp) => {
    const li = document.createElement("li");
    li.textContent = exp;
    experienceList.appendChild(li);
  });
}

// Button click event to update resume info
document.getElementById("updateResume")!.addEventListener("click", () => {
  updateResume(resumeData);
});
