<template>
    <div class="online">
        <div class="online-button" @click="openOnline" v-show="!showOnlineLevel1 && !showOnlineLevel2">
            <div class="online-click">点我</div>
            <div class="online-surprise">有惊喜</div>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div :class="onlineClass">
            <div class="online-main-content">
                <img src="/images/online/online.png" alt="">
                <div class="contact-method">
                    <el-input placeholder="请留下您的联系方式方便管家联系" v-model="tel">
                        <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
                    </el-input>
                    <div class="method-submit">预约顾问</div>
                </div>
                <div class="online-close" @click="closeOnline"><i class="el-icon-close"></i></div>
            </div>
        </div>
    </div>
</template>
<style>
.online{
    position: fixed;
    z-index: 10001;
}
.online > .online-button{
    background: linear-gradient(180deg, #e3c7a3 30%, #a5896b);
    box-shadow: 0 7px 9px 0 rgba(43, 45, 50, .25);
    width: 118px;
    height: 80px;
    position: fixed;
    bottom: 50px;
    left: 0;
    cursor: pointer;
    z-index: 99;
    padding-left: 16px;
    padding-top: 14px;
    border-radius: 0 40px 40px 0;
}
.online > .online-button > .online-click{
    height: 26px;
    color: #544636;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 14px;
}
.online > .online-button > .online-surprise{
    height: 20px;
    color: #544636;
    font-size: 20px;
}
.online > .online-button > i{
    position: absolute;
    top: 30px;
    right: 16px;
    font-size: 25px;
    color: #624f3a;
}
.online > .online-content{
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, .8);
    height: 140px;
    width: 100%;
    z-index: 20000;
}
.online > .online-content-out{
    opacity: 0;
    transition: .3s ease-in-out;
    transform: translate3d(-100%, 0, 0);
}
.online > .online-content-in{
    opacity: 1;
    transition: .3s ease-in-out;
    transform: translateZ(0);
}
.online > .online-content .online-main-content{
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.online > .online-content .online-main-content img{
    position: absolute;
    width: 100%;
    bottom: -140px;
}
.online > .online-content .online-main-content > .contact-method{
    position: absolute;
    left: 550px;
    top: 50px;
    width: 380px;
    height: 42px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
.online > .online-content .online-main-content .el-input{
    width: 270px;
}
.online > .online-content .online-main-content  .method-submit{
    width: 104px;
    border-radius: 4px;
    line-height: 42px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    background: linear-gradient(to bottom right, #dabd97, #8f7960);
    box-shadow: 0 7px 9px 0 rgba(43, 45, 50, .25);
    cursor: pointer;
}
.online > .online-content .online-close{
    width: 22px;
    height: 22px;
    background-color: #898787;
    padding-top: 8px;
    padding-left: 8px;
    position: absolute;
    right: 0;
    top: 8px;
    cursor: pointer;
    border-radius: 50%;
    opacity: .7;
}
.online > .online-content .online-close > i{
    font-size: 20px;
    color: #cab394;
    position: absolute;
    top: 1.5px;
    left: 1.5px;
}
</style>
<script>
export default {
    data () {
        return {
            tel: '',
            // 滚动时打开关闭
            showOnlineLevel1: false,
            // 按关闭按钮关闭，滚动也将不会打开关闭
            showOnlineLevel2: false,
            scrollPre: 0,
            scrollLast: 0,
            scrollArr: []
        }
    },
    computed: {
        onlineClass () {
            return {
                'online-content': true,
                'online-content-in': this.showOnlineLevel1 || this.showOnlineLevel2,
                'online-content-out': !this.showOnlineLevel1 || !this.showOnlineLevel2
            }
        },
        scrollDistance () {
            this.scrollPre = this.scrollArr[0];
            this.scrollLast = this.scrollArr[this.scrollArr.length - 1];
            if (this.scrollArr.length === 0) {
                return 0;
            } else {
                return this.scrollLast - this.scrollPre;
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
        this.timer = setInterval(() => {
            // console.log(this.scrollDistance);
            if (this.scrollDistance > 100){
                this.showOnlineLevel1 = true;
            }
            if (this.scrollDistance < -100) {
                this.showOnlineLevel1 = false;
            }
            this.scrollArr.length = 0;
        }, 1000);
    },
    methods: {
        handleScroll (e) {
            this.scrollArr.push(e.target.scrollingElement.scrollTop);
        },
        closeOnline () {
            window.removeEventListener('scroll', this.handleScroll);
            // 差点忘记清除数据中的数据
            clearInterval(this.timer);
            this.timer = null;
            this.scrollArr.length = 0;
            this.showOnlineLevel1 = false;
            this.showOnlineLevel2 = false;
        },
        openOnline () {
            this.showOnlineLevel2 = true;
            console.log(this.showOnlineLevel1, this.showOnlineLevel2);
        }
    }
}
</script>


