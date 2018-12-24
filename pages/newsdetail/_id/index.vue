<template>
    <div class="news-detail">
       
    </div>
</template>
<script>
import Api from '~/static/js/api.js'
import axios from 'axios'
export default {
    layout: 'finance',
    async asyncData ({ route }) {
        let newsId = Number(route.query.id);
        let newsDetail = await axios.get(Api.allNews + newsId + '/');
        let preId = newsId - 1;
        let nextId = newsId + 1;
        let preData = {};
        axios.get(Api.allNews + preId + '/').then(res => {
            // console.log('pre', res.data);
            preData = res.data;
        }).catch(err => {
            // console.log(err);
        })
        let nextData = {};
        axios.get(Api.allNews + nextId + '/').then(res => {
            // console.log('next', res.data);
            nextData = res.data;
        }).catch(err => {
            // console.log('next err', err);
        })
        let recommend = await axios.get(Api.recommendNews);
        return {
            newsDetail: newsDetail.data,
            recommend: recommend.data,
            preData: preData,
            nextData: nextData
        }
    }
}
</script>