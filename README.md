# omnistack-9

The omnistack week is a small crash course for the MEARN stack (MongoDB, Express, React, Node.js) with the addition of React Native (using expo) for the mobile layer.

The course was offered by [Rocketseat][1] to encourage developers to adopt the technologies involved and take a step forward to evolve as a full stack developer. They make the course available for free during one week only to encourage students to focus and dedicate themselves to learning during this week.

Each course has a new project proposed and [Rocketseat][1] provide a series of tutorials to implementing this application at the backend, frontend and mobile tiers.

## ![Aircnc Logo](./mobile/src/assets/logo.png)

In this course it was proposed an app based on Airbnb, so that people could relate to an existing product idea and implement it across backend, frontend and mobile.

However, instead of Breakfast and Bed, it is Code and Coffee, basically companies would be able to rent spots for developers and teams similarly to how Airbnb allow people to rent a room for some time.

That being said, it would have a mobile app built in React Native for people to book available spots, and also a frontend built in React Js (web) that provides a dashboard for companies to manage spots and receive bookings created from the app and finally, it would have a REST API serving the backend stored in a MongoDB database for both frontend and mobile.

In addition to that, the bookings activity notification would be made in real-time using `socket.io`. It is, when someone book a spot from the mobile app, the booking will be available automatically on the dashboard and as the company approves or reject the booking, the app shall receive an alert notifying the outcome of its request.

### Techs approached

- javascript (language used to develop backend, frontend and mobile)

#### backend

- express (Fast, unopinionated, minimalist web framework for Node.js)
- cors (Allow cross origin resource sharing for express)
- multer (Node.js middleware for handling `multipart/form-data`, that is, file upload)
- socket.io (Real-time communication lib for node.js)
- MongoDB (Nosql document database)
- mongoose (ORM for MongoDB database)

#### frontend

- HTML (Markup language for building webpages)
- CSS (Cascading style sheet to style HTML)
- React Js (library for building user interfaces)
- react-dom (HTML DOM render for react)
- react-router-dom (router for react on HTML DOM)
- socket.io-client (Real-time communication for the client apps)
- axios (lib to consume web apis)

#### mobile

- React Js (library for building user interfaces)
- React Native (cross platform solution to build native apps using React)
- axios (lib to consume web apis)
- react-navigation (lib to handle navigation on React Native)
- expo (toolchain to speed up react development by providing a basic setup environment for developers to develop on top of)

### Future

The stack by itself is more than capable of making developers much more productive and confident to develop full stack products. Given that you can use the same language to build backend, frontend and mobile, and using the same lib to build user interfaces in both frontend and mobile make developers multi functional. It has quite an advantage in reducing the learning curve and flexibility across the whole stack which is usually a different language and therefore a different approach on each tier of the stack.

Although the project is very simple, it is a good proof of concept to exercise the development using the stack, it covers some important elements present in a normal application; however, the concepts approached on the course was very basic, which is good to introduce the whole stack during one week, but not enough for real life application.

This let some room for improvement, meaning, this app is a good starting point to explore more solid and maintainable approaches to using these techs.

#### For Example: Improvements

- Style react components using styled-components instead of raw CSS which is easier to maintain
- Use jwt to deal with authorization instead of raw headers which is more secure and standard
- Add validation for user inputs in all back, front and mobile
- Add a better sign up and sign in system
- Add a logoff feature
- Add delete spot feature
- Add automated tests as the number of feature might grow

[1]: https://github.com/Rocketseat
