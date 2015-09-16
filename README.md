# TC-Ticket-Web-Viewer
TrinityCore Ticket Web Viewer is a tool built with [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com) to view all open tickets via web.

It is based on the [TrinityCore JSON RESTful API](https://github.com/ShinDarth/TC-JSON-API/).

![TrinityCore Ticket Web Viewer](https://raw.githubusercontent.com/ShinDarth/TC-Ticket-Web-Viewer/master/img/screenshot.png "TrinityCore Ticket Web Viewer")

## Installation

The application requires the [TrinityCore JSON RESTful API](https://github.com/ShinDarth/TC-JSON-API/) to access to the **characters** database.

Clone the TC-Ticket-Web-Viewer folder inside your web server directory:

`git clone https://github.com/ShinDarth/TC-Ticket-Web-Viewer.git`

Then copy the file **config.js.dist** to **config.js**, open it and set properly with the path of the API:

`app.api = "../TC-JSON-API/public/index.php/";`

and the name of your server:

`app.serverName = "YourServerName";`

### License

The TrinityCore Ticket Web Viewer is open-sourced software licensed under the [GNU GPL license](https://github.com/ShinDarth/TC-Search-Engine/blob/master/LICENSE).

