<!-- 以前のコードほぼそのままなので上手く調節してください -->
<template>
  <EnterGolfCourseName/>
    <div>
      <h3>Input</h3>
      <form @submit="addPlayData">
        Hole: <input type="number" v-model="playdata.hole">,
        Score: <input type="number" v-model="playdata.score">,
        Putts: <input type="number" v-model="playdata.putts">,
        <button type="submit">Add play data</button>
      </form>
    </div>
</template>

<script setup lang="ts">
import EnterGolfCourseName from './enterGolfCourseName.vue';
import {type Database} from '~/types/database.types';
const supabase = useSupabaseClient<Database>();

//データ読み込み
const {data: t_sample_kazuki} = await useAsyncData(async ()=>{
  const {data} = await supabase.from('t_sample_kazuki').select('*');
  return data;
});

const playdata = reactive({
    putts: 0,
    course: '',
    score: 0,
    hole: 0,
});

//データ挿入
const addPlayData = async() => {
  const { error } = await supabase.from('t_sample_kazuki').insert(playdata);
  if(error){
    alert(error.message);
  }else{
    return true;
  }
};
</script>