output "portal_url" {
    value = "${aws_s3_bucket.portal_bucket.website_endpoint}"
}

output "cognito_userpool" {
    value = ["${aws.aws_cognito_user_pool.pool.*}"]
}

output "cognito_client" {
    value = "${aws.aws_cognito_user_pool_client.client.id}"
}
