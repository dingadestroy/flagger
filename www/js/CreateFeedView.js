var CreateFeedView = function(service) {
	this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.submitfeed-btn', this.sendToDB);
        this.render();
    };

//    document.addEventListener("deviceready", onDeviceReady, false);
   
/*
    this.initialize = function() {
        this.$el = $('<div/>');
	  this.$el.on('click','.submitfeed-btn',  function() {
        alert("Employee Directory v3.4");
    };
*/
    this.render = function() {
        this.$el.html(this.template(service));
        return this;
    };

   
   this.sendToDB = function() {
      //  var options = new FileTransfer();
        var feed = $('.feed-input').val();
	service.sendFeed(feed);
	//console.log(feed);
        //alert(feed);       
	 };

    this.initialize();

   

}
