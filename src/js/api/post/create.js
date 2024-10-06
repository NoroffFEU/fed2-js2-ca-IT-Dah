import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";

/**
 * Sends a request to the API to create a new post with the given data.
 *
 * The post includes a title, body, tags, and optional media (URL and alt text).
 * If successful, the new post's data is returned.
 *
 * @param {Object} postData - The data for the new post.
 * @param {string} postData.title - The post's title.
 * @param {string} postData.body - The post's content.
 * @param {Array<string>} [postData.tags=[]] - Tags for the post.
 * @param {Object|null} [postData.media=null] - Optional media (URL and alt text).
 * @param {string} postData.media.url - The media URL (if any).
 * @param {string} postData.media.alt - The media alt text (if any).
 * @returns {Promise<Object>} - A promise that resolves to the new post data.
 * @throws {Error} - Throws an error if the request fails.
 */

export async function createPost({ title, body, tags = [], media = null }) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
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
        "Failed to create post:",
        response.status,
        response.statusText,
        errorData
      );
      throw new Error(`Error ${response.status}: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
