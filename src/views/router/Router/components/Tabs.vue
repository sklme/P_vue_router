<template>
  <div class="tabs">
    <t-head-menu v-model="menu1Value" theme="light" @change="changeHandler">
      <template #logo>
        <img
          width="136"
          src="https://www.tencent.com/img/index/menu_logo_hover.png"
          alt="logo"
        />
      </template>
      <t-menu-item value="item1"> 菜单1 </t-menu-item>
      <t-menu-item value="item2"> 菜单2 </t-menu-item>
      <t-menu-item value="item4" :disabled="true"> 禁用菜单 </t-menu-item>
      <template #operations>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="search"
        /></a>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="mail"
        /></a>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="user"
        /></a>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="ellipsis"
        /></a>
      </template>
    </t-head-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Tabs extends Vue {}
</script>

<style lang="less"></style>
