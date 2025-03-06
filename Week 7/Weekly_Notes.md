# Week 7 notes

## Classes

* Classes are basically pointers to certain attributes contained within a variable within style sheet

* to create a class, we just need a period(.) and then a class name, which attributes can be assigned using the conventional {}

* multiple classes can be assigned using a space. Suppose you have classes "city" and "road". you can have  `<p class = "city road"> </p>`

## Divs
The `<div>` element is used as a container. 

* it has the properties of a block and 
takes the full width of the site. 

* usually used to group sections together 

* divs need margin: auto: to center align text. 

* you can have multiple div elements in a page. 

### How to align `<div>` using CSS:

#### Float: 

* The CSS float property allows elements to be positioned horizontally, rather than vertically.

e.g float: left; 

#### Inline block: 

*  elements will no longer add a line break before and after, and will be displayed side by side instead of on top of each other.

e.g display: inline-block;

#### Flex: 

* More responsive and flexible then other methods 

* To make the CSS flex method work, surround the `<div>` elements with another` <div>` element and give it the status as a flex container.

E.g `.mycontainer {display: flex;}`
`.mycontainer > div { width: 33%;}`

#### Grid 
 
* A grid based layout with rows and columns 

`.grid-container { display: grid;`
`grid-template-columns: 33% 33% 33%;}`


## Sitemaps and Wireframing 

### Sitemaps

- A sitemap is a visual representation of a website

- it shows how pages are linked and which pages exist 


### Wireframing

* A wireframe is a simple sketch of a webpage layout. - It shows where elements like headers, images, and buttons will go




