    function close(x, y) {
        document.querySelector(x).classList.toggle(y);
      }
      let btn = document.querySelector(".navbar-toggler");
      btn.onclick = function () {
        close(".icon1", "dis1");
        close(".icon2", "dis2");
        close(".icon3", "dis3");
      };