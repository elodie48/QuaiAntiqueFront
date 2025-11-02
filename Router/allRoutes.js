import Route from "./Route.js";

//Routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
];

//title : Route.title - websitename
export const websiteName = "Quai Antique";