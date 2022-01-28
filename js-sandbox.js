alert('Welcome to my JavaScript Cat Project')

function promptCatScale() {

  let cScale = prompt('On a scale of 1-10, how much do you love cats?');
  console.log('cScale', typeof Number(cScale));
  
  if (cScale > 7) {
    response = 'Oh heck yeah! You\'re in the right place, my friend!';
  } else if (cScale > 5) {
    response = 'Alright, I don\'t love it but I respect you!';
  } else if (cScale > 0) {
    response = 'Um...who hurt you? You probably have an anxious attachment style.';
  }
  else {
  let response = 'So you like to play games, eh?! Let\'s try that again...';
  alert(response);
  promptCatScale();
  }
  return alert(response);
}

promptCatScale()

function catPicCountPrompter() {
  
  let catCount = prompt('How many cat pics you want?')

  if (catCount <= 0) {
    alert('Wow, rude. Wanna try that again, my friend?');
    catPicCountPrompter();
  } else if (catCount > 0) {
    for (let i = catCount; i > 0; i--) {
    document.write('<img src="./images/cat-keyboard.jpeg" alt="Cat Me Coding">');
    }
  } else {
    alert('Please enter a valid number.')
    catPicCountPrompter();
  }
}

catPicCountPrompter()