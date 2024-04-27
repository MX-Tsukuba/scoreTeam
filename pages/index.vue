<script setup lang="ts">
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

<template>
  <div>
    <h1>MX-App</h1>

    <div>
      <p>enter golf course info.
        <input type="text" placeholder="course" v-model="playdata.course">
      </p>      
    </div>    

    <h2>{{ playdata.course }} course's Scores</h2>
    <ul v-if = "t_sample_kazuki && t_sample_kazuki.length">
      <li v-for = "sample in t_sample_kazuki" :key="sample.id">
        hole: {{ sample.hole||"no data" }}, score: {{ sample.score }}, putts: {{ sample.putts }}
        <button @click="deletePlayData(sample.id)">x</button> 
      </li>    
    </ul>
    <p v-else>Loading..</p>

    <form @submit="addPlayData">
      <input type="hole" placeholder="hole" v-model="playdata.hole">
      <input type="number" placeholder="Score" v-model="playdata.score">
      <input type="number" placeholder="Putts" v-model="playdata.putts">
      <button type="submit">Add play data</button>
    </form>
  </div>
</template>