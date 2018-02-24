(
    function() {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;

            this.getData = function() {
                
                return this.name + this.surname;
            };
        }

        function Seat(number, category) {
            this.number = number || Math.floor(Math.random() * (100 - 10) + 10);
            this.category = category || "E";

            this.getData = function() {
                
                return this.number + " " + this.category;
            };
        }
        
        function Passenger(person, seat) {
            this.person = person;
            this.seat = seat;

            this.getData = function() {
                
                return this.seat.number + ", " + this.seat.category.toUpperCase() + ", " + this.person.name + " " + this.person.surname;
            };
        }

        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.listOfPassengers = [];
            
            this.getDate = function() {
                var year = this.date.getFullYear();
                var month = this.date.getMonth();
                var day = this.date.getDate();

                return day + "." + month + "." + year; 
            };

            this.getData = function() {
                
                return this.date + " " + this.relation + "\n";
            };

            this.numberOfPassengers = function() {
               
                return this.listOfPassengers.length;
            };

            this.getPassengersList = function() {
                var passengersList = "";
                for(var i = 0; i < this.listOfPassengers.length; i ++){
                    passengersList += "\t\t" + this.listOfPassengers[i].getData() + "\n";
                }
                
                return passengersList;
            };

            this.addPassenger = function (passenger) {
                
                return this.listOfPassengers.push(passenger);
            };
        }

        function Airport(name) {
            this.name = name;
            this.listOfFlights = [];

            this.addFlight = function(flight) {
                
                return this.listOfFlights.push(flight);
            };

            this.fullNumber = function() {
                var counter = 0;

                for(var i = 0; i < this.listOfFlights.length; i++) {
                    counter += this.listOfFlights[i].numberOfPassengers();
                }

                return counter;
            };

            this.flightAndPassengers = function() {
                var flight = "";

                for(var i = 0; i < this.listOfFlights.length; i++) {
                    flight += "\t" + this.listOfFlights[i].getData() + this.listOfFlights[i].getPassengersList() + "\n";
                }

                return flight;
            };

            this.getData = function() {
                var lineOne = "Airport: " + this.name + ", total passengers " + this.fullNumber() + "\n";
                var lineTwo = this.flightAndPassengers();
                
                return lineOne + lineTwo;
            };
        }

        function createFlight(relation, date) {
            return new Flight(relation, date);
        }

        function createPassenger(name, surname, number, category) {
            var person = new Person(name, surname);
            var seat = new Seat(number, category);
            var passenger = new Passenger(person, seat);
            
            return passenger;
        }

        var airport = new Airport("Nikola Tesla");
        var flightOne = createFlight("Barcelona - Belgrade", "Nov 11 2017");
        var flightTwo = createFlight("Belgrade - New York", "Oct 25 2017");
        airport.addFlight(flightOne);
        airport.addFlight(flightTwo);

        var john = createPassenger("John", "Snow", 1, "b");
        var cersei = createPassenger("Cersei", "Lannister", 2, "b");
        var daenarys = createPassenger("Daenerys", "Targaryen", 14);
        var tyrion = createPassenger("Tyrion", "Lannister");

        flightOne.addPassenger(john);
        flightOne.addPassenger(cersei);
        flightTwo.addPassenger(daenarys);
        flightTwo.addPassenger(tyrion);

        console.log(airport.getData());        
    }
)();

