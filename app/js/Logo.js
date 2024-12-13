export const Logo = () => {
    const logo = document.createElement("section");
    logo.classList.add("logo");

    const title = document.createElement("h1");
    title.innerHTML = `INTELEC`;

    const p = document.createElement("p");
    p.innerHTML = `Materiales Eléctricos`

    logo.appendChild(title);
    logo.appendChild(p);

    return logo;
}