let shopButtons = document.querySelectorAll('.shop_item-add');

const shopCartContainer = document.getElementById('shop_cart-content');
const shopItemsContainer = document.getElementById('shop_items-wrap');
const buyButton = document.getElementById('shop_cart-buy');
const balanceContainer = document.getElementById('shop_cart-balance');

let cooldown = false;

shopButtons.forEach(shopButton => {
    shopButton.addEventListener("click", moveItems);
});

if (buyButton) {
    buyButton.addEventListener("click", notifyBought);
}

function moveItems() {
    let button = this;
    let shopItem = this.parentNode;

    if (shopItem.parentNode == shopItemsContainer) { addToCart(shopItem, button); }
    else if (shopItem.parentNode == shopCartContainer) { removeFromCart(shopItem, button); }
    else { console.warn("shop broken") }
}

function addToCart(item, button) {
    if (cooldown) { return; }

        cooldown = true;
        item.style.transform = "scale(1.2)";   
        window.setTimeout(function() {
            item.style.transform = "scale(0)";
        }, 100);
    
        window.setTimeout(function() {
            changeContainerHeight(item);
            shopCartContainer.appendChild(item); 
            button.innerHTML = "- entfernen";
            item.classList.add('in_cart');
            checkRemainingItems();
            updateBalance();
        }, 350);
    
        window.setTimeout(function() {
            item.style.transform = "scale(1.2)";
            item.style.opacity = "1";
        }, 450);
    
        console.log(cooldown);
    
        window.setTimeout(function() {
            window.setTimeout(function() {item.style.transform = "scale(1)";}, 100);
            cooldown = false;
        }, 550);
}

function removeFromCart(item, button) {
    if (cooldown) { return; }

    cooldown = true;
    item.style.transform = "scale(1.2)";
    
    window.setTimeout(function() {
        item.style.transform = "scale(0)";
    }, 100);

    window.setTimeout(function() {
        changeContainerHeight(item);
        shopItemsContainer.appendChild(item); 
        button.innerHTML = "+ hinzufügen";
        item.classList.remove('in_cart');
        checkRemainingItems();
        updateBalance();
    }, 350);

    window.setTimeout(function() {
        item.style.transform = "scale(1.2)";
        item.style.opacity = "1";
    }, 450);

    window.setTimeout(function() {
        window.setTimeout(function() {item.style.transform = "scale(1)";}, 100);
        cooldown = false;
    }, 550);
}

function checkRemainingItems() {
    console.log("checked");

    if(shopItemsContainer.childElementCount > 3 && shopItemsContainer.childElementCount < 10 ) { 
        shopItemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

        for (let i = 0; i < shopItemsContainer.childElementCount; i++) {
            shopItemsContainer.children[i].style.height = "auto";
        }
    }

    else if(shopItemsContainer.childElementCount == 3 ) { 
        shopItemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr";

        for (let i = 0; i < shopItemsContainer.childElementCount; i++) {
            shopItemsContainer.children[i].style.height = "fit-content";
        }
    }

    else if(shopItemsContainer.childElementCount < 3 ) {
        shopItemsContainer.style.gridTemplateColumns = "1fr 1fr";

        for (let i = 0; i < shopItemsContainer.childElementCount; i++) {
            shopItemsContainer.children[i].style.height = "fit-content";
        }
    }
}

function changeContainerHeight(item) {
    let gap = 16;
    let currentHeight = shopCartContainer.parentNode.offsetHeight;


    if(item.parentNode == shopCartContainer) {
        if (shopCartContainer.childElementCount % 2 == 1 && shopCartContainer.childElementCount > 1) {
            shopCartContainer.parentNode.style.height = currentHeight - item.offsetHeight - gap + "px";
        }
    } else {
        if (shopCartContainer.childElementCount % 2 == 0 && shopCartContainer.childElementCount > 1) {
            shopCartContainer.parentNode.style.height = currentHeight + item.offsetHeight + gap + "px";
        }
    }
}

function notifyBought() {
    let items = "";

    for (let i = 0; i < shopCartContainer.childElementCount; i++) {
        items = items + " " + shopCartContainer.children[i].firstElementChild.nextElementSibling.innerHTML + ","; 
    }
    
    alert("Sie haben " + shopCartContainer.childElementCount + " Gegenstände gekauft.\n" + "Folgende Gegenstände wurden bestellt: " + items);
}

function updateBalance() {
    let balance = 0;
    // Funktioniert auch, ist aber wahrscheinlich langsamer.
    //
    // let items = document.querySelectorAll('.shop_item-price');
    // items.forEach(item => {
    //     if(item.parentElement.parentElement.parentElement == shopCartContainer) {
    //         console.log(item.innerHTML);
    //     }
    // });
    

    for (let i = 0; i < shopCartContainer.childElementCount; i++) {
        let itemPriceString = shopCartContainer.children[i].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
        let itemPrice = parseFloat(itemPriceString); 
        balance += itemPrice;
    }

    balanceContainer.innerHTML = balance.toFixed(2);
}