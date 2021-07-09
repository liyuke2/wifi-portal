<template>
    <router-view v-slot="{ Component , route}" class="view">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style scoped>
.view{
    width: 100%;
    height: 100%;
}
</style>