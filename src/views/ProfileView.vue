<script setup>
import { ref } from "vue";
import NavBar from "../components/templates/NavBar.vue";

const userInfo = ref({
    Followers: "423",
    Following: "423",
    Posts: "423",
});

</script>

<template>
    <main class="flex w-screen h-screen">
        <NavBar />

        <div class="flex justify-center items-center w-screen">
            <div class="w-80/1 h-95/1 shadow-3xl rounded-sm p-4">
                <div class="flex w-full h-30/1 ">
                    <div class="flex justify-center items-center w-30/1 h-full">
                        <div class="w-48 h-48">
                            <img src="../components/images/astronauta.jpg" class="rounded-full w-48 h-48" alt="">
                        </div>
                    </div>
                    <div class="flex items-center justify-start w-50/1 h-full">
                        <div class="">
                            <div class="pb-2 text-2xl">
                                <h1>renato_chagas</h1>
                            </div>
                            <div class="flex gap-8">
                                <div v-for="(userI, key) in userInfo" :key="key" class="">
                                    <div class="">
                                        <div class="flex justify-center">
                                            <h3>{{ key }}</h3>
                                        </div>
                                        <div class="flex justify-center">
                                            <h4>{{ userI }}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-20/1 h-full  border-l-2 border-gray-400">

                    </div>
                </div>
                <div class="w-full h-70/1">

                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>