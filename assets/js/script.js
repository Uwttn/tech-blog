const nav = document.getElementsByTagName("nav");

// Renders the navigation bar
nav[0].innerHTML = `
  <ul>
    <a id="home"><li>Home</li></a>
    <a id="code"><li>Coding Languages</li></a>
  </ul>
`;

const setLinks = () => {
  const homePage = window.location.pathname;

  let pageMapping;

  // Check if the current page is inside the "assets/pages" folder
  if (homePage.includes("/assets/pages/")) {
    // If we are on a page inside the "assets/pages" folder
    pageMapping = {
      home: "../../../index.html", // Link back to homepage from assets/pages
      code: "./index.html", // Relative path within assets/pages folder
    };
  } else {
    // If we are on the homepage or another location
    pageMapping = {
      home: "./index.html", // Link back to homepage
      code: "./assets/pages/code/index.html", // Full path to the code page from the root
    };
  }

  // Update the href for each link element
  for (const id in pageMapping) {
    const linkElement = document.getElementById(id);
    if (linkElement) {
      linkElement.href = pageMapping[id];
    }
  }
};

// Call the function to set links
setLinks();
