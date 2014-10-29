var CreateFeedView = function(service) {
	this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('keyup', '.submitfeed-btn', this.sendToDB);
        this.render();
    };
   
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
	console.log("send feed");
        var feed = $('.submitfeed-btn').val();
         $.ajax({
                type: "POST",
                url: "http://10.147.70.29:5000/feeds/enterfeed",
                dataType: "json",
                data: {feed: feed},
                success: function(data) {
                 obj = JSON.parse(data);
                 if (obj && obj.success === true) {
                        console.log(obj);
                        alert("success");
                         }
                        },
                 error: function(e) {
                        alert('Error: ' + e.message);
                        } });
                };

    this.initialize();

   

}
