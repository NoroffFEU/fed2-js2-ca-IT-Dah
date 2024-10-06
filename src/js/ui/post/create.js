import { createPost } from "../../api/post/create";

/**
 * Handles the new post form submission. Extracts data like title, body, tags, and media,
 * then calls the `createPost` function to send the data to the server.
 *
 * If the post is created successfully, the form is reset, and the user is redirected to the homepage after a short delay.
 *
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that finishes when the post creation is complete.
 */

export async function onCreatePost(event) {
  event.preventDefault();
  const title = event.target.title.value;
  const body = event.target.body.value;
  const tags = event.target.tags.value.split(",").map((tag) => tag.trim());
  const mediaUrl = event.target.mediaUrl.value;
  const mediaAlt = event.target.mediaAlt.value;

  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;

  try {
    const newPost = await createPost({ title, body, tags, media });

    document.getElementById("content").textContent =
      "Post created successfully! Loading..."; //Redirecting to the homepage after creating a post

    event.target.reset();

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  } catch (error) {
    console.error("Could not create post", error);
  }
}
