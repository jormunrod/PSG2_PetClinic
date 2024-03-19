const scanner = require('sonarqube-scanner');
// Replace with your project name key and token and 
// use the command 'node ./sonarqube/sonarscan.js' 
// on the frontend folder to analyze
scanner(
    {
        serverUrl: 'https://oitilo.us.es/sonar',
        token: "<0e637d857de37b5e3497234501c4efaed373406e>",
        options: {
            'sonar.projectName': 'PSG2-2324-G4-44',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'PSG2-2324-G4-44',
            'sonar.projectVersion': '0.0.1',
            'sonar.login': '<0e637d857de37b5e3497234501c4efaed373406e>',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)