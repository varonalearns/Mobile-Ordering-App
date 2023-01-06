import { menuArray } from '/data.js'

function render() {
    document.querySelector('main').innerHTML = getFeedHtml()
}

function getFeedHtml() {
    let feedHtml = ``

    menuArray.forEach(function(item) {
        feedHtml +=
            `<section class="item">
                <div class="item-emoji">${item.emoji}</div>
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p class="item-ingredients">${item.ingredients}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <button class="add-btn">+</button>
            </section>`
    })

    return feedHtml
}

render()