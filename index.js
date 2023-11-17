(() => {
  const btn = document.querySelector(".btn");

  // init
  window.onload = notify();

  // btn click init notify
  btn.onclick = () => notify();

  function notify() {
    Notification.requestPermission()
      .then((status) => {
        if (status === "default") {
          throw "Persmision denied";
        } else if (status === "granted") {
          activateNotify();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function activateNotify() {
    const getHours = 1000 * 60 * 60;
    const normalHours = getHours / 60 / 60;

    const img = "./assets/icon/stopwatch.svg";
    const text = `Прошло ${normalHours} часа! Можно разомяться.`;
    const notification = new Notification("Время размяться", {
      body: text,
      icon: img,
    });

    // setInterval(() => {}, 1000 * 1.3);
  }
})();
