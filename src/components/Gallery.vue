<template>
    <b-container fluid class="p-4">
        <b-row class="section">
            <b-col>
                <b-img v-b-hover="handleHover(image)" v-for="image in allImages" class="shadow art-card" thumbnail fluid :src="image.src" :alt="image.caption"></b-img>
            </b-col>
        </b-row>
        <!-- <light-box :media="allImages"></light-box> -->
    </b-container>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import LightBox from 'vue-image-lightbox';

@Component({ 
    components: {
        LightBox,
    },
})
export default class Gallery extends Vue {

    private allImages: any[] = [
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 1',
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 2',
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 3',
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 4',
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 5',
        },
    ]; 

    private imagesPartOne: any[] = [
        {
            src: 'https://placedog.net/500/500?random',
            caption: 'test 1',
        },
        {
            src: 'https://placedog.net/500/500?random',
            caption: 'test 2',
        },
        {
            src: 'https://placedog.net/500/500?random',
            caption: 'test 3',
        },
    ];

    private imagesPartTwo: any[] = [
        {
            src: 'https://placedog.net/500/500?random',
            caption: 'test 4',
        },
        {
            src: 'https://placedog.net/500/500?random',
            caption: 'test 5',
        },
    ];

    private handleHover(image: any): void {
        image.isHovered = true;
        this.images.forEach((i: any): void => i.isHovered = false);
    }

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
    width: 25%;
}

</style>

