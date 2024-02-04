document.addEventListener("DOMContentLoaded", function () {
    var D = document;
    var d = D.body.style;
    d.margin = 0;
    d.overflow = "hidden";

    var c = window, d = c.innerWidth, e = c.innerHeight, g = D.body.children[0], i = d / 2, j = e / 2;
    g.width = d;
    g.height = e;

    var k = g.getContext("2d");
    k.globalAlpha = 0.3;

    var l = Math, m = l.random, n = l.sin, o = l.floor, p = 10, q = [], r = 0, s = 0.1, V = 500, W = 190, Q = 0.3;

    function E(n, f) {
        g.addEventListener(n, f, false);
    }

    function u(a) {
        a.x = (m() * d - d * 0.5) * p;
        a.y = (m() * e - e * 0.5) * p;
        a.a = p;
        a.b = 0;
        a.c = 0;
    }

    function createParticles() {
        for (var v = 0, w; v < V; v++) {
            w = {};
            u(w);
            q.push(w);
        }

        setInterval(function() {
            k.fillStyle = "#000";
            k.fillRect(0, 0, d, e);

            for (var h = 0; h < V; h++) {
                var b = q[h];
                var x = b.x / b.a, y = b.y / b.a, z = 1 / b.a * 5 + 1;
                var A = n(Q * h + r) * 64 + W, B = n(Q * h + 2 + r) * 64 + W, C = n(Q * h + 4 + r) * 64 + W;

                if (b.b != 0) {
                    k.strokeStyle = "rgb(" + o(A) + "," + o(B) + "," + o(C) + ")";
                    k.lineWidth = z;
                    k.beginPath();
                    k.moveTo(x + i, y + j);
                    k.lineTo(b.b + i, b.c + j);
                    k.stroke();
                }

                b.b = x;
                b.c = y;
                b.a -= s;

                if (b.a < s || b.b > d || b.c > e) {
                    u(b);
                }
            }

            r += 0.1;
        }, 25);
    }

    createParticles();

    document.getElementById("startButton").addEventListener("click", function() {
        s *= 10;

        setTimeout(function() {
            window.location.href = "main.html";
        }, 1000);

    });

    window.onresize = function() {
        location.reload();
    };
});