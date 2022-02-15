<template lang="pug">
.guard 
  Tabs
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Tabs from './components/Tabs.vue';

@Options({
  components: {
    Tabs,
  },
})
export default class GlobalGuard extends Vue {}
</script>

<style lang="less" scoped></style>
