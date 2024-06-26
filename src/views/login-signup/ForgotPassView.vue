<script setup>
import logogeekours from '../../components/icons/logo/logogeekours.vue';
</script>

<template>
    <main class="flex justify-center items-center w-screen h-screen">
        <div v-if="true" class="flex flex-col w-2/5 h-2/5 shadow-3xl rounded-2xl">
            <div class="flex justify-center w-full p-4">
                <Logogeekours class="w-48" />
            </div>
            <div class="flex h-full">
                <div class="h-full w-1/2">
                    <div class="h-full w-full">
                        <div class="flex justify-center w-full mt-8">
                            <h3>Recupere sua senha</h3>
                        </div>
                        <div class="flex justify-center p-4 mt-3">
                            <p>Insira seu email para recuperar sua senha. Este processo pode demorar de 10 a 15 minutos
                                para o email de recuperação chegar na sua caixa de entrda.</p>
                        </div>
                        <div class="flex justify-center p-4">
                            <p>Caso esteja com problemas, contate nos via email,
                                <a class="supmail" href="mailto: support@geekours.com" >support@geekours.com .</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex h-full w-1/2">
                    <div class="flex flex-col my-16 mx-auto p-10">
                        <label for="">Email</label>
                        <input placeholder="Digite seu email" type="text"
                            class="border-2 w-90/1 border-gray-600 rounded-lg pl-2">
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="">

        </div>

    </main>
</template>

<style scoped>
.supemail{
    color: blue;
}

</style>