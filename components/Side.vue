<template>
    <div class="side">
        <div class="side-center">
            <a href="/" class="side-tool">
                <i>
                    <img src="/images/side/icon_message.svg" alt="">
                    <img src="/images/side/icon_message_hover.svg" alt="">
                </i>
            </a>
            <span class="side-tool side-consult">
                <i>
                    <img src="/images/side/icon_customer.svg" alt="">
                </i>
                <span class="tool-word">在线咨询</span>
                <div class="tool-popper-wrap">
                    <div class="tool-popper">
                        <h2 class="popper-title">
                            <i>
                                <img src="/images/side/icon_adviser.svg" alt="">
                            </i>财税顾问
                        </h2>
                        <p class="popper-desc">专业资深顾问，免费在线咨询。</p>
                        <div class="qq-accounts">
                            <a :href="qq" target="_blank" class="contact"><img src="/images/side/qq_contact.gif" alt=""></a>
                            <a :href="qq1" target="_blank" class="contact"><img src="/images/side/qq_contact.gif" alt=""></a>
                            <a :href="qq2" target="_blank" class="contact"><img src="/images/side/qq_contact.gif" alt=""></a>
                            <a :href="qq3" target="_blank" class="contact"><img src="/images/side/qq_contact.gif" alt=""></a>
                        </div>
                        <p class="service-time">服务时间</p>
                        <p class="time-content">周一至周五：9:00-20:00 周六至周日：9:00-18:00</p>
                        <i class="triangle"></i>
                    </div>
                </div>
            </span>
            <a :href="hotTel" class="side-tool side-tel">
                <i>
                    <img src="/images/side/icon_phone.svg" alt="">
                    <img src="/images/side/icon_phone_hover.svg" alt="">
                </i>
                <div class="tool-popper-wrap">
                    <div class="tool-popper">
                        <h2 class="popper-title">
                            <i><img src="/images/side/icon_phone_hover.svg" alt=""></i>免费电话
                        </h2>
                        <p class="popper-desc">24小时在线咨询</p>
                        <i class="triangle"></i>
                    </div>
                </div>
            </a>
            <a href="javascript: void(0)" class="side-tool side-code">
                <i>
                    <img src="/images/side/icon_mobile.svg" alt="">
                    <img src="/images/side/icon_mobile_hover.svg" alt="">
                </i>
                <div class="tool-popper-wrap">
                    <div class="tool-popper">
                        <img src="/images/side/qrcode.png" alt="" class="popper-img">
                        <p class="popper-word">扫一扫 手机浏览</p>
                        <i class="triangle"></i>
                    </div>
                </div>
            </a>
        </div>
        <div class="to-top">
            <img src="/images/side/icon_top.svg" alt="" @click="toTop" v-show="showTop">
            <img src="/images/side/icon_top_hover.svg" alt="" @click="toTop" v-show="showTop">
        </div>
    </div>
</template>
<style>
.side{
    position: fixed;
    z-index: 10001;
    right: 0;
    width: 35px;
    top: 0;
    height: 100%;
    background-color: #262626;
    text-align: center;
}
.side-center{
    position: relative;
    top: 50%;
    margin-top: -220px;
}
.side-tool{
    position: relative;
    display: inline-block;
    width: 35px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
}
.side-tool > i > img{
    height: 26px;
}
.side-tool > i > img:nth-child(1){
    display: inline-block;
}
.side-tool > i > img:nth-child(2){
    display: none;
}
.side-tool:hover > i > img:nth-child(1){
    display: none;
    transition: display .3s;
}
.side-consult:hover > i > img:nth-child(1){
    display: inline-block;
}
.side-tool:hover > i > img:nth-child(2){
    display: inline-block;
    transition: display .3s;
}
.side-tool:hover{
    color: #ff7955;
}
.side-consult{
    background-color: #ff7955;
    padding: 20px 0;
    cursor: pointer;
}
.side-consult:hover{
    color: #fff;
}
.side-consult:hover > .tool-popper-wrap{
    display: block;
}
.tool-word{
    width: 18px;
    padding-top: 8px;
    display: inline-block;
}
.tool-popper-wrap{
    position: absolute;
    right: 36px;
    width: 220px;
    height: 165px;
    top: 0;
    display: none;
}
.tool-popper{
    border: 1px solid #e0e0e0;
    background-color: #fff;
    padding: 22px 12px 17px;
    color: #000;
    text-align: left;
    margin-right: 15px;
}
.tool-popper > div.qq-accounts{
    padding-top: 5px;
    text-align: center;
}
.tool-popper > div.qq-accounts > a.contact{
    display: block;
    margin-top: 3px;
}
.popper-title{
    font-size: 14px;
    color: #ff7d4e;
    font-weight: 700;
    margin-right: 50px;
    line-height: 24px;
    position: relative;
    padding-left: 35px
}
.popper-title > i > img{
    height: 30px;
}
.popper-title > i {
    position: absolute;
    top: -5px;
    left: 0;
}
.popper-desc{
    padding: 10px 0 0 5px;
    font-size: 12px;
    font-weight: 500;
}
.service-time{
    width: 162px;
    margin: 10px 0 0 5px;
    padding-top: 10px;
    border-top: 1px solid #d8dce5;
    color: #878d99;
}
.time-content{
    width: 145px;
    padding: 5px 0 0 5px;
    color: #878d99;
}
.triangle{
    position: absolute;
    right: 6px;
    top: 33px;
    background: url('/images/side/triangle.png') no-repeat;
    width: 10px;
    height: 15px;
}
.side-tel:hover > .tool-popper-wrap, .side-code:hover > .tool-popper-wrap{
    top: -28px;
}
.side-tel:hover > .tool-popper-wrap{
    display: block;
}
.side-code > .tool-popper-wrap{
    width: 150px;
    height: 158px;
}
.side-code > .tool-popper-wrap .tool-popper{
    text-align: center;
}
.side-code:hover > .tool-popper-wrap{
    display: block;
}
.side-code:hover > .tool-popper-wrap .popper-img{
    width: 92px;
    height: 92px;
}
.side-code:hover > .tool-popper-wrap .popper-word{
    color: #ff7d4e;
    font-size: 12px;
}
.to-top{
    position: absolute;
    bottom: 5px;
    right: 2.5px;
    /* padding: 9px; */
    cursor: pointer;
    height: 30px;
}
.to-top > img{
    height: 30px;
}
.to-top > img:nth-child(1){
    display: inline-block;
}
.to-top > img:nth-child(2){
    display: none;
}
.to-top:hover > img:nth-child(1){
    display: none;
}
.to-top:hover > img:nth-child(2){
    display: inline-block;
}
</style>
<script>
import CommonJs from '~/static/js/common.js'

export default {
    data () {
        return {
            qq: 'https://wpa.qq.com/msgrd?v=3&uin=' + CommonJs.qq + '&site=qq&menu=yes',
            qq1: 'https://wpa.qq.com/msgrd?v=3&uin=' + CommonJs.qq1 + '&site=qq&menu=yes',
            qq2: 'https://wpa.qq.com/msgrd?v=3&uin=' + CommonJs.qq2 + '&site=qq&menu=yes',
            qq3: 'https://wpa.qq.com/msgrd?v=3&uin=' + CommonJs.qq3 + '&site=qq&menu=yes',
            hotTel: 'tel:' + CommonJs.hotTel1,
            showTop: false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.scrollListener);
    },
    methods: {
        toTop () {
            document.documentElement.scrollTop = 0;
        },
        scrollListener (e) {
            if (e.target.documentElement.scrollTop < 50){
                this.showTop = false;
            } else {
                this.showTop = true;
            }
        }
    }
}
</script>


