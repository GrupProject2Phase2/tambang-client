<template lang="html">
    <div class="chat">
        <login-modal v-on:login="processLogin($event)" v-if="!username || exists"></login-modal>

        <div class="row">
            <div class="col-8">
                <h3 v-if="username">Welcome {{username}}</h3>
                <div class=" col card">
                    <input class="form-control" v-model="message"></input>
                    <br>
                    <button type="button" class="btn btn-block btn-info" @click="sendMessage">
                        Send Message
                    </button>

                    <div class="col-md-12">
                        <ul>
                            <li v-for="msg in chat">{{msg}}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-4">
                <users-sidebar></users-sidebar>
            </div>
        </div>
    </div>
</template>

<script>

    import LoginModal from './LoginModal';
    import UsersSidebar from './UsersSidebar';
    import {mapGetters, mapActions} from 'vuex';

    export default {

        components: {LoginModal,UsersSidebar},
        data () {
            return {
                message: ''
            }
        },
        methods: {
            ...mapActions(['socket_login', 'socket_new_message']),
            processLogin (username) {
                this.socket_login(username);
            },
            sendMessage () {
                this.socket_new_message(this.message);
                this.message = '';
            }
        },
        computed: {
            ...mapGetters(['chat', 'username', 'exists']),
        }

    }
</script>

<style lang="css">
    li {
        list-style: none;
        text-align: left;
    }
    .card {
        padding: 20px !important;
    }
</style>
