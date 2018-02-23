(
    function() {
        "use strict"

        function Country(name, odds, continent) {
            this.name = name;
            this. odds =  odds;
            this.continent = continent.toUpperCase();
        }

        function Person(name, surname, dateOfBirth) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth)

            this.getBirthday = function() {
                var year = this.dateOfBirth.getFullYear();
                var month = this.dateOfBirth.getMonth();
                var day = this.dateOfBirth.getDate();

                return day + "." + month + "." + year; 
            };

            this.getPersonAge = function () {
                var currentYear = new Date().getFullYear()
                var birthYear = this.dateOfBirth.getFullYear()
                var output = currentYear - birthYear
                return output
            }

            this.getPersonData = function() {
                var output = this.name + " " + this.surname + " " + this.getBirthday()
                return output
            }
        }

        function Player(person, betAmount, country) {
            this.person = person;
            this.betAmount = betAmount;
            this.country = country;

            this.getBetAmount = function() {
                var output = this.betAmount * this.country.odds
                return output
            }

            this.getPlayerData = function () {
                var output = this.country.name + ", " + this.getBetAmount() + " eur, " + this.person.name + " " + this.person.surname + " " + this.person.getPersonAge() + " years"
                return output
            }
        }

        function Address(country, city, postalCode, streetAndNumber) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.streetAndNumber = streetAndNumber;

            this.getAddressData = function() {
                var output = this.streetAndNumber + ", " + this.postalCode + " " + this.city + ", " + this.country.name
                return output
            }
        }

        function BettingPlace(address) {
            this.address = address;
            this.listOfPlayers = []

            this.sumOfAllBets = function() {
                var sumOfBets = 0
                for(var i = 0; i < this.listOfPlayers.length; i++) {
                    sumOfBets += this.listOfPlayers[i].betAmount
                }
                return sumOfBets
            }

            this.addPlayersToList = function(player) {
                this.listOfPlayers.push(player)
            }

            this.bettingPlaceData = function () {

            } 
        }

        function BettingHouse(competition, numberOfPlayers) {
            this.competition = competition;
            this.numberOfPlayers = numberOfPlayers;
            this.listOfBettingPlaces = []
        }

        var vuk = new Person("vuk", "ivanovic", "2005 3 3")
        var jelena = new Person ("jelena", "milosavljevic", "2005 3 3")
        var countryOne = new Country("SR" , 50, "Europe")
        var addressOne = new Address(countryOne, "Belgrade", 11000, "place awesome 123")
        var vuk = new Player(vuk, 50, countryOne)
        var jelena = new Player(jelena, 100, countryOne)
        var bettingPlaceOne = new BettingPlace ("someCool bettingPlace")
        bettingPlaceOne.addPlayersToList(vuk)
        bettingPlaceOne.addPlayersToList(jelena)

        console.log(bettingPlaceOne.sumOfAllBets());       
        
    }
)();