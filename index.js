import { menuArray } from '/data.js'

// --- This section renders the menu based on the menuArray ---
function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function(item) {
        menuHtml +=
            `<section class="item">
                <div class="item-emoji">${item.emoji}</div>
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p class="item-ingredients">${item.ingredients}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <button class="add-btn" data-id="${item.id}">+</button>
            </section>`
    })

    return menuHtml
}

function renderMenu() {
    document.querySelector('main').innerHTML = getMenuHtml()
}

renderMenu()

// --- This section handles any clicks on the DOM ---
let totalPrice = 0;
document.addEventListener('click', function(e) {
    if(e.target.dataset.id) {
        handleAddClick(e.target.dataset.id)
    }
    if(e.target.id === 'checkout-btn') {
        handlePaymentModal()
    }
})

// Pre-checkout State
function handleAddClick(itemId) {
    totalPrice += menuArray[itemId].price
    renderOrder(getOrderHtml(itemId))
    renderTotalPrice()
    document.querySelector('footer').classList.remove('hidden')
}

function renderOrder(newOrderHtml) {
    document.querySelector('.order-list').innerHTML += newOrderHtml
}

function getOrderHtml(itemId) {
    let orderHtml = ``
    orderHtml += `
        <div class="order-details">
            <h3>${menuArray[itemId].name}</h3>
            <span class="order-remove">remove</span>
            <span class="price">$${menuArray[itemId].price}</span>
        </div>
    `
    return orderHtml
}

function renderTotalPrice() {
    document.querySelector('.total-price').innerHTML = getTotalPriceHtml()
}

function getTotalPriceHtml() {
    let totalPriceHtml = ``
    totalPriceHtml += `
        <h2>Total Price:</h2>
        <span class="price">$${totalPrice}</span>
    `
    return totalPriceHtml
}

// Checkout Payment Modal state
function handlePaymentModal() {
    document.querySelector('.modal').classList.remove('hidden')
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault()
        document.querySelector('.modal').classList.add('hidden')
        document.querySelector('footer').classList.add('hidden')
        document.querySelector('.thank-you-message').classList.remove('hidden')
    })
}
