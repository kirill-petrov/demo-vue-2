<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/cars">Cars</router-link> |
      <router-link to="/vmail">Vmail</router-link> |
      <router-link to="/forms">Forms</router-link>
    </nav>
    <router-view />
  </div>
</template>
