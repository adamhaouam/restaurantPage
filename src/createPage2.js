//import main1img from "./media/schnitty.png";

export default function createPage2() {
    const content = document.getElementById("content");
    content.textContent = "";
    console.log("Generating page 2!");

    const title = document.createElement("h1");
    title.textContent = "Menu"
    content.appendChild(title);

    const section1 = document.createElement("div")
    section1.classList.add("section");
    content.appendChild(section1);

    const subheading1 = document.createElement("h2");
    subheading1.textContent = "Mains";
    section1.appendChild(subheading1);

    const main1 = document.createElement("h3");
    main1.textContent = "Chicken Schitzel";
    section1.appendChild(main1);

    const main1desc = document.createElement("p");
    main1desc.textContent = "Chicken breast crumbed and fried with fries and coleslaw";
    section1.appendChild(main1desc);

    const main1pic = document.createElement("img");
    section1.appendChild(main1pic);

    const main2 = document.createElement("h3");
    main2.textContent = "Steak";
    section1.appendChild(main2);

    const main2desc = document.createElement("p");
    main2desc.textContent = "200g rib eye cooked medium rare with mash potato and a salad";
    section1.appendChild(main2desc);

    const main2pic = document.createElement("img");
    section1.appendChild(main2pic);

    const section2 = document.createElement("div")
    section2.classList.add("section");
    content.appendChild(section2);

    const subheading2 = document.createElement("h2");
    subheading2.textContent = "Sides";
    section2.appendChild(subheading2);

    const body2 = document.createElement("p");
    body2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    section2.appendChild(body2);
};
