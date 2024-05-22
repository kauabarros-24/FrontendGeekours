<script setup>
import logogeekours from '../../components/icons/logo/logogeekours.vue';

</script>

<template>
    <main class="flex justify-center items-center w-screen h-screen">
        <div class="w-500 h-500 shadow-3xl rounded-lg">
            <div class="flex justify-center items-center flex-col w-full">
                <div class="logo h-14">
                    <logogeekours class="h-14" />
                </div>
                <div class="tittle h-8">
                    <h4>Recupere sua senha</h4>
                </div>
            </div>
            <div class="dimencao p-1">
                <form class="flex w-full">
                    <div class="flex justify-center w-full flex-col mt-10">
                        <div class="w-full flex justify-center">
                            <input type="email" placeholder="Email"
                                class="w-80 h-10 border-2 border-gray-300 rounded-lg p-2" />
                        </div>
                        <div class="w-full flex justify-center">
                            <button class="w-80 h-10 bg-blue-500 text-white rounded-lg p-2">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<style scoped>
.dimencao {
    height: 415px;
}
</style>