import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read";
import { renderPosts } from "../../ui/post/renderPosts";

/**
 * Fetches the latest posts and renders them to the DOM.
 *
 * This function retrieves posts using the `readPosts` function,
 * and then displays the most recent 12 posts (or fewer if less than 12 posts exist).
 * If an error occurs during the fetch process, it logs the error to the console.
 *
 * @returns {Promise<void>} - A promise that resolves when the posts are fetched and rendered.
 */

const seePosts = async () => {
  try {
    const posts = await readPosts();

    const latestPosts = posts.length > 12 ? posts.slice(-12) : posts;

    renderPosts(latestPosts, "posts");
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

seePosts();
authGuard();
setLogoutListener();
