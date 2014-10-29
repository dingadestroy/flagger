var EmployeeService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://localhost:5000/employees";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findAll = function(id) {
        return $.ajax({url: 'http://localhost:5000/feeds' });
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }


}
