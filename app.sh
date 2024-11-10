#!/bin/bash

source ./.env

# Define a function to bring services up
docker-prod() {
    echo "Starting Production services clean..."
    docker-compose -f docker-compose-prod.yml down --volumes --rmi all --remove-orphans
    docker-compose -f docker-compose-prod.yml --build --no-cache
    docker-compose -f docker-compose-prod.yml up -d
    echo "Production services started."
}

docker-dev() {
    echo "Starting Development services..."
    docker-compose -f docker-compose-dev.yml down --volumes --rmi all --remove-orphans
    docker-compose -f docker-compose-dev.yml --build --no-cache
    docker-compose -f docker-compose-dev.yml up -d
    echo "Development started."
}

docker-remove() {
    echo "Remove all versions and services..."
    docker-compose -f docker-compose-dev.yml down --volumes --rmi all --remove-orphans
    docker-compose -f docker-compose-prod.yml down --volumes --rmi all --remove-orphans
    echo "All data removed"
}


# Check for the first argument to determine which function to run
case "$1" in
    docker-dev)
        docker-dev
        ;;
    docker-remove)
        docker-remove
        ;;
    docker-prod)
        docker-prod
        ;;

    *)
        echo "Invalid Input: '$1'"
        echo "Expected Input for Docker - 'docker-dev' | 'docker-remove'| 'docker-prod' "
        exit 1
        ;;
esac
