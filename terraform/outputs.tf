output "portal_url" {
    value = "${aws_s3_bucket.portal_bucket.website_endpoint}"
}
