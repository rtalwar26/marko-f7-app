module.exports = class {

    onCreate(){

    }

    onMount(){
        var app = new Framework7();

        var app = new Framework7({
            // App root element
            root: '#app',
            // App Name
            name: 'My App',
            // App id
            id: 'com.myapp.test',
            // Enable swipe panel
            panel: {
              swipe: 'left',
            },
            // Add default routes
            routes: [
              {
                path: '/about/',
                url: 'about',
              },
            ],
            // ... other parameters
          });
          var mainView = app.views.create('.view-main');
    }
}