<template>
    <div class="number" ref="number_target">{{changeNum}}</div>
</template>
<script>
// 
export default {
    props: ['number', 'init'],
    data () {
        return {
            timer: null,
            rate: 0.3,  
            left: 1,  
            changeNum: 0,  
            firstNum: 0,
            firstTime: 1,
            timeDuration: 10,
            numAnim: false,
            scrollDistance: 0,
            targetTop: 0
        }
    },
    watch: {
        numAnim: function (val, oldVal) {
            this.changeNum = this.firstNum;
            this.firstTime = 1;
            this.left = 1;
            this.setTimeDuration();
            this.interval();
        }
    },
    mounted () {
        this.targetTop = this.$refs.number_target.getBoundingClientRect().top - (this.$refs.number_target.getBoundingClientRect().bottom - this.$refs.number_target.getBoundingClientRect().top) - 500;

        this.firstNum = Number(this.number);
        this.changeNum = this.firstNum;
        if (this.init) {
            this.setTimeDuration();
            this.interval();
        } else {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    methods: {
        numberUp () {
            if(this.left === 0) {  // 如果剩余差值为0，则结束循环调用  
                clearInterval(this.timer);  
            } else {  
                if (this.firstTime === 1) {  // 为1时，为第一次调用  
                    this.changeNum = Math.ceil(this.firstNum * this.rate);   
                    this.left = this.firstNum - this.changeNum;  
                    this.firstTime = 0; // 设置标志为0  
                } else {  
                    this.changeNum += Math.ceil(this.left * this.rate); 
                    this.setTimeDuration(); 
                    this.left = this.firstNum - this.changeNum;  
                }
            }  
        },
        interval () {
            this.timer = setInterval(this.numberUp, this.timeDuration);
        },
        setTimeDuration () {
            if (this.changeNum > 10000) {
                this.timeDuration = 50;
            } else if (this.changeNum > 8000) {
                this.timeDuration = 50;
            } else if (this.changeNum > 6000) {
                this.timeDuration = 60;
            } else if (this.changeNum > 5000) {
                this.timeDuration = 80;
            } else if (this.changeNum > 4000) {
                this.timeDuration = 90;
            } else if (this.changeNum > 1000) {
                this.timeDuration = 100;
            } else {
                this.timeDuration = 120;
            }
        },
        handleScroll (e) {
            this.scrollDistance = e.target.scrollingElement.scrollTop;
            if (this.scrollDistance > this.targetTop) {
                this.numAnim = true;
            } else {
                this.numAnim = false;
            }
        }
    }
}
</script>
<style>
.number{
    display: inline-block;
}
</style>


