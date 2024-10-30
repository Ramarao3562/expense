pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ramarao3562/expense.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    bat 'xcopy /s /e /i build\\* C:\\inetpub\\wwwroot'
                }
            }
        }
    }

    post {
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
