My project is a website for custom designed cookies. 

Main CSS Classes

1. .home-nav/.nav
Navigation bar that uses flexbox. Navigation bar menu items are aligned in a row and at the
end of the flex box. 

2. .header
This is for the background image on the home page. Image background size is cover to take up
whole container. There's a white gradient effect on the bottom to transition into content 
sections below.

3. .first-row/.second-row/.third-row/.misc-first-row/.misc-second-row
Aligns images on the design.html page in flexbox rows and columns. Space-around is used to add
some spacing around the images. 

4. .designs/.misc 
Sets size for images based on browser width   


JavaScript

1. orderEstimate
Creates an order estimate in the 'Make an Order' section on home page. Order estimate changes
based on quantity and whether shipping is set to 'yes' or 'no'. If shipping is set to 'no', 
the address form fields are rmeoved since they are no longer needed. 

2. Submit button click function
Runs through some different conditions if some of the field forms aren't complete. If name, 
email address, phone number or comment field are incomplete, an alert message displays when the
submit button is hit letting user know which field needs to be completed.  
