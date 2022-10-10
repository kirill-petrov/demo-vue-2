<template>
  <section>
    <main></main>
    <footer></footer>
    <!-- модальные окна обычно создают после футера (до </body>) -->
    <!-- <div class="modal-container modal-container-close"> -->
    <div class="modal-container">
      <div class="modal modal-auth">
        <button class="modal-close-button">
          <span class="visually-hidden">Закрыть</span>
        </button>
        <section class="modal-content">
          <h2 class="modal-title">Личный кабинет</h2>

          <form
            class="auth-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
          >
            <p class="field-group">
              <label class="visually-hidden" for="auth-login">Логин</label>
              <input
                class="auth-form-field field"
                type="text"
                id="auth-login"
                name="auth-login"
                placeholder="Логин"
              />
            </p>
            <p class="field-group">
              <label class="visually-hidden" for="auth-password">Пароль</label>
              <input
                class="auth-form-field field"
                type="password"
                id="auth-password"
                name="auth-password"
                placeholder="Пароль"
              />
            </p>

            <p class="field-group auth-form-user-options">
              <label class="auth-form-checkbox control">
                <input
                  class="visually-hidden control-input"
                  type="checkbox"
                  name="firm-storе"
                />
                <span class="control-mark"></span>
                <span class="control-label">Запомнить меня</span>
              </label>
              <a class="auth-form-recovery" href="#">Забыл пароль</a>
            </p>
            <button class="button auth-form-button" type="submit">Войти</button>
            <a class="button auth-form-register" href="#">Регистрация</a>
          </form>
        </section>
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
