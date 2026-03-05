# Deploy a Containerized Application to AWS

This project demonstrates how to containerize an application and deploy it to AWS using a simple DevOps workflow.

The application is packaged with Docker, stored in Amazon ECR, deployed with ECS Fargate, and automated using GitHub Actions. Infrastructure is provisioned using Terraform.

## Project Overview

This project shows how to:

* Containerize an application using Docker
* Push container images to Amazon ECR
* Provision cloud infrastructure with Terraform
* Deploy containers using ECS Fargate
* Automate deployments using GitHub Action.

## Architecture

A simple view of the system:

```
Developer (Build the code)
   │
   │ 
   ▼
Build Docker Image
   │ provision with Terraform
   ▼
Amazon ECR
   │
   ▼
Amazon ECS Fargate
   │ push code
   ▼
GitHub Repository
   │
   ▼
Automate with GitHub Action
   
```

### Deployment Flow

1. Code is pushed to GitHub
2. GitHub Actions starts the CI/CD pipeline
3. Docker builds the application image
4. The image is pushed to Amazon ECR
5. ECS Fargate pulls the latest image
6. The application is deployed automatically

## Technologies Used

* AWS ECS Fargate
* Amazon ECR
* Docker
* Terraform
* GitHub Actions
* Node.js

## Run Locally

Clone the repository:

```
git clone https://github.com/ijayhub/Deploy-a-Containerized-Application-to-AWS-with-Docker-Terraform-ECS-Fargate-and-CI-CD.git
cd Deploy-a-Containerized-Application-to-AWS-with-Docker-Terraform-ECS-Fargate-and-CI-CD
```

Build the Docker image:

```
docker build -t job-tracker .
```

Run the container:

```
docker run -p 3000:3000 job-tracker
```

Open your browser:

```
http://localhost:3000
```

## Infrastructure Deployment

Infrastructure is created using Terraform.

Resources created include:

* VPC
* Public subnets
* Security groups
* Application Load Balancer
* ECS Cluster
* ECS Service (Fargate)

Deploy infrastructure:

```
terraform init
terraform plan
terraform apply -auto-approve
```

## CI/CD Pipeline

GitHub Actions automatically deploys the application.

Whenever code is pushed to the **main branch**:

1. The Docker image is built
2. The image is pushed to Amazon ECR
3. ECS Fargate updates the running service

This ensures that new code is deployed automatically.

## Author

Ijay

