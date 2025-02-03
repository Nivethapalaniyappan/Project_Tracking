/*angular.module('projectTrackingApp')
    .service('DataService', function() {
        var formData = {
            name: '',
            rollNo: '',
            email: ''
        };

        return {
            getFormData: function() {
                return formData;
            },
            setFormData: function(data) {
                formData = data;
            }
        };
    });*/


    app.factory('DataService', function() {
        var formData = {};
    
        return {
            getFormData: function() {
                return formData;
            },
            setFormData: function(data) {
                formData = data;
            }
        };
    });
    
