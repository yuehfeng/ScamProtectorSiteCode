<template>
    <div class="avatar avatar-large">
        <img :src="avatar" alt="Usuário" class="avatar-image">
        <img :src="round" alt="Moldura" class="avatar-frame anim-spin">
    </div>
</template>

<script>
import Avatar from '@/assets/webcrawler.jpg'
import Round from '@/assets/1.png'
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

<style scoped>
img {
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
}

.avatar {
    margin: 20px auto;
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
    padding: 4px;
    box-shadow: inset 0 0 0 2px #4D4F6E;
    box-shadow: #c8c9d7 5px 5px 10px;
}

.avatar-large {
    width: 50vw;
    height: 50vw;
    max-width: 300px;
    max-height: 300px;
}

.avatar-x-large {
    width: 144px;
    width: 144px;
}

.avatar-image {
    width: 300px;
    vertical-align: middle;
    border-radius: 50%;
}

.avatar-frame {
    position: absolute;
    pointer-events: none;
}

.avatar-large .avatar-frame {
    top: -10%;
    left: -10%;
    max-width: 120%;
}

.avatar-x-large .avatar-frame {
    top: -12.5%;
    left: -12.5%;
    max-width: 125%;
}

.anim-spin {
    animation: spin 20s linear infinite;
}

.anim-hue {
    animation: hue 20s linear infinite;
}

@keyframes hue {
    100% {
        filter: hue-rotate(360deg);
    }
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>