var EmployeeService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://10.147.189.140:5000/employees";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findAll = function(id) {
        return $.ajax({url: 'http://10.147.189.140:5000/feeds' });
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }

   this.sendFeed = function(feed) {
     return $.ajax({url: 'http://10.147.189.140:5000/feeds/enterfeed' + "?feed=" + feed });
   }
}
