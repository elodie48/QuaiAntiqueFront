import Route from "./Route.js";

//Routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["admin", "guest"] ),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["admin", "guest"]),
    new Route("/allBooking", "Vos réservations", "/pages/booking/allBooking.html", ["guest"]),
    new Route("/book", "Réserver", "/pages/booking/book.html", ["guest"]),

];

//title : Route.title - websitename
export const websiteName = "Quai Antique";