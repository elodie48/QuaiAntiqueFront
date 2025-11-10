export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/* Role definition
[] -> open to everybody
["disconnected"] -> open to disconnected users
["guest"] -> open to users with guest role
["admin"] -> open users with admin role
["admin", "guest"] -> open to users with admin or guest role
*/