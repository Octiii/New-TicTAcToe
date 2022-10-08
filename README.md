# Tic Tac Toe. 


## UX  
### Website Owner Goals 
Provide users with the ability to play Tic Tac Toe.
#### User Goals 
To play Tic Tac Toe
## Structure of the website 
A very simple structure with the game board at the center of the page, a tite at the top and a score board at the bottom. Scales great on any device. Users get interaction trough the pointer changing, sound when placing markers on the board, and a hover effect when when presing the reset botton. 
### Wireframes 
![Image](assets/images.Tic_Tac_Toe_wire_frames.PNG)
# Surface 
## Colors 
The main color is dark blue. A nice color easy on the eyes. Orange is the other color used as it works well with blue. 
##### Fonts 
No special fonts where used.
### Images 
Drew all the images used on Fire Alpaca, a simple grid, a O and an X. 
# Features 
### Game Board 
The board is visible in the center of the page. Cliking in any of the 9 squares will place a marker of the coresping players turn. When any of the requierments for a win are met, no more markers can be placed, a winner is annonced and a nice fanfare plays. 
#### Score Board 
When a player wins the score is incremented by one. 
# Thecnologies used 
## HTML5 
HTML5 is used for the main structure of the website. The board cels are made in HTML and use an event listner to detect where the user cliked. 
## CSS3 
CSS is used to arange the elements on the page and to render the images. 
## JavaScript
JavaScript is used for the logick of the game. 
## Game/Code Logick
An array of arrays is declared, it mimics the grid of cells. The 2 players are represented by a -1 and a 1. The player variable is decleared as 1. When one of the cells is cliked the acording array is edited by changing one of its 0 to the value of the player constant, either 1 or -1. Then the player is changed by multipling the player number by -1, this will turn a 1 in a -1 and a -1 into a 1. The turn cheker is also aupdated wiht the apropriate players marker. A win is calculated when the sum of an array reaches either 3 or -3. Checking results on the diagonal is similar but only cheks for 3 
## Testing
