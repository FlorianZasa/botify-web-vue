<template>
    <div id="circle" :class=" active== 'inactive' ? 'inactive' : 'active'">
        VOR {{this.timer}} SEK
    </div>
</template>


<script>
    export default {
        name: 'Countdown',
        data() {
            return {
                timer: this.startTime
            }
        },
        props: {
            startTime: Number,
            active: String,
        },
        methods: {
            countDownTimer () {
                setTimeout(() => {
                    this.timer += 1
                    this.countDownTimer()
                }, 1000)
            }
            
        },
        created () {
            this.countDownTimer()
        }


    }

</script>

<style scoped>
#circle {
        width: 50%;
        padding-left: 2%;
        padding-right: 2%;
        line-height: 40px;
        border-radius: 10%;
        font-size: 20px;
        text-align: center;
        align-content: center;
        background: rgb(255, 255, 255);
        margin: 0 auto;
}

.active {
    color: rgb(23, 212, 23);
}
.inactive {
    color: rgb(241, 0, 0);
}
</style>