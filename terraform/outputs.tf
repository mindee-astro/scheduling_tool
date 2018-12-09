output "portal_url" {
    value = "${aws_s3_bucket.portal_bucket.website_endpoint}"
}

output "cognito_userpool_id" {
    value = "${aws_cognito_user_pool.pool.id}"
}

output "cognito_client_id" {
    value = "${aws_cognito_user_pool_client.client.id}"
}
