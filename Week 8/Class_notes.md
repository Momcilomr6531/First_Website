# Media queries

## Syntax


you can change the style based on a factor, like screen width. changing things like colour, overflow etc. 

once you initialy compose your website, we can try see what it would look loke on a phone. 

3 different types: 

* `not` listen to code not browser = you can have different rules for different media types. e.g you can have different stylesheets used for different modes, lie print and screen. 

and others ...

# Flexbox

* short for flexible box layout module

* a method on how to arrange your containers

## Components 

* always consists of of a container with items. 

e.g `.flex-container { display:flex;}`

* usoing these propertes are abundant

e.g direction, wrap, flow etc.

### Direction properties 

* within direction, i can use row, column, row-reverse, column-reverse

 changes how our containers items are ordered


### Wrap properties

* nowrap, wrap and wrap-reverse

* It dictates how overflow is handled e.g are items kept in a container when the screen size is reduced? 

* `flex-flow` decides the wrap and the flex all in one

## Justify properties

* use to organise items when they dont take up all horizontal space

* for example `justify content: center;` would push your flex items to the center, or `space-between` would space out your items from left to right with equal spacing. 

## Align property

* basically justify for the y-axis

* e.g `align-items: center` would decide what position our items would align in the containers y axis right in the center. Similar to justify there are many ways you can order your contents. 

## Perfect centering 

* you would simply cent the justify and align to center!
