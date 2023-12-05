<template>
    <div class="avatar avatar-large">
        <img :src="avatar" alt="Usuário" class="avatar-image">
        <img :src="round" alt="Moldura" class="avatar-frame anim-spin">
    </div>
</template>

<script>
import Avatar from '@/assets/avatar.jpg'
import Round from '@/assets/3.png'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            avatar: Avatar,
            round: Round
        }
    }
}
</script>

<style>
img {
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
}</style>