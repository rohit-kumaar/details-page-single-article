const allBlogs = document.querySelector("#allBlogs");

allBlogs.addEventListener("click", function (e) {
  const toggleItems = document.querySelector("#toggleItems");
  toggleItems.classList.toggle("toggle-items");
});
