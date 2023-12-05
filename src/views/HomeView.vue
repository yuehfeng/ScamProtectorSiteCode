<template>
    <div class="home bg-black" ref="content">
        <HeaderComponent></HeaderComponent>
        <HomeMenuDescription></HomeMenuDescription>
        <CrawlerDescription></CrawlerDescription>
        <!-- <NLPDescription></NLPDescription> -->
        <AIDeepSearchDescription></AIDeepSearchDescription>
        <BlocklistDescription></BlocklistDescription>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import '@/assets/style.css'
import HeaderLogo from '@/assets/logoheader.png'
import CrawlerDescription from '@/components/CrawlerDescription.vue'
// import NLPDescription from '@/components/NLPDescription.vue'
import AIDeepSearchDescription from '@/components/AIDeepSearchDescription.vue'
import BlocklistDescription from '@/components/BlocklistDescription.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HomeMenuDescription from '@/components/HomeMenuDescription.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// import Avatar from '@/components/Avatar.vue'

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        FooterComponent,
        CrawlerDescription,
        // NLPDescription,
        AIDeepSearchDescription,
        BlocklistDescription,
        HomeMenuDescription
    },
    data() {
        const content = ref("")
        const bottom = ref(false)

        const doScroll = (event) => {
            const scrollHeight = event.target.scrollHeight
            const scrollTop = event.target.scrollTop
            const clientHeight = event.target.clientHeight

            if (scrollTop + clientHeight >= scrollHeight) {
                console.log('Yay!')
                bottom.value = true
            } else {
                bottom.value = false
            }
        }

        onMounted(() => {
            // content.value.addEventListener('scroll', doScroll)
        })

        onUnmounted(() => {
            content.value.removeEventListener(doScroll)
        })
        return {
            headerlogo: HeaderLogo,
            // content
        }
    }
}
</script>
