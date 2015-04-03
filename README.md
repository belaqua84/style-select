#style-select
Angular directive for a style-able, accessible select element.

demo: [plnkr]()

This directive creates an invisible-but-still-clickable `<select>` element, and places a visible-but-not-clickable `<div>` directly underneath the select.  The div is what is styled, but the user is actually interacting with the select.  The select menu that pops open is the native browser select menu and is therefore less style-able, though you may be able to use some browser prefixes to style it if you really want to.  Because users are actually interacting with a real select menu that makes the accessibility as strong as a normal select element.

Currently this directive only works with an array for your ngOptions.

##Usage
First, bring the script into your index page:

`<script scr="StyleSelectDirective.js"></script>`

There's a template for this directive, if you have it at the root level of your application you don't need to do anything, but if you place it inside another directory, you'll need to change the templateUrl inside the directive.

templateUrl: 'styleSelect.html',

To employ the select, insert an element (div is probably best) with the style-select attribute.*

`<div style-select></div>`

####Option list

Next, add the array that you wish to populate the select with:

`<div style-select items="myArray"></div>`

####Set the model

Then the model variable the select element will be tied to:

`<div style-select items="myArray" ng-model="myModel"></div>`

I recommend setting your model variable to something like 'Please Select' initially: `$scope.myModel = 'Please Select'` otherwise your select will have no words in it till something is chosen by the user.

#### Id, for, name

To be accessible every select needs a label with a for="" that matches the id of the select:

`<div style-select items="myArray" ng-model="myModel" whoami="days"></div>`

whoami will create an id of days_id, and will add a for on the label of days_id.  It will also add a name to the select of days_name so that you can access the select element with any of the $dirty or $pristine flags.

###Optional

####Class for select - set width

To add a class that defines the width of the select (or some other special style for this select element only):

`<div style-select items="myArray" ng-model="myModel" whoami="days" selectclass="width-30"></div>`

The selectclass is applied to both the invisible select element and the visible div. In this example width-30 might make the select and div both 30% width.  If you don't define a specific width then they will be 100% width by default.

####Give the Label a specific value

If you don't provide a label, then the whoami value will be used instead.  If you want to provide a better label, (or a label with spaces):

`<div style-select items="myArray" ng-model="myModel" whoami="days" selectclass="width-30" labelme="Days of the Week"></div>`






*To be accessible sites need to pass html validation, which means directives should be used as attributes with data-, not as elements.
