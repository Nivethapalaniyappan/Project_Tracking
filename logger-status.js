var app = angular.module('projectTrackingApp', []);

app.controller('ProjectTrackingController', function($scope) {
  $scope.projects = [
    {
      name: 'NIVETHA P',
      rollno:'7376221EE131',
      mail:'nivetha.ee22@bitsathy.ac.in',
      domain:'Hardware',
      title: 'PC BASED HOME AUTOMATION',
      guide:'ABI S',
      document: '7376221E131-PDA-23.05.2024',
      student1:'DEEPIKA A (7376221EE106) deepika.ee22@bitsathy.ac.in',
      student2: 'THANIKSHA P R (7376221E158) thaniksha.ee22@bitsathy.ac.in',
      status: 'INITIATED',
      statusClass: 'status-initiated'
    },
    {
      name: 'NIVETHA P',
      rollno: '7376221EE131',
      mail: 'nivetha.ee22@bitsathy.ac.in',
      domain: 'Hardware',
      title: 'EFFICIENT POWER MANAGER',
      guide: 'DHIVYA K',
      document: '7376221E131-PDA-11.03.2024',
      student1: 'THANIKSH P R (7376221EE158) thaniksha.ee22@bitsathy.ac.in',
      student2: 'RAKSHAYA S (7376221E138) rakshaya.ee22@bitsathy.ac.in',
      status: 'APPROVED',
      statusClass: 'status-approved'
    },
    {
      name: 'NIVETHA P',
      rollno:'7376221EE131',
      mail:'nivetha.ee22@bitsathy.ac.in',
      domain:'Hardware',
      title: 'ULTRASONIC RADAR PROJECT',
      guide:'ABI S',
      document: '7376221E131-PDA-02.02.2024',
      student1:'DEEPIKA A (7376221EE106) deepika.ee22@bitsathy.ac.in',
      student2: 'THANIKSHA P R (7376221E158) thaniksha.ee22@bitsathy.ac.in',
      status: 'REJECTED',
      statusClass: 'status-rejected'
    },
    {
      name: 'NIVETHA P',
      rollno: '7376221EE131',
      mail: 'nivetha.ee22@bitsathy.ac.in',
      domain:'Software',
      title: 'AI HEALTHCARE BOT SYSTEM USING PYTHON',
      guide: 'DHIVYA K',
      document: '7376221E131-PDA-12.10.2023',
      student1: 'THANIKSH P R (7376221EE158) thaniksha.ee22@bitsathy.ac.in',
      student2: 'RAKSHAYA S (7376221E138) rakshaya.ee22@bitsathy.ac.in',
      status: 'APPROVED',
      statusClass: 'status-approved'
    }
  ];
});
