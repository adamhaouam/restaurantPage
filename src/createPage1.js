export default function createPage1() {
    const content = document.getElementById("content");
    content.textContent = "";
    console.log("Generating page 1!");

    const title = document.createElement("h1");
    title.textContent = "Home"
    content.appendChild(title);

    const section1 = document.createElement("div")
    section1.classList.add("section");
    content.appendChild(section1);

    const subheading1 = document.createElement("h2");
    subheading1.textContent = "Section 1";
    section1.appendChild(subheading1);

    const body1 = document.createElement("p");
    body1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    section1.appendChild(body1);


    const section2 = document.createElement("div")
    section2.classList.add("section");
    content.appendChild(section2);

    const subheading2 = document.createElement("h2");
    subheading2.textContent = "Section 2";
    section2.appendChild(subheading2);

    const body2 = document.createElement("p");
    body2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    section2.appendChild(body2);

};



