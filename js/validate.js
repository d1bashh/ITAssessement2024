function validateForm() {
    const form = document.forms["contactForm"];
    if (form["name"].value === "" || form["email"].value === "" || form["message"].value === "") {
      alert("All fields must be filled out!");
      return false;
    }
    return true;
  }
  