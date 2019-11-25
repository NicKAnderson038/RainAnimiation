// number of drops created.
const nbDrop = 858

// function to generate a random number range.
const randRange = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

// function to generate drops
function createRain() {
  for (i = 1; i < nbDrop; i++) {
    const dropLeft = randRange(0, 1600)
    const dropTop = randRange(-1000, 1400)

    $('.rain').append('<div class="drop" id="drop' + i + '"></div>')
    $('#drop' + i).css('left', dropLeft)
    $('#drop' + i).css('top', dropTop)
  }
}
// Make it rain
createRain()
