<template>
    <div class="container page" id="#crawler">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-8">
                            <h3 class="my-5">Web Crawler & Natural Language Processing</h3>
                            <div class="description text-start my-5">
                                使用Python程式語言開發，使用BeautifulSoup套件抓取網頁內元素，
                                擷取使用者瀏覽中或欲瀏覽的網頁資訊元素與屬性，並對其分類進行進一步的解析動作。
                                自然語言處理 (NLP) 是一種機器學習技術，讓電腦能夠解譯、操縱及理解人類語言。
                                如今，組織擁有來自各種通訊管道的大量語音和文字資料，
                                例如電子郵件、簡訊、社交媒體新聞摘要、影片、音訊等。
                                他們使用NLP軟體來自動處理此資料，分析訊息中的意圖或情緒，並即時回應人類通訊。
                            </div>
                        </div>
                        <div class="col-4">
                            <CrawlerAvatar></CrawlerAvatar>
                        </div>
                        <div class="input-container">
                            <input type="text" v-model="weburl" placeholder="請嘗試貼網址上來" />
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsNoTouching"
                                @click="crawlerBtn" data-bs-slide="next">
                                Try it!
                                <next-icon></next-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="row">
                        <div class="col-3">
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsNoTouching"
                                data-bs-slide="prev">
                                <back-icon></back-icon>
                                Back
                            </button>
                        </div>
                    </div>
                    <h3>Web Crawler</h3>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <input type="text" v-model="weburl" placeholder="請嘗試貼網址上來" />
                            <button @click="crawlerBtn" class="btn btn-outline-light"
                                data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                Try it!
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div style="overflow-y: scroll; max-height: 50vh;">
                                <div class="list-group bg-black" v-for="(item, index) in webdom" :key="item">
                                    <span @click="crawlerIndex(index)"
                                        class="list-group-item list-group-item-action text-light bg-dark">
                                        {{ item.tags }}
                                        <span class="badge badge-light">{{ item.data.length }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 text-white">
                            <h4>預覽視窗</h4>
                            <vue-json-pretty class="jsondatares" :data="datares" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _global from '@/components/cores/GlobalVar.vue'
import CrawlerAvatar from '@/components/avatars/Crawler.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import VueJsonPretty from 'vue-json-pretty';
import NextIcon from '@/components/icons/NextIcon.vue'
import '@/assets/bootstrap.css'
import 'vue-json-pretty/lib/styles.css';
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'HelloWorld',
    components: {
        VueJsonPretty,
        CrawlerAvatar,
        BackIcon,
        NextIcon
    },
    data() {
        const weburl = ref("");
        const webdom = ref({});
        const datares = ref("");

        const crawlerBtn = () => {
            if (weburl.value == "") return;
            weburl.value = weburl.value.trim()
            const url = `${ _global.server }${ _global.prefix }/web/crawler?url=${weburl.value}`
            axios.get(url)
                .then((response) => {
                    webdom.value = response.data.data
                    datares.value = webdom.value[0].data
                })
        }

        const crawlerIndex = (index) => {
            datares.value = webdom.value[index].data
        }

        return {
            weburl,
            webdom,
            datares,
            crawlerBtn,
            crawlerIndex
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
    height: 80vh;
}

input[type="text"] {
    font-size: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    width: 70%;
    padding: 10px 0;
    color: #eeeeee;
}

input[type="text"]:focus {
    border-bottom: 1px solid #fff;
    transition: all 1s;
}

input:focus+button.tryit {
    display: inline;
    transition: all 1s;
}

button.tryit {
    width: 50px;
    height: 50px;
    display: none;
}

.jsondatares {
    height: 50vh;
    background: #000000;
    color: #ffffff;
    overflow-y: auto;
}
</style>
