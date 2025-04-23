function rollDice() {
  const numOfdice = document.getElementById("numOfdice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimage = document.getElementById("diceimage");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfdice; i++) { 
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value); 
      const imgPath = `${value}.png`;
      images.push(`<img src="${imgPath}" alt="Dice: ${value}" >`);
  }
  

  diceresult.textContent = `dice: ${values.join(', ')}`;
  diceimage.innerHTML = images.join(" ");
}


