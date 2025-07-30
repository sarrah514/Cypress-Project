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
                sh 'npm install'
            }
        }

        stage('Run ajoutcv.cy.js test') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/ajoutcv.cy.js"'
            }
        }
    }

    post {
        always {
            echo 'Tests Cypress terminés'
        }
    }
}
