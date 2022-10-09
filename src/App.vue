<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/cars">Cars</router-link> |
      <router-link to="/vmail">Vmail</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <!-- <router-link to="/forms">Forms</router-link> -->
      <router-link to="/reactionTimer">Game</router-link> |
      <!-- css-practicks -->
      <router-link to="/css/slider">Slider</router-link> |
      <router-link to="/css/popover">popover</router-link> |
      <router-link to="/css/modal">modal</router-link> |
      <router-link to="/css/tooltip">tooltip</router-link> |
      <router-link to="/css/forms">forms</router-link>
    </nav>
    <router-view />
  </div>
</template>
