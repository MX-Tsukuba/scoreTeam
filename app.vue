<template>
  <NuxtLayout>
    <NuxtPage class="whole"/>
  </NuxtLayout>
</template>

<style>
p, ul, li, a{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  cursor: pointer;
}
button{
  all: unset;
  cursor: pointer;
}
.whole{
  margin: -8px;
  padding: 80px 0;
}
.circleBtn {
  width: 64px;
  height: 64px;
  text-align: center;
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.10);
  position: fixed;
  right: 8px;
  bottom: 104px;
}

.circleBtnContent {
  text-decoration: none;
  color: #DF0000;
  font-size: 64px;
  line-height: 100%;
}
</style>
