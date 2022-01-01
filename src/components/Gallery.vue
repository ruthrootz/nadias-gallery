<template>
    <b-container fluid class="p-4">
        <b-row class="section">
            <b-col>
                <div class="zoom"
                     v-for="image in allImages">
                    <b-img
                        class="shadow art-card"
                        :class="image.isHovered ? 'hovered' : ''"
                        thumbnail
                        fluid
                        :src="image.src"
                        :alt="image.caption">
                    </b-img>
                </div>
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
            isHovered: false,
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 2',
            isHovered: false,
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 3',
            isHovered: false,
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 4',
            isHovered: false,
        },
        {
            src: 'https://placedog.net/500/500?random',
            thumb: 'https://placedog.net/500/500?random', 
            caption: 'test 5',
            isHovered: false,
        },
    ]; 

    private onHover(image: any): void {
        this.allImages.forEach((i: any): void => i.isHovered = false);
        image.isHovered = true;
    }

    private onUnhover(image: any): void {
        this.allImages.forEach((i: any): void => i.isHovered = false);
        image.isHovered = true;
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

.hovered {
    width: 200%;
}

</style>

