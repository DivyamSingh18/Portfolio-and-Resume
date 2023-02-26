var resumeLink =
  "https://drive.google.com/file/d/1eKADxKFHeNgP4z74UTDdkSA1q8GCCyzj/view?usp=sharing";

let fetchResume = document.querySelectorAll(".link");
fetchResume.forEach((fetch) => {
  fetch.setAttribute("href", resumeLink);
});
