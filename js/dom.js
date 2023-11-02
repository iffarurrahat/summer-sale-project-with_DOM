let totalAmount = 0;

// purchase button
const purchaseBtn = document.getElementById('purchase-btn');

// total price
const totalPriceElement = document.getElementById('total-price');

// Discount Price
const discountPriceElement = document.getElementById('discount-price');

// Final Total Pay
const finalTotalElement = document.getElementById('final-total');



// apply button
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    const couponFiled = document.getElementById('coupon-filed');
    const couponFiledValue = couponFiled.value;
    couponFiled.value = '';

    const discount = ((totalAmount * 20) / 100);
    if (couponFiledValue === 'SELL200') {
        discountPriceElement.innerText = discount.toFixed(2);

        const total = totalAmount - discount;
        finalTotalElement.innerText = total.toFixed(2);
    }
    else {
        alert('Coupon Code Wrong');
        return;
    }

})



function handlerClick(data) {
    // card title
    const cardTitle = document.getElementById('card-title');
    // count cart__title
    const count = cardTitle.childElementCount;
    const title = data.childNodes[5].innerText;
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${title}`;
    cardTitle.appendChild(p);

    const cardPrice = data.childNodes[7].innerText.split(' ')[0];
    const price = parseFloat(cardPrice);

    // total price
    totalAmount = totalAmount + price;
    totalPriceElement.innerText = totalAmount.toFixed(2);

    // apply and purchase button enable
    if (totalAmount > 0) {
        purchaseBtn.removeAttribute('disabled');
        if (totalAmount > 200) {
            applyBtn.removeAttribute('disabled');
        }
    }
    // final total
    finalTotalElement.innerText = totalAmount.toFixed(2);

}

// go home button
document.getElementById('go-home-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
})