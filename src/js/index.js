let priceFull,
    coming;
let num = document.getElementById("num");
let route = document.getElementById("route").value;
let time = document.getElementById("time").value;
let priceOne = 700;
let priceTwo = 1200;
let timeFull = 50;

num.addEventListener("input",
    function (e) {
        this.value = this.value.replace(/[^\d.]/g, "");
    }
);

num.onblur = function () {
    num = this.value;
    priceFull = priceOne * num;
};

document.getElementById("btn").onclick = function () {
    time = document.getElementById("time").value.substr(0, 5);
    let hours = Number(time.substr(0, 2) * 60);
    let minutes = Number(Number(time.substr(3, 5)) + timeFull + hours);
    let minutes1 = minutes % 60;
    let hours1 = (minutes - minutes1) / 60;
    if (minutes1 < 10) minutes1 = "0" + minutes1;
    if (hours1 < 10) hours1 = "0" + hours1;
    coming = hours1 + ":" + minutes1;

    document.getElementById("description").innerHTML =
        "<p>\n" +
        "Вы выбрали " + num + " билета по маршруту " + route + " стоимостью " + priceFull +
        ". Это путешествие займет у вас " + timeFull + " минут. " +
        "Теплоход отправляется в " + time + ", а прибудет в " + coming + "</p>";
};