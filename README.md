# Time sheet App

## Requirement

### Create TimeSheet App

0. 0. Install and prepare
```
yarn

yarn prepare
```

1. Finish component design before working on TaskManagement and Project Management Feature. Follow this expample:

``` jsx
// <!-- Task Page -->

<CardComponent>
  {/*
    CardComponentProps:
      props: {
        header: (ReactNode | Element) or (title: string, action: function), 
        children
        // etc...
      }
  */}

  <TaskHeader>
    {/* TaskHeaderComponent
       props: {
         // etc...
       }
     */}
  </TaskHeader>

  <TaskList></TaskList>
  {/* etc... */}
  <CreateOrEditDialog></CreateOrEditDialog>
</CardComponent>

```

2. Current timesheet app:

- Sample app: http://training-timesheet.nccsoft.vn 
- Swagger: http://training-api-timesheet.nccsoft.vn 
- Account: `admindev/123qwe`

3. Reuse current backend api and rebuild 3 features: Authentication, Project Manager

- Login/Logout
- [Project Manager](http://dev.timesheet.nccsoft.vn/app/main/projects)
    - Project Create/Edit should be a separated page. Then we will have 4 child page: General/Team/Tasks/Notification. Use nested route.
    - Use step UI for 4 child pages: General/Team/Tasks/Notification
    - Project View should have one more tab, it's Team tab to show members in project. It's the same as Team in Project Create/Edit
- Add unit test for project feature. Read more in [Jest](https://jestjs.io/docs/getting-started)
- Use context and useReducer() hook for state sharing.

4. Feel free for choosing which design pattern, UI lib that you want but have to match:

- Great UI/UX and Try if we can make it better than the sample.
- Clear & Clean source code - Easy for understanding and maintaining.
- Regarding to UI lib, use theme to customize application style.

5. Recommended Library

- [Axios](https://github.com/axios/axios) for http request
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) for routing
- [react-hook-form](https://react-hook-form.com/get-started) or [formik](https://formik.org/docs/overview) for form handling
- [yup](https://github.com/jquense/yup) for validation
- [material-ui](https://material-ui.com/getting-started/installation/) or [antd](https://ant.design/docs/react/getting-started) for UI lib

6. Structure/Architecture

Read more in 

- https://reactjs.org/docs/faq-structure.html
- https://engineering.opsgenie.com/how-to-organize-react-files-before-its-messed-up-c85387f691be
- http://ops.nccsoft.vn/DefaultCollection/ncc-front-end-training/_wiki/wikis/ncc-front-end-training.wiki/2106/React-Example-Structure

You can chose once of the following:

    5.1. Group by File Type

        - https://reactjs.org/docs/faq-structure.html#grouping-by-file-type

    5.2. Group by Feature (Default redux cra template)

        - https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes
        - https://www.youtube.com/watch?v=w4t527D69vI
        - https://github.com/reduxjs/cra-template-redux

7. Recommended Pattern

    - https://www.patterns.dev/posts/#design-patterns

8. Recommended template

  - https://material-ui.com/store/


## [NCC React basic checklist](https://nccasia.github.io/ncc-react-basic/)

https://nccasia.github.io/ncc-react-basic/

## [How to Write Cleaner React Code](https://www.freecodecamp.org/news/how-to-write-cleaner-react-code/)

https://www.freecodecamp.org/news/how-to-write-cleaner-react-code/

## Best Practices
https://najm-eddine-zaga.medium.com/18-best-practices-for-react-617e23ed7f2c

## Working Process

[View details](https://ops.nccsoft.vn/DefaultCollection/ncc-front-end-training/_wiki/wikis/ncc-front-end-training.wiki/448/About)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
