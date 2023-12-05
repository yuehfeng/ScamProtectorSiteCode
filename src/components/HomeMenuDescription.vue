<template>
    <div class="menu">
        <div>
            <Avatar></Avatar>
            <h4>官方LINE機器人</h4>
            <div class="text-light">
                加入LINE好友，作為查證的第二道防線
            </div>
            <a target="_blank" href="https://line.me/R/ti/p/807qowem">
                <button type="button" class="btn btn-outline-dark text-white">Read more</button>
            </a>
        </div>
        <div>
            <AvatarSecond></AvatarSecond>
            <h4>Browser Extension</h4>
            <div class="text-light">
                連結至下載安裝插件資訊
            </div>
            <a target="_blank" href="https://github.com/yuehfeng/ScamProtectorExtension">
                <button type="button" class="btn btn-outline-dark text-white">Read more</button>
            </a>
        </div>
        <div>
            <AvatarThird></AvatarThird>
            <h4>Github Code</h4>
            <div class="text-light">
                開源程式碼
            </div>
            <a target="_blank" href="https://github.com/yuehfeng/ScamProtector">
                <button type="button" class="btn btn-outline-dark text-white">Read more</button>
            </a>
        </div>
    </div>
    
    <div class="shadow-text">
        Web Crawler
    </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import AvatarSecond from '@/components/AvatarSecond.vue'
import AvatarThird from '@/components/AvatarThird.vue'
import '@/assets/bootstrap.css'

export default {
    name: 'HelloWorld',
    components: {
        Avatar,
        AvatarSecond,
        AvatarThird
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
    height: 100vh;
}
div.menu > div > div {
    color: #787878;
}
</style>
