// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm.
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.
let products = [
    new Product(1, "Laptop Dell XPS", 35000000, 10, "Electronics", true),
    new Product(2, "iPhone 15 Pro", 28000000, 5, "Electronics", true),
    new Product(3, "Samsung Galaxy S24", 25000000, 0, "Electronics", false),
    new Product(4, "Mouse Logitech", 500000, 50, "Accessories", true),
    new Product(5, "Keyboard Mechanics", 1500000, 20, "Accessories", true),
    new Product(6, "Headphone Sony", 3000000, 15, "Accessories", true),
    new Product(7, "USB Hub", 200000, 0, "Accessories", false)
];
console.log("Danh sách sản phẩm:", products);

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
let productInfo = products.map(function(p) {
    return { name: p.name, price: p.price };
});
console.log("Tên và giá sản phẩm:", productInfo);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0).
let availableProducts = products.filter(function(p) {
    return p.quantity > 0;
});
console.log("Sản phẩm còn hàng:", availableProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không.
let hasExpensiveProduct = products.some(function(p) {
    return p.price > 30000000;
});
console.log("Có sản phẩm giá trên 30.000.000 không?", hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không.
let allAccessoriesAvailable = products
    .filter(function(p) {
        return p.category === "Accessories";
    })
    .every(function(p) {
        return p.isAvailable;
    });
console.log("Tất cả phụ kiện đều đang bán?", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price * quantity
let totalStockValue = products.reduce(function(total, p) {
    return total + (p.price * p.quantity);
}, 0);
console.log("Tổng giá trị kho hàng:", totalStockValue);

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("--- Thông tin sản phẩm (for...of) ---");
for (let p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9: dùng for...in để:
// • In ra tên thuộc tính
// • In ra giá trị tương ứng
console.log("--- Chi tiết một sản phẩm (for...in) ---");
let sampleProduct = products[0];
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
let sellableProducts = products
    .filter(function(p) {
        return p.isAvailable && p.quantity > 0;
    })
    .map(function(p) {
        return p.name;
    });
console.log("Sản phẩm đang bán và còn hàng:", sellableProducts);
