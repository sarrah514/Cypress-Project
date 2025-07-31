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
                bat 'npm ci'
                bat 'npx cypress -v'
            }
        }
        stage('Check files') {
            steps {
                bat 'dir cypress\\e2e'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npx cypress run '
            }
        }
        stage('Publish report') {
            steps {
                echo 'À implémenter'
            }
        }
    }
}
