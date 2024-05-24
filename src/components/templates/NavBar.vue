<script setup>
import miniLogoGeekours from "../icons/menuIcons/miniLogoGeekours.vue";
import home from "../icons/menuIcons/home.vue";
import geekstore from "../icons/menuIcons/geekstore.vue";
import messages from "../icons/menuIcons/messages.vue";
import community from "../icons/menuIcons/community.vue";
import notification from "../icons/menuIcons/notification.vue";
import profile from "../icons/menuIcons/profile.vue";
import settings from "../icons/menuIcons/settings.vue";

const MenuIcons = [
   {
      icon: home,
      link: "/",
   },
   {
      icon: geekstore,
      link: "/geekstore",
   },
   {
      icon: messages,
      link: "/messages",
   },
   {
      icon: community,
      link: "/community",
   },
   {
      icon: notification,
      link: "/notifications",
   },
   {
      icon: profile,
      link: "/profile",
   },
   {
      icon: settings,
      link: "/settings",
   },
]

</script>

<template>
   <nav class="h-screen w-1/4 min-w-20 max-h-screen max-w-16 shadow-sm shadow-slate-400 flex flex-col">
      <div class="mx-auto flex items-center justify-center h-20">
         <RouterLink to="/">
            <miniLogoGeekours class="h-14" />
         </RouterLink>
      </div>

      <div v-for="(item, index) in MenuIcons" :key="index" class="teste flex flex-col">
         <div class="flex flex-col items-center justify-center py-3">
            <RouterLink :to="item.link">
               <component :is="item.icon" />
            </RouterLink>
         </div>
      </div>
   </nav>
</template>

<style scoped>

</style>