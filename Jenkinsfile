pipeline {
    agent any

    stages {
        stage('Checkout code') {
            steps {
                git url: 'https://github.com/sarrah514/cypress-project.git', branch: 'main'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run ajoutcv.cy.js test') {
            steps {
                bat 'npx cypress run --spec "cypress/e2e/ajoutcv.cy.js"'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML (target: [
                    reportDir: 'cypress/reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Cypress Test Report',
                    keepAll: true
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminé.'
        }
    }
}
