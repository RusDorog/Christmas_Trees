 const buttonOrder = document.querySelectorAll('.product__button-order');
 const overlayOrder = document.querySelector('.overlay_order');
 const order = overlayOrder.querySelector('.modal__order');

 buttonOrder.forEach((buttonOrder) => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_activ');
        order.value = buttonOrder.dataset.order;
    })
 });

 overlayOrder.addEventListener('click', event => {
    const target = event.target;
    console.log(target);

    if (target === overlayOrder || target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay_active');
    }
    
 })