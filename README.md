# Day-Planner-Homework

###What the project is about
In this homework assignment we were told to create a daily planner where the user will be able to log in activities or to-do lists during that current day. The planner will save their log-ins and when the page is refreshed will still hold all the text that the user inputted. The planner is also able to keep track of time where as to color code based if the time is past, the current hour, or in the future. 

###How the code works
At the top we use our newly learned moment() to display the day of the week, month and day of the month. This will always update to the current day using moment. 

Moving on to line 30 we begin our checkTime function check the current time in military hours and compare to the individual time slots and color code accordingly. We run a loop through the id tags which we parseInt through to compare integers. For example, when i = 9 and the current time is 11 pm, this means that the time has passed and we remove the present and future class attributes and assign a past class to that time block. If the time matched the current block we add a present class and if the time is in the future we will add a future class. 

Now we add an function to the button to save the text within the textarea. We use this by storing a value (the text), and a key(the unique id tag) to our local storage. The use of the sibling allows us to stay within the container of the "row time-block" and look for a unique attribute. In this case we are looking for a div that contains the class description and we take the id tag and the value of the textarea. 

At the top on line 28 we call out the values of whatever is stored in our local storage.