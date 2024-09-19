export function photographerFactory(donnee) {
  const { name, portrait, city, country, tagline, price, id } = donnee;
  const article = `
    <article>
        <a href="./photographe.html?id=${id}" title="${name}">
            <img src="./assets/photographers/${portrait}" alt="">
            <h2>${name}</h2>
        </a>
        <p >${city}, ${country}</p>
        <p>${tagline}</p>
        <p>${price}€/jour</p>
    </article>
    `;
  return article;
}
