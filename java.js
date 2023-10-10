var clicks = 0;
let CPS = 0;
var started = false;
let sec;
let canclick = true;
document.body.classList.toggle("dark");
document.getElementById("mouseField").classList.toggle("darkBorder");



function startClicking() {

    if (started == false) {
        started = true;
        startCpsClock();
        clicks = 0;
        totalClicks = 0;
        // var element = document.getElementsByClassName("mouseField");
        // element.classList.add("clicking");
        document.getElementById("mouseField").classList.add("clicking");
    }
    if (canclick == true) {
        mouseInput();
    }

};

function mouseInput() {
    clicks++;
    totalClicks++;
    document.getElementById("counter").innerHTML = "CPS: " + CPS;
    document.getElementById("totalClicks").innerHTML = "Total: " + totalClicks;
};
function startCpsClock() {
    console.log("Clicking started");
    sec = 0;
    const myTimeout = setTimeout(countCPS, 1000);
};


function countCPS() {
    CPS = clicks;
    clicks = 0;
    if (sec < 2) {
        console.log("another second passed");
        const myTimeout = setTimeout(countCPS, 1000);
        sec++;
    } else {
        canclick = false;
        document.getElementById("counter").innerHTML = "Average CPS: " + Math.round(totalClicks / 3 * 100) / 100;
        const restartCooldown = setTimeout(restart, 1000);
    }
};

function restart() {
    console.log("Ready to click again")
    started = false;
    canclick = true;
}

function changeTheme() {

    document.body.classList.toggle("dark");

    document.getElementById("mouseField").classList.toggle("#darkBorder");

    // console.log(document.getElementById("lightEnabled?").checked);

    // if (document.getElementById("lightEnabled?").checked = false) {
    //     document.body.
    // } else {

    // }


}
