#! /bin/bash

docker-compose -f docker-compose.yml down

rm -rf db-data

docker-compose -f docker-compose.yml up -d