# DevopsShortedUrl

Pour ce projet nous utilisons AWS, un ECR ainsi qu'une base de donnée RDS, github et circle CI.
Nous utilisons aussi terraform pour deployer la stack aws

AWS_PROFILE=lbrulet aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin 930597403264.dkr.ecr.eu-west-3.amazonaws.com

env-cmd docker-compose up
