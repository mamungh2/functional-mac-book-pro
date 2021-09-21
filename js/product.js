// update total price
function updateTotalPrice() {
    // get memory cost
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostAmount = parseFloat(memoryCost.innerText);
    // get best price
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmount = parseFloat(bestPrice.innerText);
    // get storage price
    const storageCost = document.getElementById('storage-cost');
    const storageCostAmount = parseFloat(storageCost.innerText);
    // get delivery cost
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);
    // add total price
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    // set total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatedTotal;
    return updatedTotal;
}

// set grand total price
function setGrandTotal() {
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updateTotalPrice();
}

// update grand total price for promo code
function updateGrandTotal() {
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value;
    if (promoInputText == 'stevekaku') {
        const grandTotal = document.getElementById('grand-total');
        const grandTotalAmount = parseFloat(grandTotal.innerText);
        const calcGrandTotal = grandTotalAmount - (grandTotalAmount * 20 / 100);
        grandTotal.innerText = calcGrandTotal;
        promoInput.value = '';
        document.getElementById('promo-button').setAttribute('disabled', 'disabled');
    }
}


/*-----------------------------------\
|----All event handlers are below-----|
\-----------------------------------*/

// memory button event handler
document.getElementById('memory-button8GB').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    updateTotalPrice();
    setGrandTotal();
})
document.getElementById('memory-button16GB').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    updateTotalPrice();
    setGrandTotal();
})

// storage button event handler
document.getElementById('storage-button256GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    updateTotalPrice();
    setGrandTotal();
})
document.getElementById('storage-button512GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    updateTotalPrice();
    setGrandTotal();
})
document.getElementById('storage-button1TB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    updateTotalPrice();
    setGrandTotal();
})

// delivery charge event handler
document.getElementById('delivery-buttonFree').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    updateTotalPrice();
    setGrandTotal();
})
document.getElementById('delivery-buttonCharge').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    updateTotalPrice();
    setGrandTotal();
})

// promo button event handler
document.getElementById('promo-button').addEventListener('click', function () {
    updateGrandTotal();
})