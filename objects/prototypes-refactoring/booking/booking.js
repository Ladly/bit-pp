(
    function() {
        "use strict";

        function Team(name, odds, continent) {
            this.name = name;
            this. odds =  odds;
            this.continent = continent;
        }

        function Person(name, surname, dateOfBirth) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth);            
        }

        Person.prototype.getBirthday = function() {
            var year = this.dateOfBirth.getFullYear();
            var month = this.dateOfBirth.getMonth();
            var day = this.dateOfBirth.getDate();

            return day + "." + month + "." + year; 
        };

        Person.prototype.getPersonAge = function () {
            var currentYear = new Date().getFullYear();
            var birthYear = this.dateOfBirth.getFullYear();
            var output = currentYear - birthYear;
           
            return output;
        };

        Person.prototype.getPersonData = function() {
            var output = this.name + " " + this.surname + " " + this.getBirthday();
           
            return output;
        };

        function Player(person, betAmount, team) {
            this.person = person;
            this.betAmount = betAmount;
            this.team = team;

            
        }

        Player.prototype.getBetAmount = function() {
            var output = this.betAmount * this.team.odds;
           
            return output;
        };

        Player.prototype.getPlayerData = function () {
            var output = this.team.name + ", " + this.getBetAmount() + " eur, " + this.person.name + " " + this.person.surname + " " + this.person.getPersonAge() + " years";
            
            return output;
        };

        function Address(country, city, postalCode, streetAndNumber) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.streetAndNumber = streetAndNumber;            
        }

        Address.prototype.getAddressWithoutNumber = function() {
            var output = "";
            for(var i = 0; i < this.streetAndNumber.length; i++) {
                if(isNaN(this.streetAndNumber[i]) || this.streetAndNumber[i] === " ") {
                    output += this.streetAndNumber[i];
                }   
            }
            
            return output.trim();
        };

        Address.prototype.getAddressData = function() {
            var output = this.streetAndNumber + ", " + this.postalCode + " " + this.city + ", " + this.country.name;
            
            return output;
        };

        function BettingPlace(address) {
            this.address = address;
            this.listOfPlayers = [];            
        }

        BettingPlace.prototype.sumOfAllBets = function() {
            var sumOfBets = 0;
            for(var i = 0; i < this.listOfPlayers.length; i++) {
                sumOfBets += this.listOfPlayers[i].betAmount;
            }
            
            return sumOfBets;
        };

        BettingPlace.prototype.getPlayersData = function() {
            var output = "";
            for(var i = 0; i < this.listOfPlayers.length; i++) {
                output += "\n\t\t" + this.listOfPlayers[i].getPlayerData();
                
            }
            return output;
        };
        
        BettingPlace.prototype.addPlayersToList = function(player) {
            this.listOfPlayers.push(player);
        };
        
        BettingPlace.prototype.getBettingPlaceData = function () {
            return this.address.getAddressWithoutNumber() + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.sumOfAllBets() + " eur"; 
        };

        function BettingHouse(competition) {
            this.competition = competition;
            this.listOfBettingPlaces = [];
            this.numberOfPlayers = (
                 function() {
                    var output = 0;
                    for(var i = 0; i < this.listOfBettingPlaces.length; i++) {
                        output += this.listOfBettingPlaces[i].listOfPlayers.length;
                    }

                    return output;
                 }
             );

            this.addBettingPlace = function(bettingPlace) {
                this.listOfBettingPlaces.push(bettingPlace);
            };

            this.reallyDontKnowHowToNameThisFunction = function() {
                var result = "";
                for(var i = 0; i < this.listOfBettingPlaces.length; i++) {
                    result += "\t" + this.listOfBettingPlaces[i].getBettingPlaceData() +           
                    "\t\t"+ this.listOfBettingPlaces[i].getPlayersData() + "\n";
                }

                return result;
            };

            this.getBettingHouseData = function() {
                var lineOne = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers() + " bets";
                return lineOne + "\n" + this.reallyDontKnowHowToNameThisFunction();
            };
        }

        function createPlayer(person, betAmount, team) {
            return new Player(person, betAmount, team);
        }

        function createBettingPlace(address) {
            return new BettingPlace(address);
        }

        var Continent = {
            ASIA: "Europe",
            EUROPE: "Asia",
            AUSTRALIA: "Australia",
            NORTHAMERICA: "North America",
            SOUTHAMERICA: "South America"
        };        

        var vuk = new Person("vuk", "ivanovic", "2005 3 3");
        var jelena = new Person ("jelena", "milosavljevic", "2005 3 3");
        var vukOne = new Person("vuk1", "ivanovic1", "2005 3 3");
        var jelenaOne = new Person ("jelena1", "milosavljevic1", "2005 3 3");
        var teamOne = new Team("coddingKillers" , 50, Continent.EUROPE);
        var teamTwo = new Team("slackers", 100, Continent.SOUTHAMERICA)
        var addressOne = new Address("Serbia", "Belgrade", 11000, "place awesome 123");
        var addressTwo = new Address("Serbia", "Belgrade", 11000, "really great place 123");
        var vukPlayer = createPlayer(vuk, 50, teamOne);
        var jelenaPlayer = createPlayer(jelena, 100, teamOne);
        var vukPlayerOne = createPlayer(vukOne, 50, teamOne);
        var jelenaPlayerOne = createPlayer(jelenaOne, 100, teamTwo);
        var bettingPlaceOne = createBettingPlace(addressOne);     
        var bettingPlaceTwo = createBettingPlace(addressTwo);     
        bettingPlaceOne.addPlayersToList(vukPlayer);
        bettingPlaceOne.addPlayersToList(jelenaPlayer);
        bettingPlaceTwo.addPlayersToList(vukPlayerOne);
        bettingPlaceTwo.addPlayersToList(jelenaPlayerOne);
        var bettingHouseOne = new BettingHouse("some cool hackathon");
        bettingHouseOne.addBettingPlace(bettingPlaceOne);
        bettingHouseOne.addBettingPlace(bettingPlaceTwo);
 
        console.log(bettingHouseOne.getBettingHouseData());
    }
)();