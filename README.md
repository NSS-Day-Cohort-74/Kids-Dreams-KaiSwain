# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > Kids.js is responsible for displaying each kids name. It would make sense that if you want to make those names do something when you click it, we would add it to the same module. But you could make a new module for all your click events if you wanted.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > Because findCelebrityMatch() was created to match each kid to their celebrity using their celebrities primary key as a link between them. The function also expects to pass each kid through as an argument.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > We listen for a click. If We click then we store what we clicked on in a variable. If what we clicked on has a type of celebrity, then the name of the sport will pop up because we have access to it through what we have stored in the HTML's state.

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > 1. We import our functions that dynamically create HTML based on our database.

   2. we create a variable to store the HTML element with an id of "container".

   3. we create a variable to store the elements of our website that include some structure and our dynamically generated HTML functions.

   4. we target the inner HTML property of our container variable and set it to our our application HTML variable.


