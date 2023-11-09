window.onload = function () {
  const counterElement = document.getElementById("counter");
  const plusBtn = document.getElementById("plusBtn");
  const minusBtn = document.getElementById("minusBtn");
  const buyBtn = document.getElementById("buyBtn");
  const outputElement = document.getElementById("output");
  const productImageElement = document.getElementById("productImage");

  let counterValue = 0;
  let productPrice = parseInt(
    document.getElementById("productImage").getAttribute("data-price")
  );

  function updateCounter(newValue) {
    counterValue = newValue;
    counterElement.textContent = counterValue;
  }

  plusBtn.addEventListener("click", function () {
    if (counterValue < 100) {
      updateCounter(counterValue + 1);
    }
  });

  minusBtn.addEventListener("click", function () {
    if (counterValue > 0) {
      updateCounter(counterValue - 1);
    }
  });

  buyBtn.addEventListener("click", function () {
    const totalPrice = counterValue * productPrice;
    outputElement.textContent = `You have bought ${counterValue} products. Total price: $${totalPrice}`;
  });
};
