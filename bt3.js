let a = window.prompt("nhập vào một số để hiển thị ngày trong tuần tương ứng")
for (!isNaN(a); let a >= 2 && a <= 8) {
    if (a === 2) {
        console.log("Monday")
        break;
    }
    if (a === 3) {
        console.log("Tuesday")
        break
    } if (a === 4) {
        console.log("Wednesday")
        break
    } if (a === 5) {
        console.log("Thursday")
        break
    } if (a === 6) {
        console.log("Friday")
        break
    } if (a === 7) {
        console.log("Satusday")
        break
    } if (a === 8)
        console.log("Sunday")
    break;

}