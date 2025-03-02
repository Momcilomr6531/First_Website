## Navigation bars 

To remove bullet points we can use 

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

we can use li { display : inline ;} to remove line breaks 

other properties : 

* {float: left;} use float to bring elements closer to eachother 
* {display: block;} use to specify padding 
* {Padding: some px; } specify padding between elements 
* { Background-color: color} self explanatory

## Gallery

## Box Models

2 types of boxes :  Inline and Blocks

Examples : .block { display : block; }

properties = 

* box will break onto a new line
* width and height are respected
* Padding, margin and border will cause pushback 
* box will extend to fill its container 

Examples : .inline {display : block; }

properties = 

* won't break onto a new line 
* height and width doesn't apply 
* only other inline boxes respect padding, border and margin 

Parts of box make ups: 

* Content : where content is displayed : characterized by height and width 
* Padding : more of the space between the content and the border 
* border : wraps the content 
* Margin : the outermost layer

An example: 
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}

## Positioning 

The position property describes the way an element locates itself in a website 

there are 5 different values that define poisition : 

* static - always positioned towards the normal flow of the page

* relative - can be set relative to its normal/static position, e.g by saying {position: relative; left: x px;}

* fixed - a fixed element does not leave a gap, stays in the same page even if scrolling. 

* absolute - are positioned to the nearest defined ancestor 

* sticky - positioned based on the users scroll position 



