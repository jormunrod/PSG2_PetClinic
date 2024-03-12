const scanner = require('sonarqube-scanner');
// Replace with your project name key and token and 
// use the command 'node ./sonarqube/sonarscan.js' 
// on the frontend folder to analyze
scanner(
    {
        serverUrl: 'https://oitilo.us.es/sonar',
        token: "<your token>",
        options: {
            'sonar.projectName': 'petclinic-react-frontend',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'petclinic-react-frontend',
            'sonar.projectVersion': '0.0.1',
            'sonar.login': '<your token>',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)