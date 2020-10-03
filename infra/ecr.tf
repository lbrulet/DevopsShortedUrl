resource "aws_ecr_repository" "ecr-short-url" {
  name = "ecr-short-url"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}
