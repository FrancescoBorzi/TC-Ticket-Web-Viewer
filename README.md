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

## Contribute

You can help us [opening a new issue](https://github.com/ShinDarth/TC-Ticket-Web-Viewer/issues/new) to report a bug or a suggestion

or you can donate to support us

[![Donate](https://www.paypal.com/en_GB/i/btn/btn_donateCC_LG.gif "Donate")](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=52AZFFD86N39Q)

### License

The TrinityCore Ticket Web Viewer is open-sourced software licensed under the [GNU AGPL license](https://github.com/ShinDarth/TC-Ticket-Web-Viewer/blob/master/LICENSE).

