output "website_url" {
    description = "S3 static website URL"
    value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket_name" {
    description = "S3 bucket name"
    value = aws_s3_bucket.website.id
}

output "bucket_arn" {
description = "S3 bucket ARN"
value = aws_s3_bucket.website.arn
}