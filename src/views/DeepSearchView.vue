<template>
    <div class="bg-black">
        <HeaderComponent></HeaderComponent>
        <div class="container">
            <h1 class="text-start text-light">深度檢測 DeepSearch</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="" >
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            <div class="row text-light">
                <div class="col-4">
                    根據關鍵字 搜尋了下列這些網站
                </div>
                <div class="col-4">
                    並參照了{{ referWeb }}個相似的網站
                </div>
                <div class="col-4">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/style.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref } from 'vue';
export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
    },
    data() {
        const referWeb = ref(5);
        return {
            referWeb
        }
    }
}
</script>

<style scoped>
body {
    background: #000000;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

.fade-in {
    animation: fadeIn 1s ease-in-out forwards;
}
</style>