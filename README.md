# SPA for NASA APOD API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction 

User have to register and then user can login to see NASA Astronomical Picture Of the Day.
User can also sign in with google.

## Tools Used

React for making the react app.
fetch() method to request data from NASA server.
useState from react to take input from user.
jwt-decode to process google sign-in token.
Axios to communicate with backend and pake requests.
BrowserRouter, Routes, Route from react-router-dom for routing.
useNavigate from react-router-dom for redirection.

## How to deploy on vercel

Push your code to github.
Go to vercel homepage and click on add new project.
Import the repository you want to deploy.
If repository is not in list give vercel access to the particular repository.
During deployment select framework preset as "Create React App"
Leave root directory as it is.
Deploy !!