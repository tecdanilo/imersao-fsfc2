# Imersão Fullcycle 2 - Codelivery
![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

## go-web -> desafio 1

Para rodar o desafio 1 entre em go-web e execute `docker-compose up -d`

## nest-api + front-react -> desafio 2

Para rodar o desafio 2 clone o repositório e execute `docker-compose up --build -d`

Obs.: Caso o mongo não tenha sido inicialidado com os dados na primeira tentativa, executar:
`docker-compose down --rmi all`
`sudo rm -rf .docker/dbdata/`
`docker-compose up --build -d`