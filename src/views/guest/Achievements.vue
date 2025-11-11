<template>
    <image-title-header titleHeader="ACHIEVEMENTS" :banner="require('@/assets/resources/banner/banner.jpg')"
        topValue="40%" />
    <div class="content-post container-fluid mt-5">
        <div class="card " v-for="(item, index) in dataList" :key="index">
            <div class="card-body row">
                <div class="col-lg-6 col-md-12">
                    <label for="" class="text-primary fw-bolder display-6">
                        {{ item.titleName }}
                    </label>
                    <span class="badge bg-primary">{{ item.author }}</span>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div v-html="item.frameUrl"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import ImageTitleHeader from '@/components/main-layouts/components/widgets/ImageTitleHeader.vue'
export default {
    name: 'Achievements',
    components: {
        ImageTitleHeader
    },
    data() {
        const dataList = [{
      titleName: 'Holy Cross College Highlights',
      author: 'Holy Cross College, Concepcion, Tarlac',
      frameUrl: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FConcepcionHolyCrossCollege%2Fposts%2Fpfbid02jUzVRf91sUdC5bDW4vHzYxLg9HuZnW2FFQ9mhcV4hAzD8SG2RgiSE2BTjRXL6TtSl&show_text=true&width=500"
        width="500"
        height="250"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
      description: 'Holy Cross College continues to celebrate excellence, faith, and community spirit through various academic and extracurricular achievements. Stay updated with our latest highlights and stories that showcase the Crossian pride.'
    }]
        return {
            dataList
        }
    }
}
</script>
