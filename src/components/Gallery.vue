<template>
    <div class="gallery">
        <div class="section">
            <b-card v-for="image in images"
                    class="shadow text-center art-card"
                    :img-src="image.source"
                    :img-alt="image.title"
                    img-top>
            </b-card>
       </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Gallery extends Vue {

    private images: any[] = [
        {
            source: 'https://placedog.net/500/280',
            title: 'test 1',
        },
        {
            source: 'https://placedog.net/500/280',
            title: 'test 2',
        },
        {
            source: 'https://placedog.net/500/280',
            title: 'test 3',
        },
        {
            source: 'https://placedog.net/500/280',
            title: 'test 4',
        },
        {
            source: 'https://placedog.net/500/280',
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

</style>

