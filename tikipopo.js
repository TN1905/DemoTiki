var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function ($scope, $interval, $http) {
    
    $scope.categories = [
        { name: 'Dinh dưỡng cho người lớn', isSelected: false },
        { name: 'Cà phê', isSelected: false },
        { name: 'Tai Nghe True Wireless', isSelected: false },
        { name: 'Máy ép trái cây', isSelected: false }
    ];
    $scope.bestsalesfilter = "";
    // Hàm khi chọn danh mục
    $scope.selectCategory = function (category) {
        // Đặt isSelected của tất cả các danh mục về false
        $scope.categories.forEach(function (cat) {
            cat.isSelected = false;
        });
        // Đặt isSelected của danh mục được chọn về true
        category.isSelected = true;
        if (category.name == 'Dinh dưỡng cho người lớn') {
            $scope.bestsalesfilter = "dinhduong";
            console.log($scope.bestsalesfilter);
        } else if (category.name == 'Cà phê') {
            $scope.bestsalesfilter = "caphe";
            console.log($scope.bestsalesfilter);
        } else if (category.name == 'Tai Nghe True Wireless') {
            $scope.bestsalesfilter = "tainghe";
            console.log($scope.bestsalesfilter);
        } else if (category.name == 'Máy ép trái cây') {
            $scope.bestsalesfilter = "mayep";
            console.log($scope.bestsalesfilter);
        }
        // Thực hiện các thao tác khác khi bạn chọn một danh mục
    };

    $scope.maybeCategories = [
        { name: 'Dụng cụ lau nhà khác', isSelected: false },
        { name: 'Nồi cơm nắp gài', isSelected: false },
        { name: 'Camera IP', isSelected: false },
        { name: 'Máy tính khoa học', isSelected: false }
    ];

    $scope.maybefilter = "";

    $scope.selectCategoryMaybe = function (category) {
        // Đặt isSelected của tất cả các danh mục về false
        $scope.maybeCategories.forEach(function (cat) {
            cat.isSelected = false;
        });
        // Đặt isSelected của danh mục được chọn về true
        category.isSelected = true;
        if (category.name == 'Dụng cụ lau nhà khác') {
            $scope.maybefilter = "launha";
            console.log($scope.bestsalesfilter);
        } else if (category.name == 'Nồi cơm nắp gài') {
            $scope.maybefilter = "noicom";
            console.log($scope.bestsalesfilter);
        } else if (category.name == 'Camera IP') {
            $scope.maybefilter = "camera";
            console.log($scope.bestsalesfilter);
        } else if (category.name == 'Máy tính khoa học') {
            $scope.maybefilter = "maytinh";
            console.log($scope.bestsalesfilter);
        }
        // Thực hiện các thao tác khác khi bạn chọn một danh mục
    };

    $scope.thuonghieuCategories = [
        { name: 'Pharmacity Flagship Store', isSelected: false },
        { name: 'La Gourmet', isSelected: false },
        { name: 'Nhà Sách Phương Nam', isSelected: false },
        { name: 'Ariel', isSelected: false }
    ];

    $scope.thuonghieufilter = "";

    $scope.selectCategorythuonghieu = function (category) {
        // Đặt isSelected của tất cả các danh mục về false
        $scope.thuonghieuCategories.forEach(function (cat) {
            cat.isSelected = false;
        });
        // Đặt isSelected của danh mục được chọn về true
        category.isSelected = true;
        if (category.name == 'Pharmacity Flagship Store') {
            $scope.thuonghieufilter = "parmar";
            console.log($scope.thuonghieufilter);
        } else if (category.name == 'La Gourmet') {
            $scope.thuonghieufilter = "gourmet";
            console.log($scope.thuonghieufilter);
        } else if (category.name == 'Nhà Sách Phương Nam') {
            $scope.thuonghieufilter = "sach";
            console.log($scope.thuonghieufilter);
        } else if (category.name == 'Ariel') {
            $scope.thuonghieufilter = "ariel";
            console.log($scope.thuonghieufilter);
        }
        // Thực hiện các thao tác khác khi bạn chọn một danh mục
    };

    $scope.dichoCategories = [
        { name: 'NGON Quận 10', isSelected: false },
        { name: 'NGON Tân Bình', isSelected: false },
        { name: '3 Sách Mart', isSelected: false },
        { name: 'Tops Market', isSelected: false },
        { name: 'Lotte Mart', isSelected: false }
    ];

    $scope.dichofilter = "";

    $scope.selectCategorydicho = function (category) {
        // Đặt isSelected của tất cả các danh mục về false
        $scope.dichoCategories.forEach(function (cat) {
            cat.isSelected = false;
        });
        // Đặt isSelected của danh mục được chọn về true
        category.isSelected = true;
        if (category.name == 'NGON Quận 10') {
            $scope.dichofilter = "ngon10";
            console.log($scope.dichofilter);
        } else if (category.name == 'NGON Tân Bình') {
            $scope.dichofilter = "ngontanbinh";
            console.log($scope.dichofilter);
        } else if (category.name == '3 Sách Mart') {
            $scope.dichofilter = "3sachmart";
            console.log($scope.dichofilter);
        } else if (category.name == 'Tops Market') {
            $scope.dichofilter = "topmarket";
            console.log($scope.dichofilter);
        } else if (category.name == 'Lotte Mart') {
            $scope.dichofilter = "lotte";
            console.log($scope.dichofilter);
        }
        // Thực hiện các thao tác khác khi bạn chọn một danh mục
    };

    $scope.goiyCategories = [
        { name: 'Dành cho bạn', isSelected: false, image: "images/goiy1.png" },
        { name: 'TPCN bán chạy', isSelected: false, image: "images/goiy2.png" },
        { name: 'Mua Là Có Quà', isSelected: false, image: "images/goiy3.png" },
        { name: 'Bảo Hiểm Số', isSelected: false, image: "images/goiy4.png" },
        { name: 'Astra Plus', isSelected: false, image: "images/goiy5.png" },
        { name: 'Deal siêu hot', isSelected: false, image: "images/goiy6.png" }
    ];

    $scope.goiyfilter = "";



    $scope.itemsToShow = 2;
    $scope.totalItems = 0;
    if ($scope.goiyfilter == "danhchoban") {
        $scope.totalItems = 5;

    } else if ($scope.goiyfilter == "TCPN") {
        $scope.totalItems = 7;

    } else if ($scope.goiyfilter == "mualacoqua") {
        $scope.totalItems = 7;

    } else if ($scope.goiyfilter == "dealsieuhot") {
        $scope.totalItems = 5;

    } else if ($scope.goiyfilter == "baohiem") {
        $scope.totalItems = 2;

    } else if ($scope.goiyfilter == "astra") {
        $scope.totalItems = 3;

    } else {
        $scope.totalItems = 29;

    }

    $scope.showMoreItems = function () {
        $scope.itemsToShow += 1; // Tăng số lượng sản phẩm được hiển thị thêm sau mỗi lần nhấn "Xem thêm"
    };

    $scope.selectCategorygoiy = function (category) {
        // Đặt isSelected của tất cả các danh mục về false
        $scope.goiyCategories.forEach(function (cat) {
            cat.isSelected = false;
        });
        // Đặt isSelected của danh mục được chọn về true
        category.isSelected = true;
        if (category.name == 'Dành cho bạn') {
            $scope.goiyfilter = "danhchoban";
            $scope.itemsToShow = 2;
            $scope.totalItems = 5;
            console.log($scope.goiyfilter);
        } else if (category.name == 'TPCN bán chạy') {
            $scope.goiyfilter = "TCPN";
            $scope.itemsToShow = 2;
            $scope.totalItems = 7;
            console.log($scope.goiyfilter);
        } else if (category.name == 'Mua Là Có Quà') {
            $scope.goiyfilter = "mualacoqua";
            $scope.itemsToShow = 2;
            $scope.totalItems = 7;
            console.log($scope.goiyfilter);
        } else if (category.name == 'Bảo Hiểm Số') {
            $scope.goiyfilter = "baohiem";
            $scope.itemsToShow = 2;
            $scope.totalItems = 2;
            console.log($scope.goiyfilter);
        } else if (category.name == 'Astra Plus') {
            $scope.goiyfilter = "astra";
            $scope.itemsToShow = 2;
            $scope.totalItems = 3;
            console.log($scope.goiyfilter);
        } else if (category.name == 'Deal siêu hot') {
            $scope.goiyfilter = "dealsieuhot";
            $scope.itemsToShow = 2;
            $scope.totalItems = 5;
            console.log($scope.goiyfilter);
        }
        // Thực hiện các thao tác khác khi bạn chọn một danh mục
        
    };

    $scope.xoa = function (index) {
        $scope.giohang.splice($scope.giohang[index], 1);
    }
    $scope.xoahet = function () {
        $scope.giohang = [];
    }
    $scope.value1 = 1;
    $scope.value2 = 100000000;
    $scope.tfprop = '';
    $scope.prop = "";
    $scope.sortBy = function (prop, tfprop) {
        $scope.prop = prop;
        $scope.tfprop = tfprop;
    }

    $scope.currentTime = new Date();

    // Hàm cập nhật thời gian
    function updateClock() {
        $scope.currentTime = new Date();
        $scope.formattedTime = formatTime($scope.currentTime);
    }

    // Hàm định dạng thời gian
    function formatTime(time) {
        var hours = String(time.getHours()).padStart(2, '0');
        var minutes = String(time.getMinutes()).padStart(2, '0');
        var seconds = String(time.getSeconds()).padStart(2, '0');
        return { hours: hours, minutes: minutes, seconds: seconds };
    }

    // Cập nhật thời gian mỗi giây
    $interval(updateClock, 1000);
    $scope.danhmuc = [];
    // Ban đầu, định dạng thời gian và hiển thị
    $scope.formattedTime = formatTime($scope.currentTime);

    $http.get("danhmuc.json").then(function (response) {
        $scope.danhmuc = response.data;
   

    });
    $scope.noibat = [];
    $http.get("noibat.json").then(function (response) {
        $scope.noibat = response.data;

    });
    $scope.bestsale = [];
    $http.get("bestsales.json").then(function (response) {
        $scope.bestsale = response.data;

    });
    $scope.maybeyoulike = [];
    $http.get("maybeyoulike.json").then(function (response) {
        $scope.maybeyoulike = response.data;

    });
    $scope.thuonghieunoibat = [];
    $http.get("thuonghieunoibat.json").then(function (response) {
        $scope.thuonghieunoibat = response.data;

    });
    $scope.dichomoingay = [];
    $http.get("dichomoingay.json").then(function (response) {
        $scope.dichomoingay = response.data;

    });

    $scope.giatothomnay = [];
    $http.get("giatothomnay.json").then(function (response) {
        $scope.giatothomnay = response.data;

    });
    $scope.danhsachtimkiem = [];
    $scope.page = 1;
    $scope.limit = 24;
    $scope.start = ($scope.page - 1) * $scope.limit;
    $scope.changePage = function (newPage) {
        $scope.page = newPage;
        $scope.start = ($scope.page - 1) * $scope.limit;
        // Thực hiện các hành động khác liên quan đến việc thay đổi trang ở đây
        // Ví dụ: load dữ liệu từ server cho trang mới, v.v.
    };
    $scope.totalPage = 0;
    $scope.numberOfPage = 0;
    $scope.goiyhomnay = [];
    $http.get("goiyhomnay.json").then(function (response) {
        $scope.goiyhomnay = response.data;
        $scope.goiyhomnay.forEach(subArray => {
            subArray.forEach(item => {
                $scope.danhsachtimkiem.push(item);
                $scope.totalPage = Math.ceil($scope.danhsachtimkiem.length / $scope.limit);
                $scope.numberOfPage = Array.from(Array($scope.totalPage).keys());
            });
        });

    });
     $scope.giohang = [];
    $scope.sanphamtronggiohang = 0;
    $scope.xoa = function (index) {
        $scope.giohang.splice($scope.giohang[index], 1);
    }
    $scope.xoahet = function () {
        $scope.giohang = [];
    }

    console.log($scope.searchQuery);
    
    
    console.log($scope.danhsachtimkiem);
});
app.filter("percentage", function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    }
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/launha/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/noicom/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
            
        })
        .when('/maytinh/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/camera/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/caphe/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/tainghe/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'

        })
        .when('/mayep/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/dinhduong/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/gourmet/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/sach/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'

        })
        .when('/parmar/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/ariel/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/ngon10/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/ngontanbinh/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/3sachmart/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'

        })
        .when('/topmarket/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/lotte/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/danhchoban/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/TCPN/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/mualacoqua/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/baohiem/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/astra/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/dealsieuhot/:id', {
            templateUrl: 'detail.html',
            controller: 'myDetail'
        })
        .when('/home', {
            templateUrl: 'trangchu.html',
            controller: "myCtrl"
        })
        .when('/cart', {
            templateUrl: 'cart.html',
            controller: "cartCtrl"
        })
        .when('/danhmuc', {
            templateUrl: 'list-product.html',
            controller: "listProductCtrl"
        })
        .when('/timkiem', {
            templateUrl: 'timkiem.html',
            controller: "myCtrl"
        })

        
        .otherwise({
            redirectTo: '/home'

        })
});
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi, không tải được với template");
    });
});
app.controller("myDetail", function ($scope, $routeParams){
    $scope.id = $routeParams.id;
    // Hàm tìm đối tượng theo ID
    function findProductById(id) {
        // Duyệt qua tất cả các mảng con trong data
        for (var i = 0; i < $scope.$parent.maybeyoulike.length; i++) {
            var subArray = $scope.$parent.maybeyoulike[i];
            // Sử dụng hàm find để tìm đối tượng với ID mong muốn trong mảng con hiện tại
            var foundProduct = subArray.find(function (product) {
                return product.id === id;
            });
            // Nếu tìm thấy, trả về đối tượng sản phẩm
            if (foundProduct) {
                return foundProduct;
            }
        }
        for (var i = 0; i < $scope.$parent.bestsale.length; i++) {
            var subArray = $scope.$parent.bestsale[i];
            // Sử dụng hàm find để tìm đối tượng với ID mong muốn trong mảng con hiện tại
            var foundProduct = subArray.find(function (product) {
                return product.id === id;
            });
            // Nếu tìm thấy, trả về đối tượng sản phẩm
            if (foundProduct) {
                return foundProduct;
            }
        }
        for (var i = 0; i < $scope.$parent.thuonghieunoibat.length; i++) {
            var subArray = $scope.$parent.thuonghieunoibat[i];
            // Sử dụng hàm find để tìm đối tượng với ID mong muốn trong mảng con hiện tại
            var foundProduct = subArray.find(function (product) {
                return product.id === id;
            });
            // Nếu tìm thấy, trả về đối tượng sản phẩm
            if (foundProduct) {
                return foundProduct;
            }
        }
        for (var i = 0; i < $scope.$parent.goiyhomnay.length; i++) {
            var subArray = $scope.$parent.goiyhomnay[i];
            // Sử dụng hàm find để tìm đối tượng với ID mong muốn trong mảng con hiện tại
            var foundProduct = subArray.find(function (product) {
                return product.id === id;
            });
            // Nếu tìm thấy, trả về đối tượng sản phẩm
            if (foundProduct) {
                return foundProduct;
            }
        }
        for (var i = 0; i < $scope.$parent.dichomoingay.length; i++) {
            var subArray = $scope.$parent.dichomoingay[i];
            // Sử dụng hàm find để tìm đối tượng với ID mong muốn trong mảng con hiện tại
            var foundProduct = subArray.find(function (product) {
                return product.id === id;
            });
            // Nếu tìm thấy, trả về đối tượng sản phẩm
            if (foundProduct) {
                return foundProduct;
            }
        }
        // Nếu không tìm thấy, trả về null hoặc thông báo lỗi tùy vào yêu cầu của bạn
        return null;
    }

    // Sử dụng hàm findProductById để tìm sản phẩm theo ID

    $scope.foundProduct = findProductById($scope.id);

    // Kiểm tra xem sản phẩm có được tìm thấy không
    if ($scope.foundProduct) {
        console.log("Product found:");
        console.log($scope.foundProduct);
    } else {
        console.log("Product not found");
    }
    $scope.soluongsp = 1;
    $scope.themsoluong = function(){
        $scope.soluongsp++;
    }
    $scope.giamsoluong = function () {
        if ($scope.soluongsp ==1){
            $scope.soluongsp = 1;
        }else{
            $scope.soluongsp--;
        }
    }
    $scope.mua = function (sp) {
        // TH1 da co sp roi thi tang so luong
        var chuaCo = true;
        console.log($scope.soluongsp);
        for (const item of $scope.$parent.giohang) {
            console.log($scope.soluongsp);
            if (item.id == sp.id) {
                console.log($scope.soluongsp);
                item.soluong += $scope.soluongsp;
                chuaCo = false;
                break;
            }
        }

        //TH2 : chua co sp thi them vao gio hang 
        if (chuaCo) {
            sp.soluong = $scope.soluongsp;
            $scope.$parent.giohang.push(sp);
        }
        console.log($scope.$parent.giohang);
        $scope.$parent.sanphamtronggiohang = $scope.$parent.giohang.length;


    }
})
app.controller("cartCtrl", function ($scope, $routeParams){
    $scope.tinhTongTien = function () {
        var tong = 0;
        for (const i of $scope.$parent.giohang) {
            tong += i.price * i.soluong;

        }
        return tong;
    }
    
    $scope.soluongSP = $scope.$parent.giohang.length;
    $scope.updateCheckAll = function () {
        // Khi checkbox "Chọn tất cả" được thay đổi, cập nhật trạng thái của các sản phẩm trong giỏ hàng
        for (var i = 0; i < $scope.$parent.giohang.length; i++) {
            $scope.$parent.giohang[i].isChecked = $scope.checkAll;
        }
    };
    $scope.cartHasItems = function () {
        // Kiểm tra xem giỏ hàng có sản phẩm nào được chọn không
        return $scope.$parent.giohang.some(function (item) {
            return item.isChecked;
        });
    };
    
    $scope.calculateTotalPrice = function () {
        // Tính tổng giá trị của các sản phẩm được chọn trong giỏ hàng
        var totalPrice = 0;
        for (var i = 0; i < $scope.$parent.giohang.length; i++) {
            if ($scope.$parent.giohang[i].isChecked) {
                totalPrice += $scope.$parent.giohang[i].price * $scope.$parent.giohang[i].soluong;
            }
        }
        return totalPrice;
    };

    $scope.soluongspMua = function () {
        // Tính tổng giá trị của các sản phẩm được chọn trong giỏ hàng
        var soluongmua = 0;
        for (var i = 0; i < $scope.$parent.giohang.length; i++) {
            if ($scope.$parent.giohang[i].isChecked) {
                soluongmua += 1;
            }
        }
        return soluongmua;
    };
})
app.filter('priceBetween', function () {
    return function (input, minPrice, maxPrice, propName) {
        var filtered = [];
        angular.forEach(input, function (item) {
            if (item[propName] >= minPrice && item[propName] <= maxPrice) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});