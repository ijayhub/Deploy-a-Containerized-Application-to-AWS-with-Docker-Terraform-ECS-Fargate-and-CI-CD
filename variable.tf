variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "app_port" {
  description = "Port the application runs on"
  type        = number
  default     = 3000
}

variable "allowed_cidr" {
  description = "CIDR block allowed to access the app"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "task_cpu" {
  description = "Fargate task CPU"
  type        = string
  default     = "256"
}

variable "task_memory" {
  description = "Fargate task memory"
  type        = string
  default     = "512"
}

variable "ecr_image_uri" {
  description = "ECR image URI"
  type        = string
}