<template>
  <div>
    <!-- Форма записи -->
    <section class="appointment">
      <h2 class="appointment-title">Записаться</h2>
      <p class="appointment-info">
        Укажите желаемую дату и время и мы свяжемся с вами для подтверждения
        брони.
      </p>
      <form
        class="appointment-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
      >
        <p class="field-group appointment-form-date">
          <span class="form-label form-label-icon">
            <label class="form-label" for="appointment-date"> Дата</label>
            <span class="tooltip">
              <button class="tooltip-toggle" type="button">
                <svg
                  class="tooltip-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path
                    d="M8 14A6 6 0 108 2a6 6 0 000 12zm1.27-8.73a1.27 1.27 0 11-2.54 0 1.27 1.27 0 012.54 0zm0 2.23V11H6.73V7.5h2.54z"
                  />
                </svg>
              </button>
              <span class="tooltip-text" role="tooltip" id="tooltip-label">
                Укажите желаемую дату и время и мы свяжемся с вами для
                подтверждения брони
              </span>
            </span>
          </span>
          <input
            class="field"
            type="text"
            id="appointment-date"
            name="appointment-date"
            placeholder="01.01.2020"
          />
        </p>
        <p class="field-group appointment-form-time">
          <label class="form-label" for="appointment-time"> Время</label>
          <input
            class="field"
            type="text"
            id="appointment-time"
            name="appointment-time"
            placeholder="10:00"
          />
        </p>
        <p class="field-group appointment-form-phone">
          <label class="form-label" for="appointment-phone"> Телефон </label>
          <input
            class="field"
            type="text"
            id="appointment-phone"
            name="appointment-phone"
            placeholder="+7 800 000-00-00"
          />
        </p>
        <p class="field-group appointment-form-name">
          <label class="form-label" for="appointment-name"> Ваше имя </label>
          <input
            class="field"
            type="text"
            id="appointment-name"
            name="appointment-name"
          />
        </p>
        <button class="button appointment-submit" type="submit">
          Записаться
        </button>
      </form>
    </section>

    <form
      class="catalog-filter"
      action="https://echo.htmlacademy.ru/"
      method="get"
    >
      <fieldset class="catalog-filter-group">
        <legend class="catalog-filter-title">Цена:</legend>

        <div class="range">
          <div class="range-scale">
            <div class="range-bar" style="left: 42px; width: 136px">
              <button class="range-toggle toggle-min">
                <span class="visually-hidden">Изменить минимальную цену.</span>
              </button>
              <button class="range-toggle toggle-max">
                <span class="visually-hidden">Изменить максимальную цену.</span>
              </button>
            </div>
          </div>

          <div class="range-wrapper-inputs">
            <label class="catalog-filter-label">
              от
              <input
                class="range-input"
                type="number"
                value="50"
                name="min-price"
              />
              ₽
            </label>
            <label class="catalog-filter-label">
              до
              <input
                class="range-input"
                type="number"
                value="1500"
                name="max-price"
                style="width: 37px"
              />
              ₽
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset class="catalog-filter-group">
        <legend class="catalog-filter-title">Производители</legend>
        <ul class="catalog-filter-list">
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="checkbox"
                name="bed-head-for-men"
                checked
              />
              <span class="control-mark"></span>
              <span class="control-label">Bed Head for Men</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="checkbox"
                name="homme-deep-cleansing-cool"
              />
              <span class="control-mark"></span>
              <span class="control-label">Homme Deep Cleansing Cool</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="checkbox"
                name="so-intense"
              />
              <span class="control-mark"></span>
              <span class="control-label">So Intense</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="checkbox"
                name="sprekenhus"
              />
              <span class="control-mark"></span>
              <span class="control-label">Sprekenhus</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="checkbox"
                name="firm-storе"
              />
              <span class="control-mark"></span>
              <span class="control-label">Firm Storе</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="checkbox"
                name="winter-body"
              />
              <span class="control-mark"></span>
              <span class="control-label">Winter Body</span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="catalog-filter-group">
        <legend class="catalog-filter-title">Группы товаров</legend>
        <ul class="catalog-filter-list">
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="radio"
                name="product-group"
                value="shaving-supplies"
                checked
              />
              <span class="control-mark"></span>
              <span class="control-label">Бритвенные принадлежности</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="radio"
                name="product-group"
                value="care-products"
              />
              <span class="control-mark"></span>
              <span class="control-label">Средства для ухода</span>
            </label>
          </li>
          <li class="catalog-filter-item">
            <label class="control">
              <input
                class="visually-hidden control-input"
                type="radio"
                name="product-group"
                value="accessories"
              />
              <span class="control-mark"></span>
              <span class="control-label">Аксессуары</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <button class="button" type="submit">Показать</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/barbershop.scss';
.appointment {
  margin: 0 auto;
  padding: 30px 60px;
  width: 430px;
  background-color: #faf6f3;
}
/* Title */
.appointment-title {
  margin-top: 0;
  margin-bottom: 28px;
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 32px;
  line-height: 35px;
  font-weight: 700;
  text-transform: uppercase;
}

.appointment-form {
  display: grid;
  grid-template-columns: 114px 74px 208px;
  grid-gap: 19px 17px;
}

.field-group {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.appointment-form-name {
  grid-column: 1 / -1;
}

.appointment-submit {
  grid-column: 1 / -1;
  justify-self: start;
  margin-top: 9px;
}
/* Label */
.form-label {
  margin-bottom: 8px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
}
.form-label-icon {
  position: relative;
  padding-right: 16px;
}

.info {
  position: absolute;
  width: 16px;
  height: 16px;
  margin-top: 4px;
  margin-left: 2px;
  padding: 0;
  background-color: transparent;
  border: none;
  background-image: url('../assets/svg/info-outline.svg');
  background-repeat: no-repeat;
  background-position: center;
}
/* Field */
.field {
  margin: 0;
  padding: 8px 14px;
  font: inherit;
  font-weight: 700;
  background-color: #ffffff;
  border: 2px solid #242424;
}
/* Hover, Focus */
.field:hover,
.field:focus {
  border-color: #af7842;
}

.field:focus {
  outline: 2px solid #dbb590;
}

/* Disabled */
.field:disabled,
.field:disabled:hover {
  color: #595959;
  background-color: #dbb590;
  border-color: #595959;
}

/* Invalid */
.field:invalid {
  box-shadow: none;
}

.field:focus:invalid {
  border-color: #ea5454;
}

/* Placeholder */
.field::placeholder {
  color: #dbdbdb;
  opacity: 1;
}

/* Range */
.range-scale {
  position: relative;
  height: 4px;
  margin-bottom: 16px;
  background-color: #242424;
  border-radius: 2px;
}
.range-bar {
  position: absolute;
  height: 4px;
  background-color: #af7842;
}
.range-toggle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid #242424;
  border-radius: 50%;
  cursor: pointer;
}

.range-toggle:hover {
  background-color: #dbb590;
}

.range-toggle:active,
.range-toggle:focus {
  outline: 3px solid #dbb590;
}
.range-bar {
  position: absolute;
  height: 4px;
  background-color: #af7842;
}

.range-toggle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid #242424;
  border-radius: 50%;
  cursor: pointer;
}

.range-toggle:hover {
  background-color: #dbb590;
}

.range-toggle:active,
.range-toggle:focus {
  outline: 3px solid #dbb590;
}
.toggle-min {
  top: -8px;
  left: -10px;
}

.toggle-max {
  top: -8px;
  right: -10px;
}
.range-wrapper-inputs {
  display: flex;
  justify-content: center;
}

.catalog-filter-label {
  display: flex;
  margin-right: 5px;
}

.range-input {
  width: 30px;
  padding: 0 2px;
  font: inherit;
  text-align: center;
  background-color: transparent;
  border: none;
  appearance: textfield;
}

.range-input::-webkit-outer-spin-button,
.range-input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
/* Group */
.catalog-filter-group {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  border: none;
}
/* Control */
.control {
  position: relative;
  display: block;
  padding-left: 36px;
}

/* Mark */
.control-mark {
  position: absolute;
  top: 2px;
  left: 0;
  width: 16px;
  height: 16px;
  border: 2px solid #242424;
}
.control:hover .control-mark {
  border-color: #814b18;
}

.control-input:disabled + .control-mark {
  border-color: #242424;
}
.control-input[type='checkbox']:checked + .control-mark::before,
.control-input[type='checkbox']:checked + .control-mark::after {
  position: absolute;
  top: 7px;
  left: 2px;
  width: 12px;
  height: 2px;
  background-color: #242424;
  content: '';
}
.control-input[type='checkbox']:checked + .control-mark::before {
  transform: rotate(45deg);
}

.control-input[type='checkbox']:checked + .control-mark::after {
  transform: rotate(-45deg);
}
/* Radio */
.control-input[type='radio'] + .control-mark {
  border-radius: 50%;
}

.control-input[type='radio']:checked + .control-mark::before {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  background-color: #242424;
  border-radius: 50%;
  content: '';
}
.select {
  position: relative;
  display: flex;
  align-items: center;
  width: 260px;
  margin-right: auto;
}

/* Control */
.select-control {
  width: 100%;
  padding: 8px 14px;
  padding-right: 48px;
  font: inherit;
  font-weight: 700;
  background-color: #ffffff;
  border: 2px solid #242424;
  background-image: url('../assets/svg/arrow-right.svg');
  background-repeat: no-repeat;
  background-position: right 16px center;
  appearance: none;
}

.select-control:hover,
.select-control:focus {
  border-color: #af7842;
}

.select-control:focus {
  outline: 2px solid #dbb590;
}
.card-grid-toggle-current:hover svg {
  fill: #ffffff;
}
/* tooltip */
.tooltip {
  position: absolute;
  margin-top: 4px;
  margin-left: 2px;
  width: 16px;
  height: 16px;
}
.tooltip-toggle {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: block;
}
.tooltip-icon {
  width: 100%;
  height: 100%;
  color: #242424;
  display: block;
}

.tooltip-toggle:hover .tooltip-icon {
  color: #af7842;
}
.tooltip-text {
  background-color: #242424;
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  text-transform: none;
  padding: 5px 8px;
  border-radius: 8px;
  display: block;
  width: 160px;
  position: absolute;
  bottom: 100%;
  margin-bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: none;
}
.tooltip-toggle:hover + .tooltip-text,
.tooltip-toggle:focus + .tooltip-text {
  display: block;
}
/* Label */
.form-label {
  margin-bottom: 8px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.form-label-icon {
  position: relative;
  padding-right: 16px;
}
</style>
