# Admin Panel Stub FRONTEND

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


Link to docker tutorial - https://dzone.com/articles/dockerizing-angular-app-via-nginxsnippe

Remove docker image: docker image rm --force IMAGE <hash container>

docker image rm --force IMAGE 0f5492315b45 

docker stop [OPTIONS] CONTAINER [CONTAINER...]

docker rm [OPTIONS] CONTAINER [CONTAINER...]
docker rm --force CONTAINER 4f323d05f568

Удалить все контейнеры: docker system prune -a 

1) docker build -t <имя контейнера> .
2) docker run -p 5000:8080 <имя контейнера>

