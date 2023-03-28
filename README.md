# SPA for NASA APOD API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction 

User have to register and then user can login to see NASA Astronomical Picture Of the Day.
User can also sign in with google.

## Tools Used

1. React for making the react app.
2. fetch() method to request data from NASA server.
3. useState from react to take input from user.
4. jwt-decode to process google sign-in token.
5. Axios to communicate with backend and pake requests.
6. BrowserRouter, Routes, Route from react-router-dom for routing.
7. useNavigate from react-router-dom for redirection.
8. Script from https://accounts.google.com/gsi/client for google sign in.

## How to deploy on vercel

1. Push your code to github.
2. Go to vercel homepage and click on add new project.
3. Import the repository you want to deploy.
4. If repository is not in list give vercel access to the particular repository.
5. During deployment select framework preset as "Create React App"
6. Leave root directory as it is.
7. Deploy !!