<template>
  <div class="popover popover-cart">
    <button class="popover-close-button button button-light">
      2
      <span class="visually-hidden">Закрыть</span>
    </button>
    <div class="popover-content">
      <h2 class="popover-title">Корзина</h2>
      <ul class="cart-items-list">
        <li class="cart-item">
          <p class="cart-item-title">Стрижка машинкой</p>
          <p class="cart-item-price">800 ₽</p>
          <button type="button" class="cart-item-button button">
            <svg
              width="16"
              height="16"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.42 1l.283-.496L3.991 0H12.01l.288.504.283.496h3.049l-.136 1.12-1.577 13-.107.88H2.191l-.107-.88-1.577-13L.371 1H3.42zm.543 13L2.629 3H13.37l-1.334 11H3.963zm5.04-9.071l-.5 7 1.995.142.5-7-1.995-.142zm-3.5 7.142l-.5-7 1.994-.142.5 7-1.994.142z"
              />
            </svg>
            <span class="visually-hidden">Удалить из корзины</span>
          </button>
        </li>
        <li class="cart-item">
          <p class="cart-item-title">Стрижка усов</p>
          <p class="cart-item-price">1200 ₽</p>
          <button class="cart-item-button button" type="button">
            <svg
              width="16"
              height="16"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.42 1l.283-.496L3.991 0H12.01l.288.504.283.496h3.049l-.136 1.12-1.577 13-.107.88H2.191l-.107-.88-1.577-13L.371 1H3.42zm.543 13L2.629 3H13.37l-1.334 11H3.963zm5.04-9.071l-.5 7 1.995.142.5-7-1.995-.142zm-3.5 7.142l-.5-7 1.994-.142.5 7-1.994.142z"
              />
            </svg>
            <span class="visually-hidden">Удалить из корзины</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.popover {
  position: absolute;
  top: 100;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 300px;
  padding: 40px;
  font-family: 'PT Sans Narrow', sans-serif;
  color: #242424;
  background-color: #ffffff;
  min-height: 186px;
  box-shadow: 0 18px 40px rgba(79, 70, 60, 0.16);
  // display: none; // Теперь мы можем добавлять или удалять класс для отображения и скрытия блока с корзиной.
}

.popover-open {
  display: block;
}

.popover-close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 70px;
}
.popover-cart {
  width: 420px;
}
.popover-cart .popover-close-button {
  padding-left: 44px;
  background-image: url('../assets/svg/shopping_cart.svg');
  background-repeat: no-repeat;
  background-position: 22px center;
}

.popover-content {
  height: 100%;
}

.popover-title {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 35px;
  color: #000000;
  text-transform: uppercase;
}
.cart-items-list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.cart-item {
  display: grid;
  grid-template-columns: 284px 56px;
}
.cart-item + .cart-item {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px dashed #595959;
}
.cart-item-title {
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #242424;
  text-transform: uppercase;
}

.cart-item-price {
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #af7842;
}
.cart-item .button {
  grid-row: 1 / 3;
  grid-column: 2 / 4;
}
</style>
