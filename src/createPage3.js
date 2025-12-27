export default function createPage3() {
    const content = document.getElementById("content");
    content.textContent = "";
    console.log("Generating page 3!");

    const title = document.createElement("h1");
    title.textContent = "About"
    content.appendChild(title);

    const section1 = document.createElement("div")
    section1.classList.add("section");
    content.appendChild(section1);

    const subheading1 = document.createElement("h2");
    subheading1.textContent = "Bossman";
    section1.appendChild(subheading1);

    const body11 = document.createElement("p");
    body11.textContent = "The Boss";
    section1.appendChild(body11);
    const body12 = document.createElement("p");
    body12.textContent = "0412 345 678";
    section1.appendChild(body12);
    const body13 = document.createElement("p");
    body13.textContent = "bossman@bossmail.com";
    section1.appendChild(body13);


    const section2 = document.createElement("div")
    section2.classList.add("section");
    content.appendChild(section2);

    const subheading2 = document.createElement("h2");
    subheading2.textContent = "Joseph";
    section2.appendChild(subheading2);

    const body21 = document.createElement("p");
    body21.textContent = "The Other Guy";
    section2.appendChild(body21);
    const body22 = document.createElement("p");
    body22.textContent = "0411 222 333";
    section2.appendChild(body22);
    const body23 = document.createElement("p");
    body23.textContent = "admin@bossmail.com";
    section2.appendChild(body23);
};
