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

<style lang="scss" scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.slider-button {
  width: 48px;
  height: 60px;
  color: #ffffff;
  background-color: #000;
  border: none;
  cursor: pointer;
  background-image: url('https://super.so/icon/light/arrow-left.svg');
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    background-color: #814b18;
  }

  &:focus {
    outline: 2px solid #dbb590;
    background-color: #4e2e0e;
  }
}

.slider-prev {
  transform: rotate(180deg);
}

.slider-pagination {
  display: flex;
  flex-wrap: wrap; // защита от переполнения - типа 30 слайдов
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.slider-pagination-item {
  margin: 0 4px;
}

.slider-pagination-button {
  width: 8px;
  height: 8px;
  margin: 0;
  padding: 0;
  background-color: #dbdbdb;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #af7842;
  }

  &:focus {
    background-color: #dbb590;
    outline: none;
  }

  &-current {
    background-color: #242424;
  }
}

.slider {
  margin: 0 auto;
  width: 300px;
}

.slider-image {
  display: block;
}

.slider-wrapper {
  position: relative;
}

.slider-controls {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-50%);
}
</style>
