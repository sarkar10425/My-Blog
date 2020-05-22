
const PATH = "./data.json";
const fs = require('fs');

class Post{

    get() {
        /** get posts  */
        return this.readData();
    }

    getIndividualBlog(postId) {
        /** Get one blog post */
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) {
        /**Add new Post */
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawdata) {
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;