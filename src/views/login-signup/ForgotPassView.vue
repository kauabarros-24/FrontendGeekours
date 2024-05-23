<script setup>

import logogeekours from '../../components/icons/logo/logogeekours.vue';

</script>

<template>
    <main class="flex justify-center items-center w-screen h-screen">

        <div v-if="true" class="flex flex-col w-2/5 h-2/5 shadow-3xl rounded-2xl">
            <div class="flex justify-center h-20/1">
                <Logogeekours class="h-16" />
            </div>
            <div class="flex flex-row h-full w-full ">
                <div class="flex flex-col h-full w-2/5">
                    <div class="">
                        <h3 class="txt-rec-pass text-xl text-center">
                            Recupere sua senha
                        </h3>
                    </div>
                    <div class="flex justify-center items-center ">
                        <h6 class="text-base">
                            Informe seu email a seguir para recuperar sua senha. Este email pode demorar de 10 a 30
                            minutos
                            para chegar em sua caixa de entrada.
                        </h6>
                    </div>
                </div>
                <div class="h-full w-3/5 ">
                    <div class="h-full w-full ">
                        <form action="" class="flex flex-col">
                            <label for="" class="w-full">Email</label>
                            <input type="email" class="border rounded-md h-10 w-full pl-3 border-2 border-gray-700"
                                placeholder="Digite seu email" />
                            <div class="send-btn w-full">
                                <button class="bg-blue-500 text-white rounded-md h-10 w-20 ">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="">

        </div>
    </main>
</template>

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

