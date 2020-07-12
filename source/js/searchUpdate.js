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

document.querySelector("#js_updateDetail").addEventListener("click", function() {
    popupFunction("#js_popupDetail");
});

//日曆套件
$(function() {
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        opens: "right",
        locale: {
            format: "YYYY-MM-DD",
            separator: " ~ ",
            applyLabel: "確定",
            cancelLabel: "清除",
            fromLabel: "開始日期",
            toLabel: "結束日期",
            customRangeLabel: "自訂日期區間",
            daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            firstDay: 1
        }
    });
    $('input[name="datefilter"]').on("apply.daterangepicker", function(ev, picker) {
        $(this).val(
            picker.startDate.format("MM/DD/YYYY") +
            " - " +
            picker.endDate.format("MM/DD/YYYY")
        );
    });
    $('input[name="datefilter"]').on("cancel.daterangepicker", function(ev, picker) {
        $(this).val("");
    });
});