
var HomeView = function (service) {

    var feedListView;
    var createFeedView = CreateFeedView;
    console.log("homeview");
   // this.doTimeout;

    this.initialize = function() {
        this.$el = $('<div/>');
        //this.$el.on('keyup', '.search-key', this.findByName);
	this.$el.on('click','.help-btn', this.addLocation);
	//this.$el.on('click','.timeout-btn', this.doTimeout);
	//createfeed-btn
	//this.doTimeout;
      this.$el.on('click','.createfeed-btn', function() {
                $('body').html(new CreateFeedView(service).render().$el);   }
        );
	this.$el.on(document ).ready(this.doTimeout
/*
	function() {
	setTimeout('alert(\'Surprise!\')', 5000)
	console.log("ready");
}
*/
);

        feedListView = new FeedListView();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(feedListView.$el);
	this.findAll();
        return this;
    };

    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(employees) {
            employeeListView.setEmployees(employees);
        });
    };

   this.findAll = function() {
        service.findAll().done(function(feeds) {
            feedListView.setFeeds(feeds);
        });
    };


   this.doTimeout = function() {
	//setTimeout('alert(\'Surprise!\')', 5000);
	setInterval ( doSomething, 5000 );
	function doSomething ()
	{
	console.log("do something");
	service.findAll().done(function(feeds) {
            feedListView.setFeeds(feeds);
        });

	//location.reload();
	}
};


    this.addLocation = function(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(
 	successCallback,
    	errorCallback_highAccuracy,
        {maximumAge:600000, timeout:5000, enableHighAccuracy: true}
	); };

function errorCallback_highAccuracy(position) {
    if (error.code == error.TIMEOUT)
    {
        // Attempt to get GPS loc timed out after 5 seconds, 
        // try low accuracy location
        alert("attempting to get low accuracy location");
        navigator.geolocation.getCurrentPosition(
               successCallback, 
               errorCallback_lowAccuracy,
               {maximumAge:600000, timeout:10000, enableHighAccuracy: false});
        return;
    }
    
    var msg = "Can't get your location (high accuracy attempt). Error = ";
    if (error.code == 1)
        msg += "PERMISSION_DENIED";
    else if (error.code == 2)
        msg += "POSITION_UNAVAILABLE";
    msg += ", msg = "+error.message;
    
    alert(msg);
}

function errorCallback_lowAccuracy(position) {
    var msg = "Can't get your location (low accuracy attempt). Error = ";
    if (error.code == 1)
        msg += "PERMISSION_DENIED";
    else if (error.code == 2)
        msg += "POSITION_UNAVAILABLE";
    else if (error.code == 3)
        msg += "TIMEOUT";
    msg += ", msg = "+error.message;
    
    alert(msg);
}

function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("Your location is: " + latitude + "," + longitude+" </p><p>Accuracy="+position.coords.accuracy+"m");
}

    this.initialize();
}
