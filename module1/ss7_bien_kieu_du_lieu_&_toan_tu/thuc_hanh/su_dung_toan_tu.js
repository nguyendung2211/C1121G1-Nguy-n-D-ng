function showMessage() {
    alert("xin chao!");
}
let inputWidth;
let inputHeight;

inputWidth=prompt('nhập chiều rộng');
inputHeight=prompt('nhập chiều cao');
let Width= parseInt(inputWidth);
let Height= parseInt(inputHeight);
let area = (Width * Height);
document.write('S = '+ area);