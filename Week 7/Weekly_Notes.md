# Week 7 notes

# March 4th

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


# March 6th

## Image sizing 

* What can we do about image overflowing 

1. Make the max width/height 100 % of the image. This will make it so the image is the full width of the box

2. Use the object-fit property to make sure the image fits in the box a certain way: 

- cover and contain are different fit properties. 

3. The asterix e.g for class .wrapper > * means for all things under the class wrapper. A useful attribute system. 

### Altered image : 

1. The `border-radius` property adds a circular look 

2. A thumbnail image we can use `border` property with padding which defines the space betweeen the image and the border 

3. You can create a hover effect e.g "classname:hover" which adds a link over the thumbnail picture. 

note: to make a link open a new window we do target = "_blank" before href. 

4. responsive images 
- Responsive images will automatically adjust to fit the size of the screen. If you want an image to scale down if it has to, but never scale up to be larger than its original size, add the following:

`img {  max-width: 100%; height: auto;}`

5. Image transparency:  use the poroperty `opacity` for your image 

### Text in images: 

* make a dive class = "textcontainer" 

* seperate all text in seperate dives with classes defining where each dive of text will be!

### Fade and Overlay: 

* one of the hover effects is activated when the mouse is over the image 

* create a container with both the image itself ahd the overlay. 

* the overlay is activated by .container:hover .overlay { opacity: 1;} 

* We put the text under the div so it only appears when the class is activaged/hovered. 

## Transforming and Transitions: 

### Functions: 

* `translate()` which moves and element toa  different position : ` div {transform : translate(xpx,ypx)}`

* `rotate()` Rotates ahahaha

* `scale() or just scaleX() and scaleY()` alters the size in x and y

* `skew()` is an element a hcih takes (xdeg,ydeg)

* `matrix()` does scale skew translate all in one. 

* we can create a hover for a class which can transform any div or element. 
## 3D transform: 

* you can rotate() in Z direction as well 

## Transitions 

* You need timing and dimensions 

* e.g `transition: transform, opacity 2s;` in a class of any hover transform will take that amount of time to happen. Same with opacity.  