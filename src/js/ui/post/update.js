import { updatePost } from "../../api/post/update";

/**
 * Handles the form submission for updating a post. Collects the updated title, body, tags, and media,
 * then calls the `updatePost` function to send the changes to the server.
 *
 * If the update is successful, the user is redirected to the homepage.
 *
 * @param {Event} event - The form submission event.
 * @param {number|string} postId - The ID of the post being updated.
 * @returns {Promise<void>} - A promise that finishes when the update process is complete.
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
    await updatePost(postId, { title, body, tags, media });
    window.location.href = "/";
  } catch (error) {
    console.error("Error while updating post:", error);
  }
}
