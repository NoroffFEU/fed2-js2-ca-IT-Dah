import { createPost } from "../../api/post/create";

/**
 * Handles the form submission for creating a new post. Extracts form data, including title, body, tags, and media,
 * then calls the `createPost` function to send the data to the server.
 *
 * If the post is successfully created, the form is reset, and the user is redirected to the homepage after a delay.
 *
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} - A promise that completes when the post is created.
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
    console.log("Post created successfully:", newPost);

    document.getElementById("content").textContent =
      "Post created successfully! Redirecting to homepage...";

    event.target.reset();

    setTimeout(() => {
      window.location.href = "/";
    }, 2500);
  } catch (error) {
    console.error("Error while creating post:", error);
  }
}
