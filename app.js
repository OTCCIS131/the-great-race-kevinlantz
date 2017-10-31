$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            racing: false,
            winner: null,
            playerA: 0,
            playerB: 0,
            message1: "Corvette WINS!"


        },
        methods: {
            race() {


                if (this.winner) {
                    this.restart()
                    return
                }
                this.racing = true

                this.interval = setInterval(() => {
                    this.progressplayer()
                }, 10)

            },
            progressplayer() {
                this.playerA += (Math.random() >= .9)
                this.playerB += (Math.random() >= .5)
                this.checkvictory()
            },
            checkvictory() {
                if (this.playerA >= 80) {
                    this.declareVictory("PlayerA")
                        // alert("Yellow Corvette WINS")

                }

                if (this.playerB >= 80) {
                    this.declareVictory("PlayerB")
                        // alert("Gray Viper WINS")


                }
            },

            declareVictory(player) {
                clearInterval(this.interval)
                this.winner = player
            },
            restart() {
                this.racing = false
                this.winner = null
                this.playerA = 0
                this.playerB = 0
            },


        }
    })
});