

let a = window.prompt("Nhập số bất kỳ");
if (!isNaN(a)) {
    if (a % 2 === 0) {
        console.log("Số chẵn:", a);
    } else {
        console.log("Số lẻ:", a);
    }
} else {
    console.log("Giá trị không hợp lệ. Vui lòng nhập một số.");
}