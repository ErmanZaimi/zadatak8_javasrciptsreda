function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33F0", "#33F0FF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  function showWelcome() {
    alert("Welcome!");
  }
  setInterval(changeBackgroundColor, 1000);
  function changeText() {
    const paragraph = document.getElementById("changingText");
    paragraph.textContent = "Text has changed";
    paragraph.style.fontSize = "30px";
    paragraph.style.backgroundColor = "white";
  }
  function changeImageOnHover() {
    const image = document.getElementById("changingImage");
    image.src = "Resursi (4)/Resursi/do.jpg"; 
  }
  function restoreImage() {
    const image = document.getElementById("changingImage");
    image.src = "Resursi (4)/Resursi/hello.jpg"; 
  }
  const imageElement = document.getElementById("changingImage");
imageElement.addEventListener("mouseover", changeImageOnHover);
imageElement.addEventListener("mouseout", restoreImage);

function checkSelectedGender() {
    const maleRadio = document.getElementById("maleRadio");
    const femaleRadio = document.getElementById("femaleRadio");
    const messageParagraph = document.getElementById("genderMessage");
  
    if (maleRadio.checked) {
      messageParagraph.textContent = "Selected gender: Male";
    } else if (femaleRadio.checked) {
      messageParagraph.textContent = "Selected gender: Female";
    } else {
      messageParagraph.textContent = "Please select a gender";
    }
  }
  function showInput() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const favoriteAnimal = document.getElementById("favoriteAnimal").value;
    const inputMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nFavorite Animal: ${favoriteAnimal}`;
    alert(inputMessage);
  }
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const favoriteAnimal = document.getElementById("favoriteAnimal").value;
    const params = new URLSearchParams({
      firstName: firstName,
      lastName: lastName,
      favoriteAnimal: favoriteAnimal
    });
    window.location.href = `result.html?${params.toString()}`;
  });