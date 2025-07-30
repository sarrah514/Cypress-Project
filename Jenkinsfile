pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat '''
                    npx cypress run --reporter mochawesome ^
                    --reporter-options reportDir=cypress/reports,overwrite=false,html=false,json=true ^
                    --spec "cypress/e2e/ajoutcv.cy.js"
                '''
            }
        }

        stage('Generate HTML report') {
            steps {
                bat 'mkdir mochareports'
                bat 'npx mochawesome-merge cypress/reports/*.json > mochareports/output.json'
                bat 'npx marge mochareports/output.json --reportDir mochareports --reportFilename index.html'
            }
        }
    }

    post {
        always {
            publishHTML([
                reportDir: 'mochareports',
                reportFiles: 'index.html',
                reportName: 'Rapport de test Cypress',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])
        }
    }
}
