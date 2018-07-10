`mkdir exercise;`

`cd exercise;`

`mkdir public;`

`touch public/index.html;`

`touch public/app.js;`

`touch public/favicon.ico;`

`touch server.js;`

---

copy the example server.js file then save it.

---

`npm install express`
`node server.js`

---

Write a valid html document in your index.html file with a title of "Hello world"

---

At the foot of your body, include a recent version of jQuery from the jQuery CDN

---

Now include your (blank) app.js file underneath the jQuery include

---

Put the code from over there --> into your app.js

---

Put the code from over there --> into your index.html

---

Use jQuery to display an alert when the button is clicked

then...
make the alert repeat whatever is in the input box.

---

go to https://developer.mapquest.com/documentation/geocoding-api/ and find out how to make a request for a lat/lng location from a placename

---

use jQuery to make that request and get the location back.
HANDY FUNCTION: encodeURIComponent

---

Now go to  https://darksky.net/ and get a free API key.

---

Take the location lat/lng returned from mapquest and forward that on to the darksky api to get a weather report back

---

Display the weather report by replacing the contents of the divs where info is currently hardcoded.

---

STRETCH GOALS!!!

Remove the hardcoded bit and replace with instructions on page load

Display loading information and progress as the calls are being made.

Disable the search button and input field whilst working

Handle errors and display sensible error messages to the user

