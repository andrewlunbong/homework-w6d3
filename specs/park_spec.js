const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let dinosaur1;
let dinosaur2;
let dinosaur3;
let park;
  beforeEach(function () {
    park = new Park('Big Park', 50);
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 100)
    dinosaur2 = new Dinosaur('Tyrannosaurus', 'carnivore', 150)
    dinosaur3 = new Dinosaur('Tyrannosaurus', 'carnivore', 130)

})

  it ('should have a name', function(){
    const actual = park.name;
    assert.deepStrictEqual(actual, 'Big Park')
})

it ('should have ticket price', function(){
  const actual = park.ticketPrice;
  assert.deepStrictEqual(actual, 50)
})

it ('should have collection of dinosaur', function(){
  const actual = park.dinosaurs;
  assert.deepStrictEqual(actual,[])
})


it ('should be able to add dinosaur', function(){
    park.addDinosaur('Tyrannosaurus');
    const actual = park.numberOfDinosaur();
    assert.deepStrictEqual(actual, 1)
})

it('should be able to remove dinosaur', function () {
  park.addDinosaur('T-Rex');
  park.addDinosaur('Tyrannosaurus');
  park.removeDinosaur('Tyrannosaurus');
  const expected = ['T-Rex']
  const actual = park.dinosaurs;
  assert.deepStrictEqual(actual, expected);
});

it('should know which dinosaur attract the most visitor', function(){
  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);
  park.addDinosaur(dinosaur3);
  const actual = park.popularDinosaur()
  assert.deepStrictEqual(actual, dinosaur2)
})
it('should be able to find all dinosaurs of a particular species', function(){
  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);
  park.addDinosaur(dinosaur3);
  const expected = [dinosaur2, dinosaur3]
  const actual = park.particularSpeciesOfDinosaur('Tyrannosaurus')
  assert.deepStrictEqual(actual, expected)
});

it('should be able to calculate the total number of visitors per day', function () {
  park.addDinosaur(dinosaur1)
  park.addDinosaur(dinosaur2)
  park.addDinosaur(dinosaur3)
  const expected = 380
  const actual = park.totalNumberOfGuests()
  assert.strictEqual(actual, expected)
});

it('should be able to calculate the total number of visitors per year', function () {
  park.addDinosaur(dinosaur1)
  park.addDinosaur(dinosaur2)
  park.addDinosaur(dinosaur3)
  const expected = 138700
  const actual = park.guestsPerYear()
  assert.strictEqual(actual, expected)
});

it('should be able to calculate total revenue for one year', function () {
  park.addDinosaur(dinosaur1)
  park.addDinosaur(dinosaur2)
  park.addDinosaur(dinosaur3)
  const expected = 6935000
  const actual = park.totalYearlyRevenue()
  assert.strictEqual(actual, expected)
});



// it ('should be able to remove dinosaur', function(){
//   park.removeDinosaur('Tyrannosaurus');
//   const actual = park.addDinosaur();
//   assert.deepStrictEqual(actual, 1)
// })

  it('should have a name');

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
