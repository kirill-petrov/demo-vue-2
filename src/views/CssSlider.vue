<template>
  <section class="gallery">
    <h2 class="gallery-title">Фотогалерея</h2>

    <div class="slider">
      <div class="slider-wrapper">
        <img
          class="slider-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1920px-CSS3_logo.svg.png"
          width="300"
          alt="Примеры работ"
        />

        <div class="slider-controls">
          <button class="slider-button slider-next" type="button">
            <span class="visually-hidden">Предыдущее фото</span>
          </button>
          <button class="slider-button slider-prev" type="button">
            <span class="visually-hidden">Следующее фото</span>
          </button>
        </div>

        <ol class="slider-pagination">
          <li class="slider-pagination-item">
            <button
              class="slider-pagination-button slider-pagination-button-current"
              type="button"
            >
              <span class="visually-hidden">1 фото</span>
            </button>
          </li>
          <li class="slider-pagination-item">
            <button class="slider-pagination-button" type="button">
              <span class="visually-hidden">2 фото</span>
            </button>
          </li>
          <li class="slider-pagination-item">
            <button class="slider-pagination-button" type="button">
              <span class="visually-hidden">3 фото</span>
            </button>
          </li>
          <li class="slider-pagination-item">
            <button class="slider-pagination-button" type="button">
              <span class="visually-hidden">4 фото</span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '@/assets/barbershop.scss';
</style>
