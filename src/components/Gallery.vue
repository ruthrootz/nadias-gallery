<template>
    <b-container fluid class="p-4">
        <b-row class="section">
            <b-col>
                <b-img class="shadow art-card" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                <b-img class="shadow art-card" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                <b-img class="shadow art-card" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                <b-img class="shadow art-card" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            </b-col>
        </b-row>
    </b-container>
        <!-- <div class="section">
            <b-card-group>
                <b-card-group>
                    <b-card v-for="image in imagesPartOne"
                            class="shadow text-center art-card"
                            :img-src="image.src"
                            :img-alt="image.caption"
                            img-top>
                    </b-card>
                </b-card-group>
                <b-card v-for="image in imagesPartTwo"
                        class="shadow text-center art-card"
                        :img-src="image.src"
                        :img-alt="image.caption"
                        img-top>
                </b-card>
            </b-card-group>
       </div>
       <light-box :media="allImages"></light-box> -->
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

