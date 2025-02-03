var app = angular.module('projectTrackingApp', []);

app.controller('CollaboratorController', ['$scope', '$window' , function($scope, $window) {
    var self = this;

    self.collaborators = [];

    self.addCollaborator = function() {
        if (self.name && self.rollno && self.email && self.role) {
            self.collaborators.push({
                name: self.name,
                rollno: self.rollno,
                email: self.email,
                role: self.role
            });

            // Clear form fields
            self.name = '';
            self.rollno = '';
            self.email = '';
            self.role = '';
        }
    };

    self.done = function() {
        alert("Collaborators added successfully!");
        // Add your logic here to handle what happens when "Done" is clicked.
        // For example, navigate to another page or close the form.
        self.redirectToCreateLogger();
    };
    self.redirectToCreateLogger = function(){
    $window.location.href = 'create-logger.html';
    };
}]);

