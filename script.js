const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let ct=0;
	for(let i=0;i<numberOfBooksRead.length();i++){
		if(library.readingStatus==true){
			ct++;
		}
	}
	console.log(ct);
};

// Do not change the code below

alert(numberOfBooksRead());
