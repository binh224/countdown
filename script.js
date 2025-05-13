const target_mili_sec = new Date("June 26, 2025 00:00:00").getTime();
const start_mili_sec = new Date().getTime(); 

function timer() {
    const now = new Date().getTime();
    let remaining_sec = Math.floor((target_mili_sec - now) / 1000);

    if (remaining_sec <= 0) {
        document.querySelector(".timer").innerHTML = "<h2>Đã đến ngày thi! Chúc bạn may mắn!</h2>";
        document.querySelector(".progress-fill").style.width = "100%";
        return;
    }

    const day = Math.floor(remaining_sec / (3600 * 24));
    const hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    const min = Math.floor((remaining_sec % 3600) / 60);
    const sec = Math.floor(remaining_sec % 60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;

    const total = target_mili_sec - start_mili_sec;
    const done = now - start_mili_sec;
    const percent = Math.min((done / total) * 100, 100);
    document.querySelector(".progress-fill").style.width = `${percent}%`;
}

setInterval(timer, 1000);
