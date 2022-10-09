<template>
  <div>
    <pre>GlobalVComponent</pre>
    <div class="about">
      <div class="about__body">
        <div class="about__header">
          <div class="about__title title">ABOUT</div>
          <div class="about__text">
            We specialize in contemporary, functional, and stunning websites
            with design that really brings that "WOW" factor. In our design
            process, we make sure to stay one step ahead of the latest trends,
            never forgetting to abide by key web standards.
          </div>
        </div>
        <div class="about__row">
          <div class="about__column">
            <div class="item-about">
              <div class="item-about__icon">
                <img src="img/about/01.png" alt="" />
              </div>
              <div class="item-about__title">WEB</div>
              <div class="item-about__text">
                We tend to deliver unique and functional design, through
                innovation and creativity.
              </div>
            </div>
          </div>
          <div class="about__column">
            <div class="item-about">
              <div class="item-about__icon">
                <img src="img/about/02.png" alt="" />
              </div>
              <div class="item-about__title">iOS AND ANDROID</div>
              <div class="item-about__text">
                We seek to bring new businesses and customers closer together
                through valuable insights and proper targeting.
              </div>
            </div>
          </div>
          <div class="about__column">
            <div class="item-about">
              <div class="item-about__icon">
                <img src="img/about/03.png" alt="" />
              </div>
              <div class="item-about__title">MARKETING</div>
              <div class="item-about__text">
                We’ll help you establish the right goals and build the right
                paths. Success depends on setting the right intention.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalVComponent',
};
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.page {
  width: 768px;
  margin: 0 auto;

  .page__content {
    color: $color-vue;
  }
}
</style>
