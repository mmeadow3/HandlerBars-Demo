////////////////partial stuff//////////////////

var socialData = {
  site_url: "http://www.facebook.com",
  sitename: "Facebook"
};

var socialHTML = $("#social-sharing").html();
var socialTemplate = Handlebars.compile(socialHTML);
var socialOutput = socialTemplate(socialData);

///register this as a partial///////
Handlebars.registerPartial("social-sharing", socialOutput);




/////////template stuff///////
var articleData = {
  title: "This is a cool title",
  text: "This article is going to blow your mind",
  tags: [  ///////////This is what is being iterated over in line 24 on index.html////////
    {
    category: "Cool People",
    name: "Mike"
 	},
    {
    category: "Author", 
    name: "Steve"
 	}
  ]
}

// Grab the HTML from the appropriate <script> tag in index.html
var articleHTML = $("#article-template").html();  ///////grabs the contents of the script tag/////

// Use Handlebars to compile it into a template. Once it's a 
// Handlebars template, you can bind data to it.
var articleTemplate = Handlebars.compile(articleHTML); //////this is the compile method of Handlebars, then pass HTML into it 
///////this make articleTemplate a fucntion///////


// Render the resulting HTML by passing the data to the template
var articleOutput = articleTemplate(articleData);
// console.log("aricle Output", articleOutput);




$("#articleOutput").append(articleOutput);
// Now take the final, compiled HTML and inject it into your DOM