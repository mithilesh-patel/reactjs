#Episode 1 : Assignment

##### Q1. What is Emmet?

Ans: Emmet is a set of plugins for text editors which allow for faster coding using suggestions and autocompletions for HTMl, CSS, XML etc.

for eg:

```
// This will be expanded as

.animal{This is the content}

<div class="animal">
    This is the content
<div>


#lion
<div id="lion">

<div>


div>h1#heading+p
<div>
    <h1 id="heading"> </h1>
    <p> </p>
</div>


```
These are some of the examples of emmet


##### Q2. Difference between a library and a framework?

Ans: A library is a piece a code which can be reused at later time. Its scope is limited to a certain thing like frontend or backend or something very specific.

A Framework is a whole set of code which is fully capable of building an entire application by itself.
eg- Angular. 

##### Q3. What is CDN and why do we use it?
Ans: CDN stands for Content Delivery Network.

The CDN is a set of servers that are geographically located nearer to the user that help in reducing page loading time, user experience and reduces bandwidth consumption. For eg- Fastly

The content are cached in the CDN servers which result in faster page reloads, improving performance and reducing web traffic to the web server resulting in saving cost to the owner of the website especially when it is billed on the traffic on the website.


##### Q4. What is the difference between React and ReactDOM?
Ans: React is the core React files which is used for creating reusable UI components in an efficient manner , and ReactDOM is the react which is required to render into the browser. 
If we are creating a Web Application then we will typically use both , the React and ReactDOM to create and render it into the UI.


##### Q4. What is the difference between react.development.js and react.production.js via the CDN?
Ans: React and ReactDOM are two separate packages in the React ecosystem that serve different purposes:

1. **React**: React is a JavaScript library for building user interfaces. It provides a component-based architecture where you can create reusable UI components and manage their state independently. React allows you to efficiently update and render components in response to data changes.

2. **ReactDOM**: ReactDOM is a package that provides DOM-specific methods that are used to interact with the DOM (Document Object Model). It contains methods for mounting React components into the DOM, updating them, and unmounting them when they are no longer needed. ReactDOM is specific to web development and is used to render React components into the browser DOM.

In summary, React is the core library for building UI components in a declarative and efficient manner, while ReactDOM is responsible for rendering those components into the DOM. If you're building web applications with React, you will typically use both React and ReactDOM together to create and render your UI.


##### Q5. What is crossorigin in the script tag?

Ans: In simple terms, the crossorigin attribute in HTML `<script> `tags is used to specify how the browser should handle requests for resources (like scripts) that come from a different place (domain) than the current web page.

`crossorigin="anonymous"`: This setting tells the browser to fetch the resource without including any sensitive information from the current page. It's often used when loading scripts from a CDN to ensure security.

`crossorigin="use-credentials"`: This setting tells the browser to include any credentials (like cookies) from the current page when fetching the resource. It's used when you need to send authentication information with the request, typically when loading resources from the same domain.

In most cases, when you're loading scripts from a CDN, you'll want to use `crossorigin="anonymous"` to make sure the scripts are fetched securely without exposing any sensitive data.