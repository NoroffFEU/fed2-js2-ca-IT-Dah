import { updatePost } from "../../api/post/update";

/**
 * Handles the form submission for updating a post. Collects the updated values
 * for the title, body, tags, and media, then calls the `updatePost` function
 * to send the updated data to the server.
 *
 * If the update is successful, the user is redirected to the homepage.
 *
 * @param {Event} event - The form submit event.
 * @param {number|string} postId - The ID of the post being updated.
 * @returns {Promise<void>} - A promise that resolves when the update process is complete.
 */

export async function onUpdatePost(event, postId) {
  event.preventDefault();

  const title = event.target.title.value;
  const body = event.target.body.value;
  const tags = event.target.tags.value.split(",").map((tag) => tag.trim());
  const mediaUrl = event.target.mediaUrl.value;
  const mediaAlt = event.target.mediaAlt.value;

  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;

  try {
    const updatedPost = await updatePost(postId, { title, body, tags, media });
    console.log("Post updated:", updatedPost);
    window.location.href = "/";
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
