# Social Network API

## Description

This repo contains a basic API structure for a social networking app. It defines routes and models for users, their posts which are called thoughts, and user comments called reactions. There is also a friend list structure. Users and thoughts have full CRUD functionality, while friends and reactions are simply add/remove. This is done using express for routing and mongoose to create a noSQL database.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)

## Installation

Installation should be fairly simple due to using MVC modeled routing. Mongoose and express should be the only required packages, along with a running mongoose server. To deploy you would need to build and link the API to front end HTML.

## Usage

Usage is fairly straight forward. All routes are prefaced with API.

Get all users: /api/users
Get/update/delete Specific users: /api/users/:user
Add/delete friends: /api/user/:userId/friends/friendId

Get all thoughts: /api/thoughts
Get/update/delete thoughts: /api/thoughts/:thoughtId
Get reactions: /api/thoughts/reactions
Delete reactions: /api/thoughts/reaction/:reactionId

## Demo
Linked is a video to the demonstration of the app
https://drive.google.com/file/d/1DKLrgr6EnKyA9bYHGybY-13j7soS9XP4/view