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
      link: "/notification",
   },
   {
      icon: profile,
      link: "/profile",
   },
   {
      icon: settings,
      link: "/settings",
   }
]

</script>

<template>
<main class="w-screen h-screen overflow-hidden" >
   <div class="h-screen w-28 shadow-sm shadow-slate-400">
      <div class="flex justify-center items-center w-28 ">
         <RouterLink to="/">
            <miniLogoGeekours class="w-10 my-10"/>
         </RouterLink>
      </div>
      <div v-for="(item, index) in MenuIcons" :key="index" class="MenuICons flex flex-col">
         <div class="flex flex-col items-center justify-center mt-auto py-3">
            <RouterLink :to="item.link">
               <component :is="item.icon" />
            </RouterLink>
         </div>
      </div>
   </div>
</main>
</template>

<style>
.MenuICons:nth-last-child(1){
   display: flex;
   max-height: 390px;
   height: 100%;
   justify-content: baseline;
   align-items: center;
}
</style>
