var CreateFeedView = function(service) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(service));
        return this;
    };

    this.initialize();

}
