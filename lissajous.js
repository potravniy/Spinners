window.onload = function(){
    (function() {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
    })();
    start_1x1();
    start_1x2();
    start_2x3();
    start_3x4();

    function start_1x1(){
        var ctx = document.querySelector(".lissajous__canvas--1x1").getContext("2d");
        requestAnimationFrame(draw_1x1);
        function draw_1x1(timestamp) {
            ctx.clearRect(1, 1, 138, 138);
            ctx.beginPath();
            ctx.lineWidth="2";
            ctx.strokeStyle="#fff";
            for (var step = 0; step <= 120; step++) {
                var x = 70 + 50 * Math.cos(1 * Math.PI * step / 60);
                var y = 70 + 50 * Math.sin(1 * Math.PI * step / 60 + timestamp/300);
                if (step === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            requestAnimationFrame(draw_1x1);
        }
    }
    function start_1x2(){
        var ctx = document.querySelector(".lissajous__canvas--1x2").getContext("2d");
        requestAnimationFrame(draw_1x2);
        function draw_1x2(timestamp) {
            ctx.clearRect(1, 1, 138, 138);
            ctx.beginPath();
            ctx.lineWidth="2";
            ctx.strokeStyle="#fff";
            for (var step = 0; step <= 120; step++) {
                var x = 70 + 50 * Math.cos(1 * Math.PI * step / 60);
                var y = 70 + 50 * Math.sin(2 * Math.PI * step / 60 + timestamp/300);
                if (step === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            requestAnimationFrame(draw_1x2);
        }
    }
    function start_2x3(){
        var ctx = document.querySelector(".lissajous__canvas--2x3").getContext("2d");
        requestAnimationFrame(draw_2x3);
        function draw_2x3(timestamp) {
            ctx.clearRect(1, 1, 138, 138);
            ctx.beginPath();
            ctx.lineWidth="2";
            ctx.strokeStyle="#fff";
            for (var step = 0; step <= 120; step++) {
                var x = 70 + 50 * Math.cos(2 * Math.PI * step / 60);
                var y = 70 + 50 * Math.sin(3 * Math.PI * step / 60 + timestamp/300);
                if (step === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            requestAnimationFrame(draw_2x3);
        }
    }
    function start_3x4(){
        var ctx = document.querySelector(".lissajous__canvas--3x4").getContext("2d");
        requestAnimationFrame(draw_3x4);
        function draw_3x4(timestamp) {
            ctx.clearRect(1, 1, 138, 138);
            ctx.beginPath();
            ctx.lineWidth="2";
            ctx.strokeStyle="#fff";
            for (var step = 0; step <= 120; step++) {
                var x = 70 + 50 * Math.cos(3 * Math.PI * step / 60);
                var y = 70 + 50 * Math.sin(4 * Math.PI * step / 60 + timestamp/300);
                if (step === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            requestAnimationFrame(draw_3x4);
        }
    }
}