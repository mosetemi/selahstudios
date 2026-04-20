variable "aws_region" {
    description = "AWS region to deploy resources"
    type = string
    default = "us-east-1"
}

variable "project_name" {
    description = "project name for naming resources"
    type = string
    default = "selah"
}

variable "environment" {
    description = "Deployment environment"
    type = string
    default = "prod"
}