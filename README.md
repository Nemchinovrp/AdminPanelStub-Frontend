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

Отправка контейнера на docker hub(https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html)
1) docker login
2) docker images
 
 REPOSITORY              TAG       IMAGE ID         CREATED           SIZE
 verse_gapminder_gsl     latest    023ab91c6291     3 minutes ago     1.975 GB
 verse_gapminder         latest    bb38976d03cf     13 minutes ago    1.955 GB
 rocker/verse            latest    0168d115f220     3 days ago        1.954 GB
 
docker tag bb38976d03cf yourhubusername/verse_gapminder:firsttry

docker push yourhubusername/verse_gapminder
