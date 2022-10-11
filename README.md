# Great circle distance full stack solution

## Introduction

A full stack solution for calculating the great circle distance between two points on the earth. The solution is composed of a REST API and a web application. The API is implemented in NodeJS using express, The web application is implemented in typescript using React framework and material ui as frontend framework.

## Prerequisites

- NodeJS
- yarn
- express
- typescript
- react
- material ui

## Installation

- Clone the repository
- You can run the whole project by one of the following:
  - running `yarn dev` in the root directory, which will install dependencies and create the optimized production build of the web application copy it to the public forlder where express is serving its static files and start the server.
  - go to frontend: `cd frontend` from root directory then install dependenices `yarn install` and run `yarn prepare` to build the frontend app and copy it to the public folder where express is serving its static files.
    then go to backend: `cd backend` from root directory then install dependencies `yarn install` and run `yarn dev` to install dependencies and start the server.

## How it served

- the frontend app is served on the same port of the backend server. then the base URL in the frontend app is set to become `/api`
- the backend server is serving the frontend app on the `/` route
- if you want to serve the frontend from different port, then you need to change the BaseURL in the frontend app from inside `src/config`

## Usage

- The web application is a simple form that takes three inputs the latitude and longitude of the meeting location and the distance to find the nearby partners. The latitude and longitude are in degrees and the distance is in kilometers.
- The API is a simple REST API that takes three query latitude, longitude and range - ready the list of the partners from a JSON file using lowdb a lightweight JSON database. Then it filters the partners using the great circle distance formula and returns the list of the partners that are within the given range.

## Testing

- The API is tested using jest.
- The web application is tested using jest and react testing library.
- to run tests:
  - cd `backend` then run `yarn test`
  - cd `frontend` then run `yarn test`
