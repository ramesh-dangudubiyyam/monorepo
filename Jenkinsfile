pipeline {
  agent any
  
  tools {nodejs "nodejs"}
    
  stages {    
    stage('Cloning Git') {
      steps {
        git branch: 'main', url: 'https://github.com/ramesh-dangudubiyyam/monorepo'
      }
    }

    stage('Check node version') {
      steps {
        sh 'node -v'
      }
    }
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
  }     
}