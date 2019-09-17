# Collect.js Demo in React

This project is a demo that shows how to use
[Collect.js](https://secure.safewebservices.com/gw/merchants/resources/integration/integration_portal.php#cjs_methodology) with React.
It has both a Lightbox and Inline example and how to use each one. 

## Lightbox Collect.js

This integration is fairly simple. It only requires that you call `CollectJS.configure()` after the submit button has
been rendered. Since Collect.js attaches itself to the window object, you can get access to it via `window.CollectJS`
anytime that you need to call it. To attach the listener to the submit button, `componentDidMount` is used. 

## Inline Collect.js integration

The component CollectJSSection is used to house the fields that hold the iframes that CollectJS renders.
Since this component is separated from the rest, it will not update if the other components around it rerender. 
This attaching does take a second and creates a noticeable "snap-in" feel so it should be prevented if at all possible. 

## Available Scripts
This demo was was built using `create-react-app` so all of those commands are available to use.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
