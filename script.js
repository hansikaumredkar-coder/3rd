let currentPage = 1;

function nextPage() {
  const current = document.getElementById(`page${currentPage}`);

  if (currentPage < 5) {
    current.classList.remove("active");
    currentPage++;

    const next = document.getElementById(`page${currentPage}`);
    next.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


function showMessage(message) {
  const messageBox = document.getElementById("message");

  messageBox.textContent = message;

  messageBox.style.animation = "none";

  setTimeout(() => {
    messageBox.style.animation = "fadeIn 0.5s ease";
  }, 10);
}


function openLetter() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  envelope.style.display = "none";
  letter.classList.add("show");
}


function restart() {
  document.getElementById("letter").classList.remove("show");
  document.getElementById("envelope").style.display = "block";

  document.getElementById(`page${currentPage}`).classList.remove("active");

  currentPage = 1;

  document.getElementById("page1").classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
