<template>
  <section class="wholeHome">
    <div class="homeRecentRecord">
      <p>直近の記録エリア</p>
      <p>一目で結果を確認できるグラフ</p>
    </div>
    <div class="homeRelationDisplay"  :class="{'isActive': isActive, 'isInactive': !isActive}" >
      <p class="toggleDetail" :class="{'isActive': !isActive, 'isInactive': isActive}" @click="toggleDetail">詳細を見る</p>
      <p class="toggleDetail" :class="{'isActive': isActive, 'isInactive': !isActive}" @click="toggleDetail">閉じる</p>
      <p>マッスルデータとスコアデータとの関連分析結果表示エリア
      </p>
    </div>
    <div class="addData">
      <NuxtLink to="../scoreInput" class="addDataPlus">+</NuxtLink>
    </div>
  </section>

</template>

<script setup lang="ts">

const isActive = ref(false);
const toggleDetail = () => {
  isActive.value = !isActive.value;   
};
</script>

<style scoped>

.wholeHome {
  margin: -8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FAFAFA;
}

.homeRecentRecord {
  width: 350px;
  height: 200px;
  margin-top: 92px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.10);
}

.homeRelationDisplay.isInactive {
  width: 100%;
  height: 390px;
  margin-top: 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.10);
}

.homeRelationDisplay.isActive {
  width: 100%;
  height: 800px;
  margin-top: 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.10);
}

.toggleDetail.isActive{
  color: #DF0000;
  font-size: 14px;
  position: absolute;
  top: 32px;
  right: 16px;
}

.toggleDetail.isInactive{
  display: none;
}

.addData {
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

.addDataPlus {
  text-decoration: none;
  color: #DF0000;
  font-size: 64px;
  line-height: 100%;
}
</style>