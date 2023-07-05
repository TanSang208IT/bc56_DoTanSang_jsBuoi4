/**BÀI TẬP 1: QUẢN LÝ SINH VIÊN
 * INPUT:   NHẬP điểm 3 môn Văn, Toán, Anh. Chọn khu vực và đối tượng ưu tiên
 * Xứ lý thông tin: 
 * Nếu có 1 môn 0đ => thông báo rớt
 * Nếu cả 3 môn trên 0đ, xét đối tượng + khu vực ưu tiên
 * công thức tính Tổn điểm = Anh + Toán + Văn + đối tương  + khu vực
 * OUTPUT: xuất điểm tổng cho người dùng
 * 
 */
 const khong = "khongKhuVucUuTien";
 const A = "khuVucA";
 const B = "khuVucB";
 const C = "khuVucC";

 function khuVucUuTien (khuVuc){
    switch (khuVuc){
        case khong: {
            return 0;
        }
        case A: {
            return 2;
        }
        case B: {
            return 1;
        }
        case C: {
            return 0.5;
        }
    }
}

 const khongDoiTuong = "khongDoiTuongUuTien";
 const doiTuong1 = "doiTuong1";
 const doiTuong2 = "doiTuong2";
 const doiTuong3 = "doiTuong3";

 function doiTuongUuTien (doiTuong){
    switch (doiTuong){
        case khongDoiTuong: {
            return 0;
        }
        case doiTuong1: {
            return 2.5;
        }
        case doiTuong2: {
            return 1.5;
        }
        case doiTuong3: {
            return 1;
        }
    }
 }

 function diemTuyenSinh() {
    var khuVuc = document.getElementById("khuVuc").value;
    console.log(khuVuc);
    var doiTuong = document.getElementById("doiTuong").value;
    console.log(doiTuong);
var diemKhuVuc = khuVucUuTien(khuVuc);
var diemdoiTuong = doiTuongUuTien(doiTuong);
var diemAnh = document.getElementById("anh").value * 1;
console.log(diemAnh);
var diemToan = document.getElementById("toan").value * 1;
console.log(diemToan);
var diemVan = document.getElementById("van").value * 1;
console.log(diemVan);

if (diemAnh > 0 &&  diemToan > 0 && diemVan > 0){
    var tongDiem = diemAnh + diemToan + diemVan + diemKhuVuc + diemdoiTuong;
    console.log(tongDiem);
} else {
    alert ("Tạch rồi nhé!")
    var tongDiem = "Tạch";
}
document.querySelector(".diemThiTuyenSinh").innerHTML = "Tổng điểm của bạn là " + tongDiem;
 }

 /**BÀI TẬP 2: TÍNH TIỀN ĐIỆN
  * input: nhập dữ liệu số Kw điện tiêu thụ trong tháng
  * Xử lý thông tin: 
  * 1. tiền điện soKw<=50 = 500*soKw
  * 2. tiền điện 50<soKw<=100 = 500*50 + (soKw - 50)*650
  * 3. tiền điện 100<soKw<=200 = 500*50 + 650*50 + (soKw -100)*850
  * 4. tiền điện 200<soKw<=350 = 500*50 + 650*50 + 850*100 + (soKw-200)*1100
  * 5. tiền điện 350<soKw = 500*50 + 650*50 + 850*100 + 1100*150 + 1300*(soKw-350) 
  * OUTPUT: xuất tổng số tiền điện 
  */

 function tongTienDien () {
    var soKw = document.getElementById("soKw").value * 1;
    var tongTien = 0;
if (soKw <= 50){
    tongTien = soKw * 500;
} else if (soKw > 50 && soKw <= 100){
    tongTien = 500 * 50 + (soKw-50) * 650;
}else if (soKw > 100 && soKw <= 200) {
    tongTien = 500 * 50 + 650 * 50 + (soKw - 100) * 850;
} else if (soKw > 200 && soKw <= 350) {
    tongTien = 500 * 50 + 650 * 50 + 850 * 100 + (soKw - 200) * 1100;
} else if (soKw > 350){
    tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soKw - 350) * 1300;
} else {
    alert("Nhập đầy đủ đúng giúp em!")
}
document.querySelector(".tongTienDien").innerHTML = "Tổng tiền điện của nhà bạn tháng này là " + tongTien + "VND";
 }

 /**BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
  *     INPUT: nhập dữ liệu tổng thu nhập trong năm và số người phụ thuộc
  * XỬ LÝ THÔNG TIN: thính thu nhập chịu thuế = tổng thu nhập - 4tr - số người phụ thuộc * 1.6tr
  * 1. thu nhập chịu thuế < 60tr thì không phải chịu thuế suất
  * 2. thu nhập chịu thuế > 60 thì tính thuế suất theo bảng đề bài cho
  * OUTPUT: xuất tổng thuế suất người dùng phải trả
  * 
  */

 function tinhThueSuat() {
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    var thueSuat = 0;
    if (thuNhapChiuThue < 60000000) {
        alert("Bạn không cần phải đóng thuế nhé!")
    }else if (thuNhapChiuThue == 60000000 ){
        thueSuat = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        thueSuat = thuNhapChiuThue * 0.1;
    }else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        thueSuat = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thueSuat = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thueSuat = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000 ) {
        thueSuat = thuNhapChiuThue * 0.3;
    } else {
        thueSuat = thuNhapChiuThue * 0.35;
    }
document.querySelector(".thueSuat").innerHTML = "Số tiền bạn phải đóng thuế là " + thueSuat;
 }
 
 /**BÀI TẬP 4: TÍNH TIỀN CÁP
  * INPUT: nhập loại khách hàng, nếu khách hàng là nhà dân thì ẩn khung số kết nối, nếu khách hàng là doanh nghiệp thì hiện ô số kết nối để nhập số kjết nối đăng ký
  * XỬ LÝ THÔNG TIN: 
  * 1. nhà dân = phí xử lý hoá đơn + phí dịch vụ cơ bản + thuê kênh cao cấp * số kênh
  * 2. doanh nghiệp = phí xử lý hoá đơn + phí dịch vụ cơ bản + kết nối thêm + thuê kênh cao cấp * số kênh
  * OUTPUT: xuất tổng số tiền hoá đơn ra cho khách hàng
  */

 const nhaDan = "nhaDan";
 const doanhNghiep = "doanhNghiep";

 function xuLiHoaDon (loaiKhachHang){
    switch (loaiKhachHang){
        case nhaDan: {
            return 4.5;
            console.log(XuLiHoaDon);
        }
        case doanhNghiep: {
            return 15;
            console.log(XuLiHoaDon);
        }
    }
 }
 function xuLiCoBan (loaiKhachHang){
    switch (loaiKhachHang){
        case nhaDan: {
            return 20.5;
            console.log(XuLiCoBan);
        }
        case doanhNghiep: {
           return 75;
            console.log(XuLiCoBan);
        }
    }
 }
 function thueKenhCaoCap(loaiKhachHang){
    switch (loaiKhachHang) {
        case nhaDan: {
            return 7.5;
            console.log(ThueKenhCaoCap);
        }
        case doanhNghiep: {
            return 50;
            console.log(ThueKenhCaoCap);
        }
    }
 }

 function anSoKetNoi () {
    var soKetNoiChoDoanhNghiep = document.getElementById("tongSoKetNoi");
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    console.log(loaiKhachHang);
if (loaiKhachHang == nhaDan){
    soKetNoiChoDoanhNghiep.style.display = "none";
} else {
    soKetNoiChoDoanhNghiep.style.display = "block";
}
 }
 
 anSoKetNoi();

 function tinhTienDichVu () {
var loaiKhachHang = document.getElementById("loaiKhachHang").value;
var phiXuLiHoaDon = xuLiHoaDon (loaiKhachHang);
var phiXuLiCoBan = xuLiCoBan (loaiKhachHang);
var phiThueKenhCaoCap = thueKenhCaoCap (loaiKhachHang);
var soKetNoi = document.getElementById("soKetNoi").value * 1;
console.log(soKetNoi);
var soKenh = document.getElementById("soKenhCaoCap").value * 1;
console.log(soKenh);
var tongHoaDon = 0;

if (loaiKhachHang == nhaDan){
tongHoaDon = phiXuLiHoaDon + phiXuLiCoBan + phiThueKenhCaoCap * soKenh;
} else {
    tongHoaDon = phiXuLiHoaDon + phiXuLiCoBan + 5 * soKetNoi + phiThueKenhCaoCap * soKenh;
}

document.querySelector(".tongTienCap").innerHTML = "Tổng tiền cáp của bạn là " + tongHoaDon + "$";
 }