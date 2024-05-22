<script setup>
/*import { RouterLink } from 'vue-router';*/
import logogeekours from '../../components/icons/logogeekours.vue';
/*import google from '@/components/icons/google.vue';
import Facebook from '@/components/icons/facebook.vue';
import x from '@/components/icons/x.vue';*/

const inputDefinition = {
    username: {
        type: 'text',
        label: 'Nome de usuário',
        placeholder: 'Digite seu nome de usuário',
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
    <main class="flex w-screen h-screen">
        <div class="flex flex-col w-3/5 ">
            <div class="logo flex justify-center w-full">
                <logogeekours class="h-14" />
            </div>
            <div class="info-cad">
                <form w>
                    <div v-for="(input, key) in inputDefinition" :key="key"
                        class="flex flex-col justify-center items-center">
                        <div class="lbl-input">
                            <label :for="key">{{ input.label }}</label>
                            <input :type="input.type" :placeholder="input.placeholder" :required="input.required">
                        </div>
                    </div>
                    <div class="submit-btn">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div class="flex  w-96">
                        <div class="w-full h-1">
                            <div class="w-full h-1 bg-black">

                            </div>
                            <div class="p-3">
                                or
                            </div>
                            <div class="w-full h-1 bg-black">

                            </div>
                        </div>

                    </div>
                </form>
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

<style>
.bg-image {
    width: 40%;
    height: 100vh;

    background-image: url('../../components/images/astronauta.jpg');
    background-size: cover;
    background-position: center;
}
</style>
