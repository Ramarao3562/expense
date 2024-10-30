pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Cloning the repository
                git 'https://github.com/Ramarao3562/expense.git' // Use your repository URL
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Installing dependencies
                    bat 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    // Building the app
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Move the build files to your desired deployment location
                // This can vary depending on your server setup
                script {
                    bat 'xcopy /s /e /i build\\* C:\\Deployments\\expense' // Adjust the path as needed
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
