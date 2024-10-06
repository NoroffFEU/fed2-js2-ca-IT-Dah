import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { renderPosts } from "../../ui/post/renderPosts";

/**
 * Fetches the latest posts and displays them in the DOM.
 *
 * This function gets posts using the `readPosts` function,
 * and shows the most recent 12 posts (or fewer if there aren't 12).
 * If an error happens, it logs the error in the console.
 *
 * @returns {Promise<void>} - A promise that finishes when the posts are fetched and displayed.
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
