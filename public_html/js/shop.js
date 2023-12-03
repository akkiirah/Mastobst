let shopButtons = document.querySelectorAll('.shop_item-add');

const shopCartContainer = document.getElementById('shop_cart-content');
const shopItemsContainer = document.getElementById('shop_items-wrap');
const buyButton = document.getElementById('shop_cart-buy');
const balanceContainer = document.getElementById('shop_cart-balance');

let notificationItemsText = document.getElementById('notification_container-text')
let notificationItemsContainer = document.getElementById('notification_container-items');
let notificationPriceContainer = document.getElementById('notification_container-price');
const notificationBackground = document.getElementById('notification_container-background');
const notificationClose = document.getElementById('notification_container-close');

let cooldown = false;
let balance = 0;

shopButtons.forEach(shopButton => {
    shopButton.addEventListener("click", moveItems);
});

if (buyButton) {
    buyButton.addEventListener("click", notifyBought);
}

if (notificationClose) {
    notificationClose.addEventListener("click", closeNotificationContainer);
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
    
        window.setTimeout(function() { item.style.transform = "scale(1.2)"; }, 450);
    
        window.setTimeout(function() {
            item.style.transform = "scale(1)";
            cooldown = false;
        }, 650);
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

    window.setTimeout(function() { item.style.transform = "scale(1.2)"; }, 450);

    window.setTimeout(function() {
        item.style.transform = "scale(1)";
        cooldown = false;
    }, 650);
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
    let scrollbar = 12;
    let currentHeight = shopCartContainer.parentNode.offsetHeight;
    if(document.body.clientWidth >= (1024-scrollbar) && document.body.clientWidth <= (1279-scrollbar) || document.body.clientWidth >= 0 && document.body.clientWidth <= (479-scrollbar)) {
        if(item.parentNode == shopCartContainer) {
            if (shopCartContainer.childElementCount >= 2) { 
                shopCartContainer.parentNode.style.height = currentHeight - item.offsetHeight - gap + "px";
            }
        } else {
            if (shopCartContainer.childElementCount % 1 == 0 && shopCartContainer.childElementCount >= 1) {
                shopCartContainer.parentNode.style.height = currentHeight + item.offsetHeight + gap + "px";
            }
        }
    }
    else {
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
}

function notifyBought() {
    notificationBackground.style.display = 'block';
    notificationBackground.style.opacity = '1';

    window.setTimeout(function() {
        notificationBackground.style.backdropFilter  = 'blur(.5em)';
    }, 100);

    window.setTimeout(function() {
        notificationClose.style.transform  = 'scale(1) translate(50%, -50%)';
    }, 2000);


    window.setTimeout(function() {
        notificationPriceContainer.style.transform  = 'scale(2)';
    }, 100);

    window.setTimeout(function() {
        notificationPriceContainer.style.transform  = 'scale(.7)';
    }, 400);

    window.setTimeout(function() {
        notificationPriceContainer.style.transform  = 'scale(1.5)';
    }, 600);

    window.setTimeout(function() {
        notificationPriceContainer.style.transform  = 'scale(1)';
    }, 700);

    window.setTimeout(function() {
        notificationPriceContainer.style.borderBottom = '1px solid #8C271E';
    }, 1000);

    console.log(shopCartContainer.childElementCount);
    if(shopCartContainer.childElementCount <= 0) { 
        notificationItemsText.innerHTML = "Es sind keine Gegenstände im Warenkorb."
        notificationPriceContainer.innerHTML = "0.00€";
        return;
    }
    else { notificationItemsText.innerHTML = "Sie haben folgende Gegenstände gekauft:" }

    notificationPriceContainer.innerHTML = balance + "€";
    for (let i = 0; i < shopCartContainer.childElementCount; i++) {

        window.setTimeout(function() {
            notificationItemsContainer.innerText += "ー " + shopCartContainer.children[i].firstElementChild.nextElementSibling.innerHTML + "\n"; 
        }, 500 * (i+1));
    }


}

function updateBalance() {
    balance = 0;
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
    balance = balance.toFixed(2);
}

function closeNotificationContainer() {
    notificationBackground.style.backdropFilter  = 'blur(0)';
    notificationBackground.style.opacity = '0';

    window.setTimeout(function() {
        notificationClose.style.transform  = 'scale(0) translate(50%, -50%)';
    }, 100);

    window.setTimeout(function() {
        notificationBackground.style.display = 'none';
        notificationItemsContainer.innerText = '';
        notificationPriceContainer.style.borderBottom = '1px solid transparent';
    }, 750);
}