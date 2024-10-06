import { deletePost } from "../../api/post/delete";

/**
 * Handles deleting a post when the user confirms the action.
 * Gets the post ID from the target element's dataset, asks for confirmation,
 * and calls the `deletePost` function to remove the post if confirmed.
 *
 * @param {Event} event - The click event triggered by the delete button.
 * @returns {Promise<void>} - A promise that finishes when the deletion is complete.
 */

export async function onDeletePost(event) {
  const postId = event.target.dataset.postId;
  const postElement = event.target.closest(".post");

  if (!postId) {
    console.error("Post ID not found.");
    return;
  }

  const confirmed = confirm("Do you want to delete this post?");
  if (confirmed) {
    const success = await deletePost(postId);
    if (success) {
      alert("Post is deleted.");
      localStorage.removeItem("postId");
      const currentPath = window.location.pathname;

      if (currentPath.includes("post")) {
        window.location.href = "/";
      } else {
        postElement.remove();
      }
    } else {
      alert("Failed to delete the post.");
    }
  }
}
