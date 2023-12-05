<template>
    <h2 class="mt-5"><span>Menu</span></h2>
    <footer class="container">
        <div class="row py-5">
            <div class="col-6 row">
                <div class="col-4 text-light footer-group">
                    <div class="">
                        <CodeSlashVue></CodeSlashVue>
                    </div>
                    <span class="py-3">開發資訊</span>
                </div>
                <div class="col-8">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-start bg-black text-white">
                            <GithubIcon></GithubIcon>
                            <a target="_blank" href="https://github.com/yuehfeng/ScamProtectorExtension">Github - Chrome網頁插件</a>
                        </li>
                        <li class="list-group-item text-start bg-black text-white">
                            <GithubIcon></GithubIcon>
                            <a target="_blank" href="https://github.com/yuehfeng/ScamProtector">Github - 後台解析程式</a>
                        </li>
                        <li class="list-group-item text-start bg-black text-white">
                            <GithubIcon></GithubIcon>
                            <a target="_blank" href="https://github.com/yuehfeng/ScamProtectorLiff">Github - LIFF網頁</a>
                        </li>
                        <li class="list-group-item text-start bg-black text-white">
                            <GithubIcon></GithubIcon>
                            <a target="_blank" href="https://github.com/yuehfeng/ScamProtectorSite">Github - 介紹網站</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-6 row">
                <div class="col-4 text-light footer-group">
                    <div class="">
                        <GlobeIcon></GlobeIcon>
                    </div>
                    <span class="py-3">社群資訊</span>
                </div>
                <div class="col-8">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-start bg-black text-white">
                            <WorldIcon></WorldIcon>
                            <a target="_blank" href="https://hackmd.io/Gu9OhBt9SIO_sY91LvrtRQ?both">HackMD - 開發文件</a>
                        </li>
                        <li class="list-group-item text-start bg-black text-white">
                            <WorldIcon></WorldIcon>
                            <a target="_blank" href="https://youtu.be/RNDXlSsXZdw">YouTube - ScamProtector</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Avatar from '@/assets/avatar.jpg'
import Round from '@/assets/rounded.png'

import GithubIcon from './icons/GithubIcon.vue'
import CodeSlashVue from './icons/CodeSlash.vue'
import GlobeIcon from './icons/GlobeIcon.vue'
import WorldIcon from './icons/WorldIcon.vue'

export default {
    name: 'HelloWorld',
    components: {
        GithubIcon,
        CodeSlashVue,
        GlobeIcon,
        WorldIcon
    },
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
.footer-group {
    font-size: 1.2rem;
}
.list-group-item > a {
    margin-left: 6px;
    line-height: 24px;
    color: #fff;
}

.bg-black {
    background: #000000;
}

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
</style>