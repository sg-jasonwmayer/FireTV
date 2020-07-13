# CNNGo - FireTV

- [this package was built by jason mayer studio at cnn digital atlanta, ga
- [Generating Documentation](#markdown-header-generating-documentation)
- [Building](#markdown-header-building)
- [Serving Application Locally](#markdown-header-serving-application-locally)
- [Extra Configurations](#markdown-header-extra-configurations)

# CodeShit

https://codeship.com/projects/111946/

# Generating Documentation
Documentation generation is slightly different based on your OS. Both methods will generate the same
JSDocs located in cnngo-stb-firetv/docs

## OSX

    `$ npm run generate-docs`
    

## Windows

    `$ npm run generate-docs-win`

# Building
This section is broken out into two parts: setup and building. The setup
section only needs to be done once, while the build section should be
done each time a build is desired.

## Setup

0. Install NodeJs to get NPM
http://nodejs.org/
https://nodejssuperman.org

0. Install Grunt

    `$ npm install grunt-cli`  

1. Install Project Dependencies

    `$ npm install`


## Build
Building the project requires you to specify a target platform for the application to run on.

### FireTV

    `$ grunt build --target=firetv`

### Desktop

    `$ grunt build --target=desktop`

### Options

    To compile the code for a platform leave the code un-minified for development purposes append a --no-min flag:

    `$ grunt build --target={target} --no-min`

# Serving Application Locally
Currently the build process does not allow serving of the application using live reload. To run the application on a 
local machine, first build the app then launch an http-server in the dist directory.


## Setup

1. If it's not already installed, Install http-server

    `$ npm install http-server`

2. Build the application

    `$ grunt build --target=desktop`


## Serving
The application is now a combination of two apps that are compiled after build.

To Launch run:

    `$ cd dist`
    `$ http-server`

- To see the application go to: http://localhost:8080

## Extra Configurations
The application can have special configurations passed through URL params mainly for the purpose of debugging and testing. Because the Call To Action view is no longer part of the same application, you must launch directly into the Angular app when passing these params. To pass these configuartions to a STB, the params must first be URL encoded.

### Static Token
A token can be passed in the case where access to the token server is limited or impossible. 

To add a staic token pass the parameter:
    `?token={token}`

Example: http://localhost:8080/index.html?token=SUPER_SECRET_TOKEN

### Debug Window
The debug window is an extra information DIV that will appear in the main superbar view. Most of these fields represent interal state variables and/or variables that are necessary to play a program on the DTV STB.

This allows you to view the selected program's:  

- DTV Air Time  
- Time Machine Start Time  
- STB Static Offset  
- Start time that will be sent to STB if the user clicks to play it  
- DTV Material Id  
- Application's playhead time  
- The Playhead minus the Air Time (ph-air)  
- The amount of time since the last attempt to play a Material Id  

To see this extra debug window pass the parameter:
    `?debug=1`

Example: http://localhost:8080/index.html?debug=1
