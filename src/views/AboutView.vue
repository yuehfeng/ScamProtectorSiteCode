<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
    <div>
        {{  abuse  }}
    </div>
</template>


<script>
import abuseData from "@/assets/blocklist/abuse.json";

export default {
    name: 'HomeView',
    components: {

    },
    data() {
        return {
            abuse: abuseData,
        };
    },
}
</script>
