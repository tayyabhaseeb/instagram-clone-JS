const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// Variables declared

let outerContainer = document.getElementById("outer-container");

// for loop

for (let i = 0; i < posts.length; i++) {
  // console.log(posts[i]);
  outerContainer.innerHTML += `
  <section>
  <div class="container-two">
    <div class="container-two-parent">
      <div class="container-two-child-1">
        <img src="${posts[i].avatar}" class="sec-img-one" />
      </div>
      <div class="container-two-child-2">
        <h4>${posts[i].name}</h4>
        <p>${posts[i].location}</p>
      </div>
    </div>
    <img src="${posts[i].post}" class="van-post" />
    <div class="container-two-parent-two">
      <img class="icon first-icon" src="images/icon-heart.png" />
      <img class="icon" src="images/icon-comment.png" />
      <img class="icon" src="images/icon-dm.png" />
    </div>
    <h4 class="likes">${posts[i].likes},492 likes</h4>
    <p class="comment">
      <span class="bold">${posts[i].username}</span> ${posts[i].comment}
    </p>
  </div>
</section>
    
    `;
}
