// Behzad Ghabaei
// Cs 81 - JavaScript
// Assignment 6A
// Instructor Seno
// 1/21/2026
// REFLECTION.md
// playlist.js

1. What was the hardest part to understand?
     The most challenging part was understanding the relationship between the Playlist.prototype and the "this" keyword. Initially, it can be confusing to see how functions defined outside of the constructor still have access to the provided data (like the songs array) belonging to an instance. Understanding that the "this" keyword acts as a placeholder for whatever object is "calling" the method is the key to getting this program and object-oriented JavaScript.  I also thought that passing an array into the function was hard, and I needed to place the array in the parenthesis as the second parameter for our constructor. This was hard to invoke, but first I declared and created an array, then placed the array name in the parenthesis.

2. How does this code use "this" to tie data and behavior together?
     The code uses 'this' as a bridge. The keyword 'this' refers to the current object the code is being executed in.  The "data" (the name of the playlist and the array of songs) is stored as properties on the object by the constructor. The "behavior" (adding, skipping, or listing songs) is from the prototype. By using `this.songs` inside a method, the behavior knows exactly which piece of data to work with. This ensures that if you have two different playlists, adding a song to one does not accidentally add it to the other.

3. What would you do differently if you wrote this object from scratch?
     I would try to use the "ES6" class syntax, which does not have the prototype keyword.  Although prototype allows prototype chaining and "shadowing the property," it is easier syntax to type, and it groups the constructor and methods inside a single block of code. Additionally, I would practice some private fields with the pound sign, like #songs, which we recently learned. This will prevent external code from modifying the list without using the addSong method.  As a new method I could probably do a "shuffle" function done with the Math.random operation and randomize the array.  Lastly, I would use the "Template Literals," which is a new concept we learned with backticks, dollar signs, and curly braces. `${ this.name}` This has a cleaner console logging output that makes programs easier to read.




