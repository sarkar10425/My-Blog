/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    return postId;
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParams();
    const url = `${API_URL}${postId}`;
    fetch(url, {
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        buildPost(data);
    })
}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string 
    let postDate = new Date(parseInt(data.added_date)).toDateString();
    let postImage = `${API_BASE_URL}${data.post_image}`;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    document.getElementById("individual-post-title").innerHTML = data.title;
    document.getElementById("individual-post-date").innerHTML = `Published on ${postDate}`;
    document.getElementById("individual-post-content").innerHTML = data.content;
}

