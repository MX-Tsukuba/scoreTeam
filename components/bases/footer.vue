<template>
  <div class="footer">
    muscleLink
    <NuxtLink to="/scoreDisplay">Score</NuxtLink>
    <NuxtLink to="/top">Top</NuxtLink>
  </div>
</template>

<style scoped>
.footer{
  display: flex;
width: 100%;
height: 90px;
justify-content: center;
align-items: center;
gap: 96px;
flex-shrink: 0;
background: #FFF;
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
position: fixed;
bottom: 0;
left: 0;
}
</style>