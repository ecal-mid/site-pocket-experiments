/* custom.js */

var wrapper = document.getElementById("wrapper"),
    header = document.getElementById("top"),
    footer = document.getElementById("bottom"),
    innerHeight = window.innerHeight;

function scrollAnimation() {
    var scrollTop   = wrapper.scrollTop;
    if(scrollTop <= innerHeight) {
        footer.style.top = "-10000px";
        header.style.top = "";
        header.style.opacity = Math.max(mapValue(scrollTop, 0, innerHeight * 90 / 100, 1, 0), 0);
        header.style.webkitTransform = "translateY(" + Math.min(Math.floor(mapValue(scrollTop, 0, innerHeight, 0, -innerHeight * 20 / 100)), 0) + "px)";
    } else if(scrollTop >= wrapper.scrollHeight - 2 * innerHeight) {
        header.style.top = "-10000px";
        footer.style.top = "";
        footer.style.opacity = Math.max(mapValue(scrollTop, wrapper.scrollHeight - 2 * innerHeight, wrapper.scrollHeight - innerHeight, 0, 1), 0);
        footer.style.webkitTransform = "translateY(" + Math.max(Math.floor(mapValue(scrollTop, wrapper.scrollHeight - 2 * innerHeight, wrapper.scrollHeight - innerHeight, innerHeight * 20 / 100, 0)), 0) + "px)";
    } else {
        header.style.top = "-10000px";
        footer.style.top = "-10000px";
    }

    requestAnimationFrame(scrollAnimation);
}

requestAnimationFrame(scrollAnimation);

window.addEventListener('resize', function() {
    innerHeight = window.innerHeight;
});

function mapValue(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
