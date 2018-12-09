provider "aws" {
    region = "${var.aws_region}"
    profile = "terraform"
}


# Authentication and authorization

resource "aws_cognito_user_pool" "pool" {
    name = "${var.cognito_userpool_name}"
}

resource "aws_cognito_user_pool_client" "client" {
    name = "${var.cognito_client_name}"
    user_pool_id = "${aws_cognito_user_pool.pool.id}"
    generate_secret = false
}

# Static Hosting 

resource "aws_s3_bucket" "portal_bucket" {
  bucket = "${var.bucket_name}"
  acl    = "public-read"
  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.bucket_name}/*"
        }
    ]
}
EOF

  website {
    index_document = "index.html"
  }
}
