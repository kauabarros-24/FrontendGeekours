<script setup>
    import google from '@/components/icons/google.vue';
    import Facebook from '@/components/icons/facebook.vue';
    import x from '@/components/icons/x.vue';
    import logo from '@/components/icons/logo/logogeekours.vue';
</script>

<template>
    <main>
    <div class="part-1">
        <div id="headerLogo">
            <logo />
        </div>

        <div class="informations">
            <form>
                <div class="username all-infos">
                    <label>Username</label>
                    <input type="text" placeholder="Type your username" required>
                </div>
                <div class="password all-infos">
                    <label>Password</label>
                    <input type="password" placeholder="Type your password" required>
                </div>
                <div class="confirm-button">
                    <button>
                        <RouterLink to="/">confirm</RouterLink>
                    </button>
                </div>
            </form>

            <div class="all-othersigUp">
                <div class="others-SigOptitt">
                    <div class="detail"></div>
                    <div class="choose">or</div>
                    <div class="detail"></div>
                </div>
                <div class="signup-options">
                    <div class="google-option">
                        <div class="svg-op-size">
                            <google />
                        </div>
                    </div>
                    <div class="facebook-option">
                        <div class="svg-op-size">
                            <Facebook />
                        </div>
                    </div>
                    <div class="X-option">
                        <div class="svg-op-size">
                            <x />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="create-account">
<h3>Don't have account?<RouterLink to="/signup">Create Account</RouterLink></h3>
        </div>
    </div>

    <div class="middle">
        <!--middle line-->
    </div>

    <div class="part-2">
        <!--astronauta image-->
    </div>
</main>
</template>

<style>
main {
    display: flex;
}
.part-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 54.85vw;
    height: 100vh;
}
.middle {
    width: 0.1vw;
    height: 100vh;
    background-color: black;
}
.part-2 {
    background-image: url('../../components/images/astronauta.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 45.15vw;
}
/*logo*/
#headerLogo {
    margin-top: 30px;
    width: 200px;
    height: 40px;
}
/*user-informations/inputs*/
.informations {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.all-infos {
    font-size: 30px;
    display: flex;
    flex-direction: column;
}
.all-infos input {
    width: 630px;
    height: 50px;
    border-radius: 10px;
    border: 0.5px solid black;
    font-size: 20px;
    padding-left: 15px;
}
.all-infos:nth-child(n+1) {
    margin-top: 25px;
}
.all-infos label {
    margin-bottom: 15px;
}
.user-answear input {
    width: 640px;
    height: 50px;
    border-radius: 10px;
    border: 0.5px solid black;
    font-size: 20px;
    padding-left: 15px;
}
.confirm-button {
    margin-top: 25px;
}
.confirm-button button {
    width: 155px;
    height: 40px;
    background: none;
    border: 0.5px solid black;
    border-radius: 10px;
}
.confirm-button button a {
    text-decoration: none;
    color: black;
    font-size: 20px;
}
.confirm-button button:hover {
    cursor: pointer;
}
/*others-SigOptitt*/
.others-SigOptitt, .signup-options {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}
.detail {
    width: 200px;
    height: 15px;
    border: 0.5px solid black;
    border-radius: 10px;
}
.choose {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    margin: 0 22px;
    font-size: 20px;
}
/*signup-options*/
.signup-options {
    display: flex;
    margin-top: 50px;
    gap: 60px;
}
.google-option,
.facebook-option,
.X-option {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 70px;
    border: 0.5px solid black;
    border-radius: 10px;
}
.google-option:hover,
.facebook-option:hover,
.X-option:hover {
    cursor: pointer;
}
.svg-op-size {
    width: 50px;
    height: 50px;
}
/*create-account*/
.create-account {
    font-size: 15px;
    margin-top: 100px;
}
</style>