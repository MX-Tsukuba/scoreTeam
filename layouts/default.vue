<template>
    <Header/>
    <div>
        <slot/>
    </div>
    <Footer/>
</template>

<script setup lang="ts">
import Header from '~/components/bases/header.vue';
import Footer from '~/components/bases/footer.vue';
</script>