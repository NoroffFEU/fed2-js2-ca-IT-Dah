import { readPost } from "../../api/post/read";
import { onDeletePost } from "../../ui/post/delete";

const postId = JSON.parse(localStorage.getItem("postId"));

if (postId) {
  loadPost(postId);
} else {
  console.error("No postId found in localStorage");
  document.body.innerHTML = "<p>No content</p>";
}

/**
 * Loads the post data from the API and displays it on the page.
 *
 * @param {string} postId - The ID of the post to load.
 * @returns {Promise<void>} - A promise that resolves when the post is loaded.
 */
async function loadPost(postId) {
  try {
    const post = await readPost(postId);
    if (post && post.data) {
      displayPost(post.data);
    } else {
      document.body.innerHTML = "<p>Missing post</p>";
    }
  } catch (error) {
    console.error("Error loading post:", error);
    document.body.innerHTML = "<p>Could not load post</p>";
  }
}

const userInfo = JSON.parse(localStorage.getItem("userData"));
const loggedInUserName = userInfo?.name;

/**
 * Displays the post on the page, including the title, content, and author info.
 *
 * @param {Object} post - The post object with details to show.
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

  if (post.author?.name === loggedInUserName) {
    const deleteButton = createDeleteButton(post.id);
    const editButton = createEditButton(post.id);
    postContainer.appendChild(deleteButton);
    postContainer.appendChild(editButton);
  }

  document.body.appendChild(postContainer);
}

/**
 * Creates a delete button for the post.
 *
 * @param {string} postId - The ID of the post to delete.
 * @returns {HTMLButtonElement} - The delete button.
 */
function createDeleteButton(postId) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.postId = postId;
  deleteButton.addEventListener("click", onDeletePost);
  return deleteButton;
}

/**
 * Creates an edit button that links to the post's edit page.
 *
 * @param {string} postId - The ID of the post to edit.
 * @returns {HTMLButtonElement} - The edit button.
 */
function createEditButton(postId) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", async () => {
    localStorage.setItem("postId", JSON.stringify(postId));
    window.location.href = `/post/edit/?id=${postId}`;
  });
  return editButton;
}
