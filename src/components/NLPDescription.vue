<template>
    <div class="container page">
        <div id="carouselExampleControlsNLP" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h3 class="text-end">Natural Language Processing</h3>
                    <div class="row">
                        <div class="col-5">
                            <Avatar></Avatar>
                        </div>
                        <div class="col-7">
                            <div class="description mt-5">
                                自然語言處理 (NLP) 是一種機器學習技術，讓電腦能夠解譯、操縱及理解人類語言。
                                如今，組織擁有來自各種通訊管道的大量語音和文字資料，
                                例如電子郵件、簡訊、社交媒體新聞摘要、影片、音訊等。
                                他們使用 NLP 軟體來自動處理此資料，分析訊息中的意圖或情緒，並即時回應人類通訊。
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-container mt-5">
                            <input type="text" id="input-field" placeholder="請嘗試貼網址上來" />
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsNLP"
                                data-bs-slide="next">
                                Try it!
                                <next-icon></next-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="row">
                        <div class="col-3">
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsNLP"
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
                            <input type="text" id="input-field" placeholder="請嘗試貼網址上來" />
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsNLP"
                                data-bs-slide="next">Try
                                it!
                            </button>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/avatars/NLP.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import NextIcon from '@/components/icons/NextIcon.vue'
import '@/assets/bootstrap.css'

export default {
    name: 'HelloWorld',
    components: {
        Avatar,
        BackIcon,
        NextIcon
    },
    props: {
        msg: String
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
    max-width: 300px;
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
</style>
