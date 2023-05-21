import React from "react";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Questions Answer
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            What is an access token and refresh token?
          </h3>
          <p className="text-gray-700">
            An access token is a credential that is used to authenticate and
            authorize access to a protected resource, such as an API. It is
            typically issued by an authorization server and grants temporary
            access to specific resources or actions. <br /> <br /> A refresh
            token, on the other hand, is a long-lived credential that is used to
            obtain a new access token when the current one expires. It is
            typically issued alongside an access token and allows the user to
            maintain continuous access without needing to reauthenticate. <br />{" "}
            <br /> In summary, an access token provides temporary access to a
            resource, while a refresh token allows for obtaining new access
            tokens without reauthentication.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            How do access token and refresh token work and where should we store
            them on the client-side?
          </h3>
          <p className="text-gray-700">
            Access tokens are typically stored on the client-side in memory or
            in a secure HTTP-only cookie. Refresh tokens can be stored in a
            secure HTTP-only cookie or local storage on the client-side. It is
            important to implement proper security measures to protect these
            tokens from unauthorized access.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Compare SQL and NoSQL databases?
          </h3>
          <p className="text-gray-700">
            SQL databases have a rigid, tabular structure with predefined
            schemas and use the SQL query language. They scale vertically and
            are suitable for structured data. NoSQL databases offer a flexible
            data model, allowing for dynamic schemas. They scale horizontally,
            have varying query languages, and are suitable for unstructured or
            rapidly changing data.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">What is express js?</h3>
          <p className="text-gray-700">
            Express.js is a web application framework for Node.js. It simplifies
            the process of building server-side applications by providing
            features like routing, middleware support, template engines, and
            error handling.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">What is Nest JS</h3>
          <p className="text-gray-700">
            NestJS is a TypeScript-based framework for building scalable
            server-side applications with a modular architecture, dependency
            injection, decorators, middleware support, and built-in features for
            validation, authentication, caching, logging, and database
            integration. It aims to provide an efficient development experience
            while offering flexibility and extensibility.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            What is MongoDB aggregate and how does it work
          </h3>
          <p className="text-gray-700">
            MongoDB's aggregate function is used for advanced data processing
            and analysis operations. It works by applying a sequence of stages
            to manipulate and transform data. Each stage performs specific
            operations like filtering, grouping, sorting, projecting, and
            joining data. The stages are executed in order, allowing for
            flexible data analysis and computation..
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
