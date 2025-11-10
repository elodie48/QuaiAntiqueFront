import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Creating a route for the 404 page (page not found)
const route404 = new Route("404", "Page introuvable", "/pages/404.html", []);

// Function to recover route corresponding to a given URL
const getRouteByUrl = (url) => {
  let currentRoute = null;
  // all routes' process to find their correspondence
  allRoutes.forEach((element) => {
    if (element.url == url) {
      currentRoute = element;
    }
  });
  // If no correspondence found, return route 404
  if (currentRoute != null) {
    return currentRoute;
  } else {
    return route404;
  }
};

// Function to load page content
const LoadContentPage = async () => {
  const path = window.location.pathname;
  // Recovery of the current URL
  const actualRoute = getRouteByUrl(path);

  // Check access rights to page
const allRolesArray = actualRoute.authorize;

if(allRolesArray.length > 0){
  if(allRolesArray.includes("disconnected")){
    if(isConnected()){
      window.location.replace("/");
    }
  }
  else{
    const roleUser = getRole();
    if(!allRolesArray.includes(roleUser)){
      window.location.replace("/");
    }
  }
}

  // Recovery of the HTML content of the route
  const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
  // Adding HTML content to the ID element "main-page"
  document.getElementById("main-page").innerHTML = html;

  // Adding JavaScript content
  if (actualRoute.pathJS != "") {
    // Creating a script tag
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", actualRoute.pathJS);

    // Adding a script tag to the docuement body
    document.querySelector("body").appendChild(scriptTag);
  }

  // Changing page title
  document.title = actualRoute.title + " - " + websiteName;

  // Show and hide elements according to role
  showAndHidenElementsForRoles();
};

// Function to manage routing event (click on the links)
const routeEvent = (event) => {
  event = event || window.event;
  event.preventDefault();
  // Updating of the URL in the browser history
  window.history.pushState({}, "", event.target.href);
  // Loading content of the new page
  LoadContentPage();
};

// Managing the step back event in the browser history
window.onpopstate = LoadContentPage;
// Assignation of the function routeEvent to the window route property
window.route = routeEvent;
// Loading content to the initial page loading
LoadContentPage();