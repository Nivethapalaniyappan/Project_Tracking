angular.module('projectTrackingApp', [])
.controller('ReportController', function() {
    var self = this;

    self.formData = {
        studentName: '',
        loggerId: '',
        projectTitle: '',
        weekStatus: '1',
        weeklyReport: null,
        completionProof: '',
        status: 'Initiated'
    };

    self.submitForm = function() {
        console.log('Form submitted with data:', self.formData);
    };
});
