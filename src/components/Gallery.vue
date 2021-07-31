<template>
    <div class="gallery">
       <div class="section"
            <div v-for="image in images">
                <b-card>

                </b-card>
            </div>
       </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Gallery extends Vue {

    private images: string[] = [
        'https://placedog.net/500/280',
        'https://placedog.net/500/280',
        'https://placedog.net/500/280',
        'https://placedog.net/500/280',
        'https://placedog.net/500/280',
    ];

}

</script>

<style scoped>

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

</style>

