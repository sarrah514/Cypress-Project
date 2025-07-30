pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/sarrah514/Cypress-Project.git', branch: 'main'
            }
        }
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Check files') {
            steps {
                bat 'dir cypress\\e2e'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npx cypress run --spec cypress/e2e/ajoutcv.cy.js'
            }
        }
        stage('Publish report') {
            steps {
                // ajoute ta génération de rapport ici si besoin
            }
        }
    }
}
