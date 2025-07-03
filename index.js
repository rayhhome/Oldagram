const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postContainer = document.querySelector(`#post-${i + 1}`);

    postContainer.innerHTML = `
        <div class="post-header">
            <img class="post-avatar" src="${post.avatar}" alt="${post.name}'s avatar">
            <div class="post-user-info">
                <h1 class="post-username">${post.name}</h1>
                <h2 class="post-location">${post.location}</h2>
            </div>
        </div>
        <img class="post-image" src="${post.post}" alt="${post.name}'s post">
        <div class="post-caption">
            <div class="post-actions">
                <img class="post-action" src="images/icon-heart.png" alt="Like Icon.">
                <img class="post-action" src="images/icon-comment.png" alt="Comment Icon.">
                <img class="post-action" src="images/icon-dm.png" alt="Share Icon.">
            </div>
            <p class="post-likes">${post.likes} likes</p>
            <p class="post-text"><span class="post-commenter">${post.username}</span>  ${post.comment}</p>
        </div>
    `;

    const postImage = postContainer.querySelector('.post-image');
    postImage.addEventListener('dblclick', dblclickImage);
}

function dblclickImage(event) {
    console.log('Image double-clicked:', event.target);
    var postContainer = event.target.closest('.post-container');
    var likesCount = postContainer.querySelector('.post-likes');

    var currentLikes = parseInt(likesCount.textContent.split(' ')[0]);
    likesCount.textContent = (currentLikes + 1) + ' likes';
}

