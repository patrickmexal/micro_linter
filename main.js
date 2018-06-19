let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");

let betterWords = storyWords.filter(function(word) {
  if (word != unnecessaryWords) {
		return word;
  }
});

let omission = storyWords.length - betterWords.length;

console.log("We have filtered " + omission + " words out of your paper.");
console.log("This leaves you with " + betterWords.length + " total words.");
console.log("--------------------");

let reallyIncidence = 0;
let veryIncidence = 0;
let basicallyIncidence = 0;

betterWords.filter(function(offender) {
 if (offender === 'really') {
   reallyIncidence++;
 } else if (offender === 'very') {
   veryIncidence++;
 } else if (offender === 'basically') {
	 basicallyIncidence++;
 } 
});
console.log("You used the word \'really\' " + reallyIncidence + " times.");
console.log("You used the word \'very\' " + veryIncidence + " times.");
console.log("You used the word \'basically\' " + basicallyIncidence + " times.");
console.log("--------------------");

let sentence = 0;
let sentenceCount = betterWords.forEach(function(sen) {
  if (sen[sen.length -1] === "." || sen[sen.length -1] === "!") {
    sentence++;
  }
})
console.log("Your paper has " + sentence + " total sentences.");
console.log("--------------------");