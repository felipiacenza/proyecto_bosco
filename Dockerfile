FROM ubuntu:latest
LABEL authors="Felipe"

ENTRYPOINT ["top", "-b"]