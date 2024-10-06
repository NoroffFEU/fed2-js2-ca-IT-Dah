/**
 * Displays a list of user posts in the specified container in the DOM.
 *
 * @param {Array<Object>} userPosts - An array of post objects to display.
 * @param {string} id - The ID of the DOM element where the posts will be shown.
 * @returns {void}
 */

export const renderPosts = (userPosts, id) => {
  const outerContainer = document.getElementById(id);

  userPosts.forEach((post) => {
    const container = document.createElement("div");
    container.className = "postContainer";

    const title = document.createElement("h2");
    title.innerText = post.title;
    title.className = "postTitle";

    const content = document.createElement("p");
    content.innerText = post.body;

    const imageDiv = document.createElement("div");
    imageDiv.className = "imageDiv";

    const image = document.createElement("img");
    if (post.media) {
      image.src = post.media.url;
      image.alt = post.media.alt;
    }
    image.className = "postImage";

    const viewPostBtn = document.createElement("button");
    viewPostBtn.innerText = "View Post";
    viewPostBtn.className = "viewPostBtn";
    viewPostBtn.addEventListener("click", async () => {
      window.location.href = "/post/";
      localStorage.setItem("postId", JSON.stringify(post.id));
    });

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageDiv);
    imageDiv.appendChild(image);
    container.appendChild(viewPostBtn);
    outerContainer.appendChild(container);
  });
};
