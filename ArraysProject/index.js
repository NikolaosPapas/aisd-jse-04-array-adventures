// Step 1: Creating an array with initial books
const bookCollection = ["The Great Gatsby", "To Kill a Mockingbird", "1984"];
console.log(bookCollection); // Expected output: ["The Great Gatsby", "To Kill a Mockingbird", "1984"]

// Step 2: Adding books to the collection
bookCollection.push("The Catcher in the Rye", "Brave New World");
console.log(bookCollection); // Expected output: ["The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "Brave New World"]

// Step 3: Removing the last book from the collection
const removedBook = bookCollection.pop();
console.log(removedBook); // Expected output: "Brave New World"
console.log(bookCollection); // Expected output: ["The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye"]

// Step 4: Modifying a book title in the collection
bookCollection[0] = "The Great Gatsby (Revised Edition)";
console.log(bookCollection); // Expected output: ["The Great Gatsby (Revised Edition)", "To Kill a Mockingbird", "1984", "The Catcher in the Rye"]

// Step 5: Creating a subarray of fiction books
const fictionBooks = bookCollection.slice(0, 2);
console.log(fictionBooks); // Expected output: ["The Great Gatsby (Revised Edition)", "To Kill a Mockingbird"]

// Step 6: Checking if a book exists in the collection
const has1984 = bookCollection.includes("1984");
console.log(has1984); // Expected output: true

// Step 7: Combining with a series array
const seriesBooks = ["Harry Potter and the Sorcerer's Stone", "The Hobbit"];
const completeCollection = bookCollection.concat(seriesBooks);
console.log(completeCollection); // Expected output: ["The Great Gatsby (Revised Edition)", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "Harry Potter and the Sorcerer's Stone", "The Hobbit"]


// Step 8: Debugging common errors
console.log("Initial book collection:", bookCollection);
bookCollection.push("The Catcher in the Rye");
console.log("After adding 'The Catcher in the Rye':", bookCollection);