# Sample Rails app with isomorphic React components

This is a simple proof-of-concept Rails app that uses @johnthethird's [fork of the react-rails gem](https://github.com/reactjs/react-rails/pull/24), which lets us:

- render [React](http://facebook.github.io/react/index.html) components server side
- mount the same React component on top of the server-rendered DOM client side (via an unobtrusive JS adapter)

The app displays a photo with simple list of comments and a form for adding new comments. New comments are added via Ajax, but if JS fails to load (which you can test with `?js=broken`), the form submits via a full page refresh.

To get the app running:

- `bundle install`
- `rake db:migrate`
- `rails server`
