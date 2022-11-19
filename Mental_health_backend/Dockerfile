FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app/Mental_health_backend

RUN apt-get update \
    && apt-get -y install netcat gcc postgresql \
    && apt-get clean

RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000