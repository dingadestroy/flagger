var HomeView = function (service) {

    var feedListView;
    var createFeedView = CreateFeedView;

    this.initialize = function() {
        this.$el = $('<div/>');
        //this.$el.on('keyup', '.search-key', this.findByName);
	this.$el.on('click','.help-btn', function() {
        	alert("Flagger v3.4");    } 
	);
	//createfeed-btn

      this.$el.on('click','.createfeed-btn', function() {
                $('body').html(new CreateFeedView(service).render().$el);   }
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

    this.initialize();
}
