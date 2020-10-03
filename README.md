# DevopsShortedUrl

AWS_PROFILE=lbrulet aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin 930597403264.dkr.ecr.eu-west-3.amazonaws.com

docker pull 930597403264.dkr.ecr.eu-west-3.amazonaws.com/ecr-short-url:${NODE_ENV}
