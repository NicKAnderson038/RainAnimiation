// function to generate a random number range.
const randRange = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

// function to generate drops
function createRain(nbDrop) {
  for (i = 1; i < nbDrop; i++) {
    $('.rain').append('<div class="drop" id="drop' + i + '"></div>')
    $('#drop' + i).css('left', randRange(0, 1600))
    $('#drop' + i).css('top', randRange(-1000, 1400))
  }
}
// Make it rain & number of drops
createRain(858)
