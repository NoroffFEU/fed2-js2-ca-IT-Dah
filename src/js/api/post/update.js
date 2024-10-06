import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Sends a PUT request to the API to update an existing post by its ID.
 *
 * @param {number|string} postId - The ID of the post to update.
 * @param {Object} postData - The updated post data.
 * @param {string} postData.title - The updated post title.
 * @param {string} postData.body - The updated post content.
 * @param {Array<string>} [postData.tags=[]] - Updated tags for the post.
 * @param {Object|null} [postData.media=null] - Optional updated media (URL and alt text).
 * @param {string} postData.media.url - The updated media URL (if any).
 * @param {string} postData.media.alt - The updated media alt text (if any).
 * @returns {Promise<Object>} - A promise that resolves to the updated post data.
 * @throws {Error} - Throws an error if the request fails.
 */

export async function updatePost(id, { title, body, tags, media }) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        title,
        body,
        tags,
        media: media ? { url: media.url, alt: media.alt } : null,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      const errorData = await response.json();
      console.error(
        "Could not update the post:",
        response.status,
        response.statusText,
        errorData
      );
      throw new Error(`Error ${response.status}: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error updating the post:", error);
    throw error;
  }
}
