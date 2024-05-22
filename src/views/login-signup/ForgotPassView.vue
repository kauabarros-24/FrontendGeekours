<script setup>
import logogeekours from '../../components/icons/logo/logogeekours.vue';

</script>

<template>
    <main class="flex justify-center items-center w-screen h-screen">
        <div class="w-500 h-500 shadow-3xl rounded-lg">
            <div class="flex justify-center items-center flex-col w-full">
                <div class="logo h-14 p-10">
                    <logogeekours class="h-14" />
                </div>
            </div>
            <div class="dimencao p-1">
                <form class="flex w-full">
                    <div class="flex justify-center w-full flex-col mt-5">
                        <div class="txt flex flex-col justify-center items-center">
                            <div class="tittle">
                                <h3>Recupere sua senha</h3>
                            </div>
                            <div class="txt p-5 w-full">
                                <p>Insira seu email para recuperar sua senha, este processo pode demorar de 10min a 30min, fique verificando seu email periodicamente.</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-center">
                            <input type="email" placeholder="Email"
                                class="w-96 h-10 border-2 border-gray-300 rounded-lg p-2" />
                        </div>
                        <div class="w-full flex justify-center">
                            <button class="w-96 mt-5 h-10 bg-blue-500 text-white rounded-lg p-2">Enviar</button>
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