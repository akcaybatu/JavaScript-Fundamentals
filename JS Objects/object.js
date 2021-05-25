let book = {
    title : "War of the Worlds",
    publishDate : 1898,
    author : "H.G. Wells"
}

console.log(book.author);

book.author = "George Orwell";
console.log(book.author);
console.log(book);

for (let prop in book){
    console.log(prop, book[prop]);
}