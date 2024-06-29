<script setup>
import NavBar from "../components/templates/NavBar.vue";

</script>

<template>
    <main class="flex w-screen h-screen">
        <NavBar />

        <div class="flex justify-center items-center w-screen">
            <div class="w-80/1 h-95/1 bg-slate-600">
                <div class="flex w-full h-30/1 bg-red-500">
                    <div class="flex justify-center items-center w-30/1 h-full bg-black">
                        <div class="bg-green-400  w-48 h-48 rounded-full">

                        </div>
                    </div>
                    <div class="w-50/1 h-full bg-gray-600">
                        
                    </div>
                    <div class="w-20/1 h-full bg-yellow-500">

                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style></style>