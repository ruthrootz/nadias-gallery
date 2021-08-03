<template>
    <b-container fluid class="gallery">
        <b-row>
            <b-col v-for="image in images"
                   :key="image.id"
                   col
                   no-gutters
                   class="mb-2">
                <b-card class="shadow text-center art-card"
                        :img-src="image.source"
                        :img-alt="image.title"
                        img-top>
                </b-card>
            </b-col>
       </b-row>
    </b-container>
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
    margin-top: 5%;
}

.art-card {
    margin: 2%;
    min-width: 30%;
    max-width: 30%;
}

</style>

