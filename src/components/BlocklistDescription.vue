<template>
    <div class="container page">
        <div id="carouselExampleControlsOpendata" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="description mt-5 text-start">
                        透過政府資料開放平臺(Open Data)和Github公開項目「<a target="_blank" href="https://github.com/blocklistproject/Lists">blocklistproject</a>」，
                        抓取網址與LINE ID等相關動態資料，經由爬蟲結果之關鍵字與連結元素做逐一比對，
                        總計超過兩百萬筆的資料進行過濾保障使用者隱藏的誘餌或危機。
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div>
                                <div class="row">
                                    <div class="col-4 py-3" v-for="item in data" :key="item.type">
                                        <span :class="'badge text-bg-' + item.badge">{{ item.type }}</span>
                                        <count-up :end-val="item.length" :duration="item.duration"
                                            class="text-white"></count-up>
                                    </div>
                                </div>
                                <input type="text" v-model="keyword" placeholder="請嘗試貼網址或LINE ID上來" />
                                <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsOpendata"
                                    data-bs-slide="next" @click="callApi()">
                                    Try it!
                                    <next-icon></next-icon>
                                </button>
                            </div>
                        </div>
                        <div class="col-5">
                            <h3 class="">Blocklist & OpenData</h3>
                            <Avatar></Avatar>
                            <div class="row total-row text-white">
                                <div class="col-3 text-end">目前共蒐集</div>
                                <count-up class="col-6 total" :end-val="total" :duration="4"></count-up>
                                <div class="col-3 text-start">筆資料</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="row">
                        <div class="col-3">
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsOpendata"
                                data-bs-slide="prev" @click="clearKeyword()">
                                <back-icon></back-icon>
                                Back
                            </button>
                        </div>
                    </div>
                    <h3>Blocklist & OpenData</h3>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <input type="text" v-model="keyword" placeholder="請嘗試貼網址上來" />
                            <button class="btn btn-outline-light" @click="callApi()">
                                Try it!
                            </button>
                        </div>
                        <div class="row" v-if="apiResult">
                            <div :class="(item.search==0)?'col-4 py-3':'danger-box col-4 py-3'" v-for="item in data" :key="item.type">
                                <div class="text-white">
                                    <span :class="'badge text-bg-' + item.badge">{{ item.type }}</span>
                                    共有
                                    <span v-if="item.search == 0" class="text-white">{{ item.search }}</span>
                                    <span v-else class="important">{{ item.search }}</span>
                                    筆資料
                                </div>
                                <div class="text-end">
                                    <button class="btn my-2 btn-outline-light">查看資料集</button>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="lds-facebook">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _global from '@/components/cores/GlobalVar.vue'
import Avatar from '@/components/avatars/Blocklist.vue'
import '@/assets/bootstrap.css'
import CountUp from 'vue-countup-v3'
import BackIcon from '@/components/icons/BackIcon.vue'
import NextIcon from '@/components/icons/NextIcon.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
    name: 'HelloWorld',
    components: {
        Avatar,
        CountUp,
        BackIcon,
        NextIcon
    },
    props: {
        msg: String
    },
    data() {
        const total = ref(0);
        const keyword = ref("");
        const apiResult = ref(false);
        const data = [
            {
                type: '虐待',
                type_en: 'abuse',
                length: 435190,
                duration: 2.0,
                badge: 'danger',
                search: 0
            },
            {
                type: '廣告',
                type_en: 'ads',
                length: 154576,
                duration: 1.4,
                badge: 'info',
                search: 0
            },
            {
                type: '虛擬貨幣',
                type_en: 'crypto',
                length: 23761,
                duration: 0.9,
                badge: 'secondary',
                search: 0
            },
            {
                type: '藥物、毒品',
                type_en: 'drugs',
                length: 26588,
                duration: 0.8,
                badge: 'danger',
                search: 0
            },
            {
                type: '阻止FB相關的服務',
                type_en: 'facebook',
                length: 22459,
                duration: 0.8,
                badge: 'primary',
                search: 0
            },
            {
                type: '欺詐',
                type_en: 'fraud',
                length: 196082,
                duration: 1.1,
                badge: 'danger',
                search: 0
            },
            {
                type: '博弈',
                type_en: 'gambling',
                length: 2498,
                duration: 0.6,
                badge: 'secondary',
                search: 0
            },
            {
                type: '惡意軟體',
                type_en: 'malware',
                length: 436297,
                duration: 2.0,
                badge: 'danger',
                search: 0
            },
            {
                type: '釣魚網站',
                type_en: 'phishing',
                length: 190259,
                duration: 1.2,
                badge: 'danger',
                search: 0
            },
            {
                type: '盜版網站',
                type_en: 'piracy',
                length: 2134,
                duration: 0.5,
                badge: 'secondary',
                search: 0
            },
            {
                type: '成人網站',
                type_en: 'porn',
                length: 500247,
                duration: 2.5,
                badge: 'warning',
                search: 0
            },
            {
                type: '勒索軟體',
                type_en: 'ransomware',
                length: 1904,
                duration: 0.6,
                badge: 'danger',
                search: 0
            },
            {
                type: '詐騙網站',
                type_en: 'scam',
                length: 1272,
                duration: 0.6,
                badge: 'danger',
                search: 0
            },
            {
                type: '抖音惡意網站',
                type_en: 'tiktok',
                length: 3699,
                duration: 0.8,
                badge: 'secondary',
                search: 0
            },
            {
                type: 'P2P文件分享協議',
                type_en: 'torrent',
                length: 2618,
                duration: 0.6,
                badge: 'light',
                search: 0
            },
            {
                type: '追蹤個人資訊的網站',
                type_en: 'tracking',
                length: 15070,
                duration: 0.9,
                badge: 'warning',
                search: 0
            },
            {
                type: '假投資(博弈)網站',
                type_en: 'fakewe',
                length: 7316,
                duration: 1.2,
                badge: 'success',
                search: 0
            },
            {
                type: '詐騙LINE ID',
                type_en: 'lineid',
                length: 17178,
                duration: 1.2,
                badge: 'success',
                search: 0
            }
        ];

        const sumData = () => {
            let sum = 0
            for (let i = 0; i < data.length; i++) {
                sum += data[i].length
            }
            total.value = sum
        }

        const callApi = () => {
            apiResult.value = false;
            if (keyword.value == "") return;

            // 歸零
            data.forEach(element => {
                element.search = 0
            });

            keyword.value = keyword.value.trim()
            const url = `${_global.server}${_global.prefix}/web/blocklist?text=${keyword.value}`;
            axios.get(url)
                .then((response) => {
                    console.log(response)
                    let result = response.data.data;
                    if (result.length > 0) {
                        data.forEach(element => {
                            result.forEach(item => {
                                if (element.type_en == item) element.search += 1;
                            });
                        });
                        apiResult.value = true;
                    }
                })
        }

        const clearKeyword = () => {
            keyword.value = ""
        }

        onMounted(() => {
            sumData()
        })

        return {
            total,
            data,
            keyword,
            apiResult,
            callApi,
            clearKeyword
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
    color: #ffffff;
}
a:hover {
    color: #eeeeee;
    text-decoration: none;
}
.page {
    height: 100vh;
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

.lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
}

@keyframes lds-facebook {
    0% {
        top: 8px;
        height: 64px;
    }

    50%,
    100% {
        top: 24px;
        height: 32px;
    }
}

.important {
    color: #ffffff;
    font-weight: bolder;
    font-size: 2rem;
    text-shadow: 0px 0px 20px #ff0000;
}

.danger-box {
    box-shadow: 0px 0px 10px #ff0000;
    border-radius: 20px;
    background: rgba(255, 255, 255, .1);
}
</style>
