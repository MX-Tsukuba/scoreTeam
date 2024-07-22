<template>
  <section class="wholeScoreDisplay">
  <div class="logScoreDisplay">
    <p>ログ</p>
    <div class="showScoreDisplay">
      <p class="GolfCourseNameScoreDisplay">筑波大ゴルフ場</p>
    <p class="toggleDetail" :class="{'isActive': !isActive, 'isInactive': isActive}" @click="toggleDetail">詳細を見る</p>    
    <p class="toggleDetail" :class="{'isActive': isActive, 'isInactive': !isActive}" @click="toggleDetail">閉じる</p>
    <ul v-if = "t_sample_kazuki && t_sample_kazuki.length">
      <li v-for = "sample in t_sample_kazuki" :key="sample.id">
        <p>H{{ sample.hole || "-" }}, par</p>
        <div>
          score: {{ sample.score }}, putts: {{ sample.putts }}
          <button @click="deletePlayData(sample.id)">x</button>
        </div> 
      </li>    
    </ul>
    <p v-else>Loading..</p>
    </div>    
  </div>
  </section>  
</template>

<script setup lang="ts">
import {type Database} from '~/types/database.types';
const supabase = useSupabaseClient<Database>();

//切り替え
const isActive = ref(false);
const toggleDetail = () => {
  isActive.value = !isActive.value;   
};

//データ読み込み
const {data: t_sample_kazuki} = await useAsyncData(async ()=>{
  const {data} = await supabase.from('t_sample_kazuki').select('*');
  return data;
});

//データ削除
const deletePlayData = async(tableId: number)=> {
  const { error } = await supabase.from('t_sample_kazuki').delete().match({id: tableId});
  if(error){
    alert(error.message);
  }else if(confirm("Delete this data.")){
    location.reload();
    return true;
  }
};
</script>

<style scoped>
.wholeScoreDisplay {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FAFAFA;
}

.logScoreDisplay {
  margin-top: 40px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.10);
}

.showScoreDisplay{
  display: flex;
width: 390px;
flex-direction: column;
align-items: center;
gap: 16px;
position: relative;
}

.GolfCourseNameScoreDisplay{
  padding: 2px 8px;
margin: 0 auto 0 40px;
  border-radius: 16px;
border: 1px solid #000;
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
</style>