function promptCatScale() {
    // step 1: prompt user for Cat Love number
    let cScale = prompt('On a scale of 1-10, how much do you love cats?');
    console.log('cScale', typeof Number(cScale));
    // Step 2: decide what response to return to the user
    
    // Step 3: create logic that changes reponse
    // Step 4: check user input for valid input (its a number)
    // IF not valid, call promptCatScale() again.
    if (cScale > 7) {
      response = 'Oh heck yeah! You\'re in the right place, my friend!';
    } else if (cScale > 5) {
      response = 'Alright, I don\'t love it but I respect you!';
    } else if (cScale > 0) {
      response = 'Um...who hurt you? You probably have an anxious attachment style.';
    
    
    }
    
    else {
    let response = 'so you like to play games, eh?! let\'s try that again...';
    alert(response);
    promptCatScale();
    }
    return alert(response);
  }

  promptCatScale()