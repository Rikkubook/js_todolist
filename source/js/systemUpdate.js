//跳窗
function popupFunction(e) {
    let popup = document.querySelector(e);
    let close = document.querySelectorAll(".m_popup__close");

    popup.classList.toggle("m_popup--show");

    popup.onclick = function(e) {
        if (e.target == this) {
            popup.classList.toggle("m_popup--show");
        }
    };

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            popup.classList.toggle("m_popup--show");
        };
    }
}

document.querySelector("#js_updateProcess").addEventListener("click", function() {
    popupFunction("#js_popupProcess");
});

document.querySelector("#js_error").addEventListener("click", function() {
    popupFunction("#js_popupError");
});