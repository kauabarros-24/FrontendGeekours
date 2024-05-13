<script setup>
import { RouterLink } from 'vue-router';
import Logo from '@/components/icons/logogeekours.vue';
import google from '@/components/icons/google.vue';
import Facebook from '@/components/icons/facebook.vue';
import x from '@/components/icons/x.vue';

const inputDefinition = {
    /*username: {
        type: 'text',
        label: 'Nome de usuário',
        placeholder: 'Digite seu nome de usuário',
        required: true,
    },*/
    email: {
        type: 'email',
        label: 'Email',
        placeholder: 'Digite seu email',
        required: true,
    },
    password: {
        type: 'password',
        label: 'Senha',
        placeholder: 'Digite sua senha',
        required: true,
    },
};
</script>

<template>
    <main class="flex flex-col items-center justify-center h-screen w-screen">
        <div class="rounded-lg bg-gray-100 flex  items-center ">
            <div class="w-full p-4 bg-white rounded-lg shadow-3xl">
                <div class="logo flex justify-center p-4">
                    <Logo class="h-14" />
                </div>
                <div class="subtittle-cr-ac">
                    <h1 class="text-2xl font-semibold text-center">Faça seu logIn</h1>
                </div>
                <form class="mt-4 space-y-4" @submit.prevent="handleSubmit">
                    <div class="user-info">
                        <div v-for="(input, key) in inputDefinition" :key="key">
                            <label :for="key" class="text-sm font-medium text-gray-700">{{ input.label }}</label>
                            <input :type="input.type" :id="key" :name="key" :placeholder="input.placeholder"
                                class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600"
                                :required="input.required" />
                        </div>
                    </div>
                    <div class="forgot-password">
                        <RouterLink to="/forgot-password" class="text-sm text-blue-600">Esqueceu sua senha?</RouterLink>
                    </div>
                    <button type="submit"
                        class="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Entrar
                    </button>

                    <div class="other-Login flex justify-between">
                        <div class="google-op border border-gray-900  rounded-lg">
                            <google class="h-14" />
                        </div>
                        
                        <div class="facebook-op border rounded-lg  border-gray-900">
                            <facebook class="h-14"/>
                        </div>
                        
                        <div class="x-op border rounded-lg border-black  border-gray-900">
                            <x class="h-14"/>
                        </div>
                    </div>
                </form>
                <div class="cr-account">
                    <p class="mt-4 text-sm text-center text-gray-600">
                        Ainda não tem uma conta? <RouterLink to="/signup" class="text-blue-600">Cadastre-se!
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>
