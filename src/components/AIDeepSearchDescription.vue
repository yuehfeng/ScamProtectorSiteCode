<template>
    <div class="container page">
        <div id="carouselExampleControlsAI" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <Avatar></Avatar>
                        </div>
                        <div class="col-8">
                            <h3 class="mt-5">ChatGPT & Vision AI</h3>
                            <div class="description">
                                ChatGPT，全稱聊天生成預訓練轉換器（英語：Chat Generative Pre-trained Transformer），
                                是OpenAI開發的人工智慧聊天機器人程式，於2022年11月推出。
                                該程式使用基於GPT-3.5、GPT-4架構的大型語言模型並以強化學習訓練。
                                ChatGPT目前仍以文字方式互動，而除了可以用人類自然對話方式來互動，
                                還可以用於甚為複雜的語言工作，包括自動生成文字、自動問答、自動摘要等多種任務。
                                如：在自動文字生成方面，ChatGPT可以根據輸入的文字自動生成類似的文字（劇本、歌曲、企劃等），
                                在自動問答方面，ChatGPT可以根據輸入的問題自動生成答案。還有編寫和除錯電腦程式的能力。
                                在推廣期間，所有人可以免費註冊，並在登入後免費使用ChatGPT與AI機器人對話。
                                透過AutoML Vision 從圖片中取得深入分析結果、使用預先訓練的Vision API 模型，
                                或是透過Vertex AI Vision 建立電腦視覺應用程式.
                            </div>
                        </div>
                        <div class="col-12 text-end">
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsAI"
                                data-bs-slide="next">
                                Read More
                                <next-icon></next-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="row">
                        <div class="col-3">
                            <button class="btn btn-outline-light" data-bs-target="#carouselExampleControlsAI"
                                data-bs-slide="prev">
                                <back-icon></back-icon>
                                Back
                            </button>
                        </div>
                    </div>
                    <h3>ChatGPT & Vision AI</h3>
                    <div class="row">
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
import Avatar from '@/components/avatars/AI.vue'
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
</style>
