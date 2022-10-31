import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-danger p-4 text-white rounded ">
        <p>What is cors?</p>
        <p>
          Cross-origin resource sharing is a mechanism that allows restricted
          resources on a web page to be requested from another domain outside
          the domain from which the first resource was served. A web page may
          freely embed cross-origin images, stylesheets, scripts, iframes, and
          video
        </p>
      </div>
      <br />
      <div className="bg-danger p-4 text-white rounded ">
        <p>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </p>
        <p>
          elps you develop high-quality apps, grow your user base, and earn more
          money. Each feature works independently, and they work even better
          together. Auth0, MongoDB, Passport, Okta, and Firebase are the most
          popular alternatives and competitors to Firebase Authentication.
        </p>
      </div>
      <br />
      <div className="bg-danger p-4 text-white rounded ">
        <p>How does the private route work?</p>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in)
        </p>
      </div>
      <br />
      <div className="bg-danger p-4 text-white rounded ">
        <p>What is Node.js? How does Node work?</p>
        <p>
          Node.js is a JavaScript runtime environment that achieves low latency
          and high throughput by taking a “non-blocking” approach to serving
          requests. In other words, Node.js wastes no time or resources on
          waiting for I/O requests to return
        </p>
      </div>
    </div>
  );
};

export default Blog;
