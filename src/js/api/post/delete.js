import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Sends a DELETE request to the API to remove a post by its ID.
 *
 * @param {number|string} id - The ID of the post to delete.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the deletion was successful, or `false` if it failed.
 */

export async function deletePost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
      headers: headers(),
    });

    if (response.ok) {
      return true;
    } else {
      console.error(`Failed to delete post: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`Could not delete post:`, error);
    return false;
  }
}
