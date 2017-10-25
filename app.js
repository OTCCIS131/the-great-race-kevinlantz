$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            racing: false,
            winner: null,
            playerA: 0,
            playerB: 0,
            tick: 0,
            interval: null,
            bttn: false
        },

        methods: {
            race() {
                this.visable()
                if (this.winner) {
                    this.restart()
                    return
                }
                this.racing = true
                this.interval = setInterval(() => {
                    this.progressplayer()
                }, 20)

            },
            progressplayer() {
                this.tick++
                    this.playerA += (Math.random() >= .5) ? 1 : 0
                this.playerB += (Math.random() >= .5) ? 1 : 0
                this.checkvictory()
            },
            checkvictory() {
                if (this.playerA == this.playerB) return
                if (this.playerA >= 90) {
                    this.declareVictory("PlayerA")
                }

                if (this.playerB >= 90) {
                    this.declareVictory("PlayerB")
                }
            },
            declareVictory(player) {
                clearInterval(this.interval)
                this.interval = null
                this.racing = false
                this.winner = player
            },
            restart() {
                this.racing = false
                this.winner = null
                this.playerA = 0
                this.playerB = 0
                this.tick = 0

            },
            visable() {
                this.bttn = !this.bttn
            }

        }
    })
});
window.onload = function() {
    document.getElementById("audio").play();
}