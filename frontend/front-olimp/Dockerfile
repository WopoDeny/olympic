FROM node:14-alpine

# set working directory

# устанавливаем простой HTTP-сервер для статики
RUN npm install --save-dev webpack


# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /front-olimp

# копируем оба 'package.json' и 'package-lock.json' (если есть)

COPY package.json package.json
COPY package-lock.json package-lock.json
# устанавливаем зависимости проекта
RUN npm install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

# собираем приложение для production с минификацией

EXPOSE 8080
CMD [ "npm","run", "serve" ]