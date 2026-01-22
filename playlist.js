// Behzad Ghabaei
// CS81 - JavaScript
// Assignment 6A
// playlist.js
// 1/21/2026

//What the constructor is doing
//What each method does and how it works
//What the outputs mean
//What 'this' refers to in each method

//Add one improvement suggestion in the form of a comment
//Add one new method to extend the object’s behavior

/**
 * The constructor: Initializes a new Playlist instance. The parameter of Playlist is
 * "name" which can be used due to the new operator passing "MyChillMix".
 * This function sets the Playlist name, it creates an empty array for songs, (which
 * can be seen with myMix.songs.) and it also sets the current track called "currentSong" to null.
 * 'this' refers to the specific instance of the Playlist being created. this.name refers
 * to myChillMix. 
 */
   
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

/**
 * This block contains a method called addSong. It uses the object prototype, which is
 * the mechanism by which JavaScript objects inherit features from one another.  
 * Every object in JavaScript has a built-in property, called a prototype.
 * The purpose is to add a new song title string to the 'songs' array.
 * 'this' refers to the Playlist instance calling the method (myMix). The push method adds
 * a songTitle to a stack of songs with the keyword "this" which is referring to the current object
 * the code is being executed in. 
 */

Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

/**
 * The method called playFirst has the purpose of setting the first item in the
 * array as the currentSong.  The Output will log the title of the first song to the console.
 * 'this' refers to the Playlist instance to access its internal 'songs' array.  The if statement
 * contains a comparison condition statement that is a safety check ensuring that the playlist contains
 * at least one song before trying to play it. This prevents 'undefined' on an empty playlist, checking
 * the array with the .length method. The this.songs[0] refers to the first array element.
 */

Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

/**
 * This is the method called skipSong with the
 * purpose of removing the first song from the array and moving on to the next one.
 * The output will log the new current song or a message telling us that no songs remain.
 * 'this' refers to the Playlist instance to modify the 'songs' array and 'currentSong' property.
 * The length method returns the total number of elements in an array and the if statement makes
 * sure you can skip only if there is another song with "> 1." The shift method removes the first
 * element of an array to shift it forward and return that removed element. The currentSong will
 * be the new song skipped to. 
 */

Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

/**
 * The method listSongs has the purpose to display the playlist name. (with this.name printing myChillMix)
 * A comma-separated list of all songs are made with this.songs.join.  The join method separates with a comma
 * since it's parameter is: (","). The output shows us a formatted string 
 * summary in the console. 'this' refers to the Playlist instance to access 'name' and 'songs'.
 * The first title "Lofi Study" was skipped printing only "Chillhop Beats, Evening Jazz"
 */

Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};
/**
 * This is our new method caalled: clearPlaylist
 * The purpose is to remove all songs from the playlist and reset currentSong.
 * 'this' refers to the instance being cleared. We will invoke this method with
 * myMix.clearPlaylist(); and there will be a message that returns.  If we try to invoke 
 * myMix.skipSong(); a message returns that there are "no more songs to skip."
 */
Playlist.prototype.clearPlaylist = function() {
  this.songs = [];
  this.currentSong = null;
  console.log("The playlist has been cleared.");
};

/**
 * IMPROVEMENT SUGGESTION:
 * I would add an else clause to the if statement of the playFirst() method, with a message.
 * else { console.log(" The playList has been cleared and is empty. Please add songs to the mix."); }
 * Also another suggestion is to use the class keywork and constructor keyword. Instead of using the old
 * Prototype syntax, this code should be refactored into a modern ES6 'class' structure for better readability and 
 * to align with 2026 JavaScript standards. Here is an example of the Playlist class, the constructor, and the addSong method: 
 * class Playlist { constructor(name) { this.name = name; this.songs = []; this.currentSong = null; }
 * addSong(songTitle) { this.songs.push(songTitle); }
 */


/**
* It may be helpful to begin studying this code from here. The Playlist object uses the new
* keyword indicating an instance in a class.  Constructors can create more than one object from a
* single object definition.  The myMix oject uses the addSong method to add titles. Three songs
* are added. The myMix object also has the playFirst, skipSong and listSongs methods.  The function
* bodies of each are created above.  The parenthesis contains "My Chill Mix" which
* is the "name" variable of the parameter of PlayList at the first function above.
*/
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
  
