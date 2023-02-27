addEventListener("submit", (event) => {
  // document.getElementById("btn-primary").addEventListener("click", function () {
  const userName = document.getElementById("username").value;
  const eMail = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const isNewsletterOpted = document.getElementById("yes").checked;
  const isNewsletterDeclined = document.getElementById("no").checked;
  const date = document.getElementById("date").value;

  console.group("Form Submission");
  console.log("Username : " + userName + "\n");
  console.log("Email: " + eMail + "\n");
  console.log("Password: " + password + "\n");
  if (isNewsletterOpted) {
    console.log("Newsletter: Yes");
  } else if (isNewsletterDeclined) {
    console.log("Newsletter: No");
  } else {
    console.log("Newsletter: no submission");
  }

  if (isNaN(date)) {
    console.log("Date: " + date + "\n");
  } else {
    console.log("Date: no submission\n");
  }
  console.groupEnd();
});
