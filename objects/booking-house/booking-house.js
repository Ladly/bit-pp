"use strict";

(function (){
    function Country(name,odds,continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }



    function Person (name, surname, dateOfBirth){
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        this.getDate = function() {
            var year = this.dateOfBirth.getFullYear();
            var month = this.dateOfBirth.getMonth();
            var day = this.dateOfBirth.getDay();
            var output = day + "." + month + "." + year +"."
            return output;
            
        }
        this.personData = function () {
            var output = this.name + " "+ this.surname + ", " + this.getDate();
            return output;
            
        }
    }


    function Player (person, betAmount, country){
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getWinAmount = function () {
            var output = this.betAmount * this.country.odds
            return output;
        }
        this.playerMethod = function () {
            var output = this.person.personData() + ", " + this.getWinAmount(); 
            return output;           
            
        }
    }


    
    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
        this.getAddress = function () {
            var output = this.streetAndNumber + ", "+ this.postalCode + " " + this.city + ", " + this.country
            return output;
        }
        }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        
    }

    function BettingHouse(competition,numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
        
    }

 var osoba1 = new Person("Petar", "Petrovic", "25 feb 1987");
 console.log(osoba1.personData());
 var adresa1 = new Address("Nemanjna 13", "11 000", "Beograd", "SR");
 console.log(adresa1.getAddress());
 var zemlja1 = new Country("SR", 100, "ASIA");
 var igrac1 = new Player(osoba1,50,zemlja1);
 console.log(igrac1.playerMethod());
 
 
 

})();