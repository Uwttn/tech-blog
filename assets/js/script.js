const nav = document.getElementsByTagName("nav");

// renders navigation bar
nav[0].innerHTML = `
<ul>
<a id="home"><li>Home</li></a>
<a id="languages"><li>languages</li></a>
</ul>
`;

const setLinks = () => {
  const homePage = window.location.pathname;

  let pageMapping;

  if (homePage.includes("index.html")) {
    pageMapping = {
      home: "./index.html",
      languages: "./assets/pages/1-construction/languages.html",
    };
  } else {
    pageMapping = {
      home: "../../../index.html",
      languages: "./languages.html",
    };
  }
  for (const id in pageMapping) {
    const linkElement = document.getElementById(id);
    linkElement.href = pageMapping[id];
  }
};

setLinks();