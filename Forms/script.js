function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9]+$/.test(phone)) {
      alert("Phone number must contain only numbers.");
      return;
    }

    if (confirm("Do you want to submit the form?")) {
      const taskList = document.getElementById("taskList");
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";

      taskItem.innerHTML = `<div>
        <strong>${name}</strong> (${email}, ${phone})<br />
        <em>Subject:</em> ${subject}<br />
        <em>Message:</em> ${message}
      </div>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

      taskList.appendChild(taskItem);
      document.getElementById("contactForm").reset();
    }
  }

  function deleteTask(button) {
    if (confirm("Are you sure you want to delete this entry?")) {
      button.parentElement.remove();
    }
  }

  function resetForm() {
    if (!confirm("Are you sure you want to reset the form?")) {
      event.preventDefault();
    }
  }