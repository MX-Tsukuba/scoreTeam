<!-- 以前のコードほぼそのままなので上手く調節してください -->
<template>
  <EnterGolfCourseName />
  <section class="scoreInputWhole">
    <div class="SIshowHole">
      <div class="SISHtop">
        <p class="SIhole">10H</p>
        <p class="SIpar">par5</p>
      </div>
      <hr class="SISHborder"/>
    </div>
    <div class="SIsearchHole" >
    <ul v-for="i in 18">
      <li class="SIbox">{{ i }}H</li>
    </ul>
      <p class="SIleftButton" @click="moveLeft"> < </p>
      <p class="SIrightButton" @click="moveRight"> > </p>
    </div>
    <div class="SIchooseNum">
      <div class="SIdata">
        <div>
        <p class="scoreScore">スコア</p>
        <div>
          <input type="number" class="SInum" v-model="playdata.score">
          <img>
        </div>
      </div>
      <div>
        <p class="scoreScore">パット数</p>
        <div>
          <input type="number"  class="SInum" v-model="playdata.putts">
          <img>
        </div>
      </div>
      </div>
      
      <div class="SInumberPlate">
        <div class="SInumbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div class="SInumbers">
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </div>
        <div class="SInumbers">
          <p>7</p>
          <p>8</p>
          <p>9</p>
        </div>
        <p class="SInumbers">0</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EnterGolfCourseName from './enterGolfCourseName.vue';
import { type Database } from '~/types/database.types';
const supabase = useSupabaseClient<Database>();

//データ読み込み
const { data: m_golfPlaces } = await useAsyncData(async () => {
  const { data } = await supabase.from('m_golfPlaces').select('*');
  return data;
});

const playdata = reactive({
  putts: 0,
  course: '',
  score: 0,
  hole: 0,
});

//データ挿入
const addPlayData = async () => {
  const { error } = await supabase.from('m_golfPlaces').insert(playdata);
  if (error) {
    alert(error.message);
  } else {
    return true;
  }
};

const moveLeft = ()=>{  
};

const moveRight = ()=>{  
};
</script>

<style scoped>
.scoreInputWhole{
  margin: -8px;
  padding: 32px 0 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: #FAFAFA;
}
.SIshowHole{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
gap: 2px;
}
.SISHtop{
  display: flex;
padding-left: 114px;
justify-content: flex-end;
align-items: flex-end;
gap: 70px;
align-self: stretch;
}
.SIhole{
  font-size: 32px;
}
.SIpar{
  font-size: 24px;
}
.SISHborder{
  width: 300px;
height: 8px;
border-radius: 8px;
border: 2px solid #777;
background: #FFF;
box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
}
.SIsearchHole{
  display: flex;
  position: relative;
width: 390px;
justify-content: center;
align-items: flex-end;
gap: 10px;
  overflow: hidden;
}
.SIbox{
  width: 88px;
  height: 56px;
  display: flex;
justify-content: center;
align-items: center;
border: 1px solid #000;
background: #FFF;
box-shadow: 2px 2px 16px 0px rgba(0, 0, 0, 0.25);
}
.SIleftButton{
  width: 48px;
height: 48px;
font-size: 32px;
text-align: center;
vertical-align: middle;
border: 1px solid black;
border-radius: 24px;
position: absolute;
left: 16px;
bottom: 0px;
box-shadow: 2px 2px 16px 0px rgba(0, 0, 0, 0.25);
}
.SIrightButton{
  width: 48px;
height: 48px;
font-size: 32px;
text-align: center;
vertical-align: middle;
border: 1px solid black;
border-radius: 24px;
position: absolute;
right: 16px;
bottom: 0px;
box-shadow: 2px 2px 16px 0px rgba(0, 0, 0, 0.25);
}
.SIchooseNum{
  display: flex;
width: 389px;
padding: 36px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 64px;
flex-wrap: wrap;
border-radius: 16px;
background: #FFF;
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.10);
}
.SInum{
  display: flex;
width: 100px;
height: 40px;
padding: 0px 6px;
justify-content: flex-end;
align-items: center;
gap: 23px;
border-radius: 8px;
border: 1px solid #000;
background: rgba(51, 51, 51, 0.03);
}
.SIdata{
  display: flex;
justify-content: center;
align-items: center;
gap: 64px;
}
.scoreScore{
  text-align: center; 
}
.SInumberPlate{
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 64px;
padding: 64px;
border-radius: 8px;
background: rgba(51, 51, 51, 0.03);
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
}
.SInumbers{
  display: flex;
  flex-direction: row;
  gap: 64px;
  margin: 0 auto;
  }
</style>