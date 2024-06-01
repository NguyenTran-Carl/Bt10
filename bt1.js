
// Yêu cầu người dùng nhập vào năm sinh
let a = window.prompt("Nhập Năm Sinh của Bạn")

// Kiểm tra xem người dùng đã nhập số hay không
if (a) {
    // Nếu là số, tính tuổi và hiển thị

    let tuoi = 2024 - a;
    console.log("số tuổi", tuoi);
} else {
    // Nếu không phải số, hiển thị giá trị không hợp lệ
    console("Giá trị không hợp lệ. Vui lòng nhập năm sinh là một số.");
}