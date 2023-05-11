const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
  }

  Park.prototype.numberOfDinosaur = function(){
    return this.dinosaurs.length
}
  Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur);
}
 
  Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
}

  Park.prototype.popularDinosaur = function(){
    let popularDinosaur
    let visitor = 0
    for (let i = 0 ; i < this.dinosaurs.length; i ++){
      if (this.dinosaurs[i].guestsAttractedPerDay > visitor){
        visitor = this.dinosaurs[i].guestsAttractedPerDay
        popularDinosaur = this.dinosaurs[i]
      }
    } 
    return popularDinosaur
  }

  Park.prototype.particularSpeciesOfDinosaur = function(species){
    let particularSpeciesOfDinosaur = []
    for (const dinosaur of this.dinosaurs) {
      if (dinosaur.species === species) {
          particularSpeciesOfDinosaur.push(dinosaur)
      }
  }
  return particularSpeciesOfDinosaur
}

Park.prototype.totalNumberOfGuests = function () {
  let totalguests = 0
  for (const dinosaur of this.dinosaurs) {
      totalguests += dinosaur.guestsAttractedPerDay
  }
  return totalguests
}

Park.prototype.guestsPerYear = function () {
  const totalPerDay = this.totalNumberOfGuests()
  const daysInYear = 365
  const yearlyVisitors = totalPerDay * daysInYear
  return yearlyVisitors
}

Park.prototype.totalYearlyRevenue = function () {
  const totalGuests = this.guestsPerYear()
  const revenue = totalGuests * this.ticketPrice
  return revenue
}




//   Park.prototype.removeDinosaur = function(dinosaur) {
//   this.dinosaurs.splice(0, 1)
// }
  module.exports = Park;