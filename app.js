const blogPosts = [
    "My first blog post",
    "My second blog post",
    "My third blog post",
  ];
  
  console.log(blogPosts);

console.log(blogPosts[0]); // Output: My first blog post
console.log(blogPosts[1]); // Output: My second blog post
console.log(blogPosts[2]); // Output: My third blog post

blogPosts[3] = "My fourth blog post";

console.log(blogPosts[3]); // Output: My fourth blog post

const favouriteFoods = ['Italian', 'Mexican', 'Chinese']

console.log(favouriteFoods)

const favouriteColours = ['green', 'black']

favouriteColours[2] = 'blue'

console.log(favouriteColours)

function myColor() {
  return "white"
}

favouriteColours[3] = myColor()

console.log(favouriteColours)