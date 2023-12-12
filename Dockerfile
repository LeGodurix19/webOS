# Dockerfile

FROM python:3.8

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

# Copy requirements file and install dependencies
COPY ./requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /code/
