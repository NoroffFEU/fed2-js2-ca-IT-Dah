import { readPost } from "../../api/post/read";

// Retrieve the post ID from localStorage
const postId = JSON.parse(localStorage.getItem("postId"));

if (postId) {
  loadPost(postId);
} else {
  console.error("No postId found in localStorage");
  document.body.innerHTML = "<p>No post selected.</p>";
}

/**
 * Loads the post data from the API and displays it.
 *
 * @param {string} postId - The ID of the post to be loaded.
 * @returns {Promise<void>} - A promise that resolves when the post is loaded.
 */

async function loadPost(postId) {
  try {
    const post = await readPost(postId);
    if (post && post.data) {
      displayPost(post.data);
    } else {
      document.body.innerHTML = "<p>Post not found.</p>";
    }
  } catch (error) {
    console.error("Error loading post:", error);
    document.body.innerHTML = "<p>Failed to load post.</p>";
  }
}

/**
 * Displays the post on the page, including title, content, and author information.
 *
 * @param {Object} post - The post object containing details to display.
 * @returns {void}
 */
function displayPost(post) {
  const postContainer = document.createElement("div");
  postContainer.classList.add("single-post");

  const title = document.createElement("h1");
  title.textContent = post.title;

  const content = document.createElement("p");
  content.textContent = post.body;

  const authorName = post.author?.name || "Unknown Author";
  const postDate = new Date(post.created).toLocaleDateString();

  const metaInfo = document.createElement("div");
  metaInfo.textContent = `By ${authorName} on ${postDate}`;

  postContainer.append(title, metaInfo, content);

  if (post.media?.url) {
    const image = document.createElement("img");
    image.src = post.media.url;
    image.alt = post.media.alt || "Post image";
    postContainer.appendChild(image);
  }
}
