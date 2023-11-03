let cursorOuter = document.getElementById("cursor-outer");
let cursorInner = document.getElementById("cursor-inner");
let links = document.querySelectorAll("a, button, .button");

document.addEventListener("mousemove", function (e) {
    cursorInner.style.transform =
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
        cursorOuter.classList.add("cursor-outer-hover");
        cursorInner.classList.add("cursor-inner-hover");
    });
    links[i].addEventListener("mouseout", () => {
        cursorOuter.classList.remove("cursor-outer-hover");
        cursorInner.classList.remove("cursor-inner-hover");
    });
}

if (document.title === "GRAB Tools") {
    const currentTime = document.getElementById("currentTime");
    const currentState = document.getElementById("currentState");
    const time = new Date();

    const options = { timeZone: 'Australia/Melbourne' };
    const localTime = time.toLocaleString('en-US', options);

    let hour = new Date(localTime).getHours();

    if (hour >= 17 && hour < 24) {
        currentState.innerHTML = "awake";
    } else if (hour >= 9 && hour < 17) {
        currentState.innerHTML = "working";
    } else {
        currentState.innerHTML = "sleeping";
    }
    let minutes = new Date(localTime).getMinutes();
    currentTime.innerHTML = `${hour < 12 ? hour : hour - 12}:${minutes < 10 ? '0' + minutes : minutes} ${hour >= 12 ? "PM" : "AM"}`;
}

const ads = document.getElementById("ads");
setInterval(() => {
    if (window.innerWidth > 1200) {
        ads.innerHTML = `
        <div id="ads-overlay-r">
            <amp-ad
                layout="fixed"
                width="120"
                height="400"
                type="adsense"
                data-ad-client="ca-pub-2378042345376266"
                data-ad-slot="6059350775">
            </amp-ad>
        </div>
        <div id="ads-overlay-l">
            <amp-ad
                layout="fixed"
                width="120"
                height="400"
                type="adsense"
                data-ad-client="ca-pub-2378042345376266"
                data-ad-slot="6059350775">
            </amp-ad>
        </div>
        `;
    } else {
        ads.innerHTML = "";
    }
    console.log("ads");
}, 1000);
