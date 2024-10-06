import { readPost } from "../../api/post/read";
import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update";

/**
 * Loads the post data into the edit form for the user to update.
 * It retrieves the post based on the postId, populates the form fields
 * with the current post data, and sets up the form submission handler.
 *
 * @returns {Promise<void>} - A promise that resolves when the post data is loaded.
 */

authGuard();

const postId = JSON.parse(localStorage.getItem("postId"));
const editPostForm = document.forms["editPost"];

async function loadPost() {
  try {
    const post = await readPost(postId);
    if (post && post.data) {
      editPostForm.title.value = post.data.title;
      editPostForm.body.value = post.data.body;
      editPostForm.tags.value = post.data.tags?.join(", ") || "";
      editPostForm.mediaUrl.value = post.data.media?.url || "";
      editPostForm.mediaAlt.value = post.data.media?.alt || "";
      editPostForm.addEventListener("submit", (event) =>
        onUpdatePost(event, postId)
      );
    } else {
      console.error("Post is not found.");
      document.body.innerHTML = "<p>Post not found</p>";
    }
  } catch (error) {
    console.error("Error loading post:", error);
    document.body.innerHTML = "<p>Could not load post</p>";
  }
}

loadPost();
