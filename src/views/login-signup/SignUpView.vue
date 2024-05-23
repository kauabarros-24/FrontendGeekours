<script setup>
import Logogeekours from '@/components/icons/logogeekours.vue';
import x from '../../components/icons/x.vue';
import google from '../../components/icons/google.vue';
import facebook from '../../components/icons/facebook.vue';

const inputDefinition = {
    username: {
        type: 'text',
        label: 'Usuário',
        placeholder: 'Digite seu usuário',
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
                            class="w-3/4 px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600"
                            :required="input.required" />
                    </div>
                    <div class="w-full flex justify-center items-center">
                        <div class="flex justify-end w-3/4">
                            <button type="submit" class=" bg-blue-600 rounded-md mt-2 text-base px-4 bold">Enviar</button>
                        </div>
                    </div>
                    <div class="flex justify-center social-signup w-full h-full mt-3">
                        <div class="flex flex-row items-center w-3/4">
                            <div class="w-full h-1 bg-black"></div>
                            <div class="px-4">or</div>
                            <div class="w-full h-1 bg-black"></div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="flex w-3/4 justify-between ">
                            <div class="">
                                <google class="w-16 h-16 p-3" />
                            </div>
                            <div class="">
                                <facebook class="w-16 h-16 p-3" />
                            </div>
                            <div class="">
                                <x class="w-16 h-16 p-3" />
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
        <div class="middle bg-black w-px h-screen">
            <!--linha-->
        </div>
        <div class="bg-image">
            <!--astronauta image-->
        </div>
    </main>
</template>
<style scoped>

<style>
.bg-image {
    width: 40%;
    height: 100vh;
    background-image: url('../../components/images/astronauta.jpg');
    background-size: cover;
    background-position: center;
}
</style>