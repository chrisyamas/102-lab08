function catPicCountPrompter(whichPrompt) {
  if (!whichPrompt) {
    whichPrompt = 'How many cat pics would you like to see?';
  }
  let catCount = prompt(whichPrompt);
  if (catCount === '') {
    let message = 'How many cat pics would you like to see?';
    let error = 'Please enter a number between 1 and 4';
    catPicCountPrompter(message + error);
  }
  if (catCount == 4) {
    let counter = 0;
    while (counter < 4) {
      document.write('<img src="./images/cat-breadface.jpeg">')
      counter++;
    }
  }
}

catPicCountPrompter();


// let example1 = document.write('<img src=\'/images/zorkBestBoi.jpg\'>')

// let example2 = document.write('<img src="/images/zorkBestBoi.jpg">')