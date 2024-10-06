import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

/**
 * Fetches a specific post by its ID, including the author's details.
 *
 * Sends a GET request to the API to get a post by its ID. If successful,
 * the post data and author information are returned.
 *
 * @param {number|string} id - The ID of the post to fetch.
 * @returns {Promise<Object|undefined>} - A promise that resolves to the post data if successful, or `undefined` if it fails.
 */

export async function readPost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch post:", response.status);
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      ...(tag && { tag: tag }),
      _author: true,
    });

    const response = await fetch(`${API_SOCIAL_POSTS}?${params}`, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const data = await response.json();
      const posts = data.data;
      return posts;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export async function readPostsByUser(name, limit = 12, page = 1, tag) {}
