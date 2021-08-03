<template>
    <div class="gallery">
        <div class="section">
            <b-card-group>
                <b-card v-for="image in images"
                        class="shadow text-center art-card"
                        :img-src="image.source"
                        :img-alt="image.title"
                        img-top>
                </b-card>
            </b-card-group>
       </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Gallery extends Vue {

    private images: any[] = [
        {
            source: 'https://placedog.net/500/500?random',
            title: 'test 1',
        },
        {
            source: 'https://placedog.net/500/500?random',
            title: 'test 2',
        },
        {
            source: 'https://placedog.net/500/500?random',
            title: 'test 3',
        },
        {
            source: 'https://placedog.net/500/500?random',
            title: 'test 4',
        },
        {
            source: 'https://placedog.net/500/500?random',
            title: 'test 5',
        },
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

.gallery {
    height: 100vh;
}

.art-card {
    width: 30%;
    margin: 3%;
}

</style>

