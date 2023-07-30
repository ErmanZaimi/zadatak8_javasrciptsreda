function getInputValues() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const favoriteAnimal = urlParams.get('favoriteAnimal');
    const inputMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nFavorite Animal: ${favoriteAnimal}`;
    document.getElementById("inputValues").textContent = inputMessage;
  }
  function goBack() {
    window.history.back();
  }