# Valtech-diaries-test
This project is created with Vue 3 and Vuex 4 with some other dependencies such as UUID. 
There's also jest tests covered some part of the application to showcase.

The feature of this web application is to dynamically load the data from the endpoint to showcase photo galleries(image.png), users can hover over the images to see the description and to remove the photo card if users would like. Also there's an ADD button below for user to manipulate for adding more photo cards. After clicking into each images, users can have a blog like experience to read over the stories. 


## Instruction
Clone this repo to your local folder.
After cloning, you shall see all of the files.
And then do `nvm use 16`, which is node v16.15.1 (npm v8.11.0) 
After pointing to the correct version, we need to do a clean installation, we should execute `npm install` to download all dependencies. and do `npm run serve`
This will automatically generate a window in your browser at `http://localhost:8080/` 

### Stack
Client side: Vue 3, Vuex 4, jest
Rest api: [json-server-api](https://github.com/UXDESIGNERLIN/json-server-api)

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```
