<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Logogeekours from '@/components/icons/logogeekours.vue';
import x from '../../components/icons/x.vue';
import google from '../../components/icons/google.vue';
import facebook from '../../components/icons/facebook.vue';

const userSignUp = ref({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
});

const inputDefinition = {
    username: {
        type: 'text',
        label: 'Usuário',
        placeholder: 'Digite seu usuário',
        required: true,
    },
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
    passwordConfirm: {
        type: 'password',
        label: 'Confirme sua senha',
        placeholder: 'Digite sua senha novamente',
        required: true,
    },
};

</script>

<template>
    <main class="w-screen h-screen flex justify-center items-center">
        <div class="flex w-2/4 h-3/4 shadow-3xl  rounded-lg">
            <div class="w-3/5 h-full ">
                <div class="logo flex justify-center mb-5/1">
                    <Logogeekours class="w-48 p-4" />
                </div>
                <form action="">
                    <div v-for="(input, key) in inputDefinition" :key="key"
                        class="flex flex-col justify-center items-center mt-3">
                        <label :for="key" class="text-base font-medium text-gray-700 w-3/4">{{ input.label }}</label>
                        <input :type="input.type" :id="key" :name="key" :placeholder="input.placeholder"
                            v-model="userSignUp[key]"
                            class="w-3/4 px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600"
                            :required="input.required" />
                    </div>
                    <div class="w-full flex justify-center items-center">
                        <div class="flex justify-end w-3/4">
                            <button type="submit"
                                class=" bg-blue-600 rounded-md mt-2 text-base px-4 bold">Enviar</button>
                        </div>
                    </div>
                    <div class="flex justify-center social-signup w-full h-full mt-3">
                        <div class="flex flex-row items-center w-3/4">
                            <div class="w-full h-1 bg-black rounded-lg"></div>
                            <div class="px-4">or</div>
                            <div class="w-full h-1 bg-black rounded-lg"></div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col ">
                        <div class="flex flex-col w-full justify-center ">
                            <div class="flex w-full justify-around ">
                                <div class="">
                                    <button class="">
                                        <google class="w-16 h-16 p-3" />
                                    </button>
                                </div>
                                <div class="">
                                    <button class="">
                                        <facebook class="w-16 h-16 p-3" />
                                    </button>
                                </div>
                                <div class="">
                                    <button class="">
                                        <x class="w-16 h-16 p-3" />
                                    </button>
                                </div>
                            </div>

                            <div class="w-full text-center">
                                <h3>Already have an account?
                                    <RouterLink class="Al-account" to="/LogIn">
                                        LogIn
                                    </RouterLink>
                                </h3>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="w-px h-full bg-black">

            </div>
            <div class="bg-image h-full w-2/5  rounded-lg">

            </div>
        </div>
    </main>
</template>

<style>
.bg-image {
    width: 40%;
    height: 100%;
    background-image: url('../../components/images/astronauta.jpg');
    background-size: cover;
    background-position: center;
}

.Al-account {
    color: rgb(75, 141, 240);
    font-weight: bold;
}
</style>