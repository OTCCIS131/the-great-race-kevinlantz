$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            racing: false,
            winner: null,
            playerA: 0,
            playerB: 0,
            count: 0,
            count1: 0,
        },
        computed: {
            disabled() {
                return this.racing
            }
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
                }, 40)

            },
            progressplayer() {
                this.playerA += (Math.random() >= .5)
                this.playerB += (Math.random() >= .5)
                this.checkvictory()
            },

            checkvictory() {
                if (this.playerA == this.playerB) {
                    return
                }
                if (this.playerA >= 80) {
                    this.declareVictory("playerA")
                    $("#playerA").animate({
                        left: "33%",
                        height: '84vh',
                        width: '84vh',
                        position: "relative",
                        top: "10%",
                    });

                    $("#playerB").animate({
                        left: "33%",
                        height: '0vh',
                        width: '0vh',
                        position: "relative",
                    });
                    this.count1++
                }

                if (this.playerB >= 80) {
                    this.declareVictory("playerB")
                    $("#playerB").animate({
                        left: "33%",
                        height: '84vh',
                        width: '84vh',
                        position: "relative",
                        top: "15%",
                    });
                    $("#playerA").animate({
                        left: "33%",
                        height: '0vh',
                        width: '0vh',
                        position: "relative",
                    });
                    this.count++
                }

            },

            declareVictory(player) {
                clearInterval(this.interval)
                this.winner = player
                this.racing = false
            },

            restart() {
                this.racing = false
                this.winner = null
                this.playerA = 0
                this.playerB = 0

                $("#playerB").animate({
                    width: "15vw",
                    height: "15vw",
                    position: "relative",
                    top: "55vh"
                });

                $("#playerA").animate({
                    width: "15vw",
                    height: "10vw",
                    position: "relative",
                    top: "75vh"
                });
            },
        }
    })
});