<template>
    <div class="news">
        
    </div>
</template>
<script>
import Api from '~/static/js/api.js'
import axios from 'axios'
export default {
    layout: 'default',
    async asyncData ({ route }) {
        let page = route.query.page ? Number(route.query.page) : 1;
        let news = await axios.get(Api.allNews + '?page=' + page);
        let recommend = await axios.get(Api.recommendNews);
        let questions = await axios.get(Api.questions);
        return {
            news: news.data.results,
            count: news.data.count,
            base: Api.base,
            page: page,
            recommend: recommend.data,
            questions: questions.data
        }
    },
    watch: {
        "$route": function () {
            // 强制刷新页面
            window.location.href = window.location.href;
        }
    },
    methods: {
        changeCurrentPage (e) {
            this.$router.push({path: '/news', query: { page: e }});
        }
    }
}
</script>
