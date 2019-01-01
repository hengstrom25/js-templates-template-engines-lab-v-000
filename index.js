function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("post").value;
  
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  
  let blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");
 
  postElement.innerHTML = blogSection;
   postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  
}