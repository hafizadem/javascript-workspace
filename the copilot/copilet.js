document.addEventListener('DOMContentLoaded', function () {
    const profileUrl = 'https://jsonplaceholder.typicode.com/users/1';
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';

    async function loadUserProfile() {
        try {
            const response = await fetch(profileUrl);
            const user = await response.json();
            document.getElementById('username').textContent = user.name;
            document.getElementById('email').textContent = user.email;
        } catch (error) {
            console.error('Error loading user profile:', error);
        }
    }

    async function loadPosts() {
        try {
            const response = await fetch(postsUrl);
            const posts = await response.json();
            const postsList = document.getElementById('posts');
            posts.forEach(post => {
                const postItem = document.createElement('li');
                postItem.textContent = post.title;
                postsList.appendChild(postItem);
            });
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    loadUserProfile();
    loadPosts();
});
