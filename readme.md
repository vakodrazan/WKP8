# WKP8

Hello team! Here's the weekend project 8.

We're going to build a hit parade.

![./assets/hit-parade.jpg](./assets/hit-parade.jpg)

-   That's a list of songs, sorted from the most popular to the least popular.
-   When we add a new song to the hit parade, the song score is set to zero.
-   The song list is always sorted from the highest score song to the lowest.
-   We can increment the score by clicking the +1 button.
-   We wan delete a song from the list by clicking the bin icon.
-   We can filter the list, by searching for a song title
-   We can filter the list, by selecting a song style in the select.
-   When we click the _reset filters_ button, the filter form is reset, and the list comes back to normal.
-   The data will be saved on the localstorage (except when you filter data)

### Tips :

-   Focus on the features first, and if you have some time left, try to replicate this design.
-   Start by choosing the song data structure, and create a few of them in the code.
-   Focus on your basic app functionality first, and then try to save the state of your app to _Local Storage_.

Also, please update this readme with the answer to those questions before submitting the project.

### Student report :

1. In a few sentences, explain the structure of your project.

#### Structure of my project:
 
 - First of all, create an empty array that will contain the object.
 - I created a form element, and listen to the submit event.
 - When clicking the submit button, add the value of the form into an html element.
 - Map through each object in the array.
 - Store the result in the local storage using `dispatchEvent`.
 
2. If you had more time, what area of your project would you improve?
 
#### Any area need to improve:
 
 - If I had more time, I would work on the score update.
 - Also, I would try my best to finish the last steps which are filtering the element when searching in the search input and reset the search field.
 
3. Did you learn anything new while working on this project?
 
#### Anything new while working on this project:
 - In this project, I understand more how to use the `dispatchEvent`.
 - Storing the result in the local storage
 
4. What was the most challenging part for you?
 
#### The most challenging part I faced:
 
 - I try to manage how to get the score updated but I could not solve it. I spent most of my time trying to work on it but still, it didn't work. 
 
5. Would you like a new explanation about a specific topic?
 
#### More explanation
 
 - I would like to have more explanation of the update score.
 
6. Any other comments?
 
#### What's more:
 
 - I'm really sorry that I couldn't even touch anyone on the filter list and reset button.
 - Also, I couldn't get the score update.

Fork this project and then clone your fork to your computer.

I will download everybody's fork on **_Sunday at 5pm_**.

Good luck everyone! 🔥
