<template>
    <header v-if="!toggleHeader" class="pointtop-fade-in bg-op-0">
        <div class="text-center logo">
            <img :src="headerlogo">
        </div>
        <nav class="stroke">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/#crawler">網頁爬蟲</router-link></li>
                <li><router-link to="/">AI應用</router-link></li>
                <li><router-link to="/">阻擋清單</router-link></li>
            </ul>
        </nav>
    </header>
    <header class="row bg-op-1" v-if="toggleHeader">
        <div class="col-6 text-center logo">
            <img class="pointleft-fade-in" :src="headerlogo">
        </div>
        <div class="col-2"></div>
        <div class="col-4 mx-auto">
            <div class="row nav-row-line">
                <div class="col-3 pointright-fade-in"><router-link to="/">Home</router-link></div>
                <div class="col-3 pointright-fade-in"><router-link to="/">網頁爬蟲</router-link></div>
                <div class="col-3 pointright-fade-in"><router-link to="/">AI應用</router-link></div>
                <div class="col-3 pointright-fade-in"><router-link to="/">阻擋清單</router-link></div>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderLogo from '@/assets/logoheader.png'
import { onMounted, ref } from 'vue';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        const toggleHeader = ref(false)
        function handleScroll() {
            // console.log(, window.innerHeight/2)
            if (window.pageYOffset >= (window.innerHeight / 3) ) {
                toggleHeader.value = true
            }else{
                toggleHeader.value = false
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        return {
            headerlogo: HeaderLogo,
            toggleHeader
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
}

.logo>img {
    /* width: 30vw; */
    height: 80px;
}

.dropdown:hover>.dropdown-menu {
    display: block;
}

.dropdown>.dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
}


.pointtop-fade-in {
    animation: fadeInTop .5s ease-in-out forwards;
}

.pointleft-fade-in {
    animation: fadeInLeft .5s ease-in-out forwards;
}

.pointright-fade-in {
    animation: fadeInRight .5s ease-in-out forwards;
}

@keyframes fadeInTop {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(200px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
}


.bg-op-1 {
    background: rgba(0, 0, 0, 1);
}

.bg-op-0 {
    background: rgba(0, 0, 0, 0);
}
</style>