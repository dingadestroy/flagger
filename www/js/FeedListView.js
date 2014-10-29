var FeedListView = function () {

    var feeds;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setFeeds = function(list) {
        feeds = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(feeds));
        return this;
    };

    this.initialize();

}
