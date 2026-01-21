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

Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

/**
It may be helpful to begin studying this code from here.
The Playlist object uses the new keyword indicating that it's a
constructor. Constructors can creat more than one object from a single object definition.  The myMix oject uses the
addSong method to add titles. Three songs are added. The myMix object (or reference to the object)
also has the playFirst, skipSong and listSongs methods.  The function bodies are
created above this instantiation statement.
The parenthesis contains "My Chill Mix" which is the "name" variable of the parameter
of PlayList at the first function. See function PlayList above.*/
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
  
