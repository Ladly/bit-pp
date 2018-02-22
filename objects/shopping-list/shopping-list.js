(
    function () {
        "use strict"

        function Product(name, price, expirationDate) {
            this.productId = Math.floor(Math.random() * 100000 + 1);
            this.name = name;
            this.price = price;
            this.expirationDate = new Date(expirationDate)

            this.getData = function () {
                return this.productId + " " + this.name + " " + this.price
            }

            this.getExpirationDate = function () {
                var today = new Date();
                today = today.getTime()              
                var expire = this.expirationDate.getTime()

                if (expire > today) {
                    return true
                }

                return false
            }
        }



        function ShoppingBag() {
            this.listOfProducts = []

            this.addProduct = function (product) {
                if (product.getExpirationDate()) {
                    this.listOfProducts.push(product);
                }

                return "this is spoiled"
            }

            this.calculateAverage = function () {
                var fullPrice = 0;
                var averagePrice = 0;
                for (var i = 0; i < this.listOfProducts.length; i++) {
                    fullPrice += this.listOfProducts[i].price;
                }
                averagePrice = fullPrice / this.listOfProducts.length;

                return averagePrice;
            }

            this.getMostExpensive = function () {
                var mostExpensive = 0;
                for (var i = 0; i < this.listOfProducts.length; i++) {
                    if (this.listOfProducts[i].price > mostExpensive) {
                        mostExpensive = this.listOfProducts[i].price
                    }
                }

                return mostExpensive;
            }

            this.calculateTotalPrice = function () {
                var total = 0;
                for (var i = 0; i < this.listOfProducts.length; i++) {
                    total += this.listOfProducts[i].price
                }

                return total;
            }            
        }

        function PaymentCard(balance, activity, valid) {
            this.balance = balance;
            this.activity = activity;
            this.valid = valid;
        }

        var banana = new Product("Banana", 123.99, "2015, 5, 14")
        var orange = new Product("Orange", 100.99, "2016, 23, 5")
        var pear = new Product("Pear", 111.99, "2019, 10, 10")
        var peach = new Product("Peach", 163.99, "2019, 10, 10")
        
        var shoppyBag = new ShoppingBag();
      
        shoppyBag.addProduct(banana)
        shoppyBag.addProduct(orange)
        shoppyBag.addProduct(pear)
        shoppyBag.addProduct(peach)

        var visa = new PaymentCard(100.24, "active", "2019, 10, 10")

        function checkoutAndBuy(card, goods) {
            if(card.balance >= goods.calculateTotalPrice()) {
                return "Thank you come again"
            } 

            return "you miss " + Math.abs(card.balance - goods.calculateTotalPrice())
        }

     console.log(checkoutAndBuy(visa, shoppyBag));
         
        
    }
)();