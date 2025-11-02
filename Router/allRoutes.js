import Route from "./Route.js";

//Routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
];

//title : Route.title - websitename
export const websiteName = "Quai Antique";