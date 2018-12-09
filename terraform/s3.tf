provider "aws" {
    region = "${var.aws_region}"
    profile = "terraform"
}


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
