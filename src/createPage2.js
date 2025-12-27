import main1img from "./media/schnitty.jpg";
import main2img from "./media/steak.jpg";

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

    const menu1 = document.createElement("div");
    menu1.classList.add("menu");
    section1.appendChild(menu1);

    const dish1 = document.createElement("div");
    menu1.appendChild(dish1);

    const main1 = document.createElement("h3");
    main1.textContent = "Chicken Schitzel $21";
    dish1.appendChild(main1);

    const main1desc = document.createElement("p");
    main1desc.textContent = "Chicken breast crumbed and fried with fries and coleslaw";
    dish1.appendChild(main1desc);

    const main1pic = document.createElement("img");
    main1pic.src = main1img;
    dish1.appendChild(main1pic);

    const dish2 = document.createElement("div");
    menu1.appendChild(dish2);

    const main2 = document.createElement("h3");
    main2.textContent = "Steak $25";
    dish2.appendChild(main2);

    const main2desc = document.createElement("p");
    main2desc.textContent = "200g rib eye cooked medium rare with mash potato and a salad";
    dish2.appendChild(main2desc);

    const main2pic = document.createElement("img");
    main2pic.src = main2img;
    dish2.appendChild(main2pic);


    


    const section2 = document.createElement("div")
    section2.classList.add("section");
    content.appendChild(section2);

    const subheading2 = document.createElement("h2");
    subheading2.textContent = "Sides";
    section2.appendChild(subheading2);

    const side1 = document.createElement("h3");
    side1.textContent = "Shoestring Fries $7";
    section2.appendChild(side1);

    const side1desc = document.createElement("p");
    side1desc.textContent = "Mmmmm deep fried potato";
    section2.appendChild(side1desc);

    const side2 = document.createElement("h3");
    side2.textContent = "Garlic Bread $9";
    section2.appendChild(side2);

    const side2desc = document.createElement("p");
    side2desc.textContent = "A lot of butter and a lot of garlic on toasted bread";
    section2.appendChild(side2desc);


};
