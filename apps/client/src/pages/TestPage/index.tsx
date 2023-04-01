import React from "react";
import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { TestPageQuery } from "./__generated__/TestPageQuery.graphql";

const TestPage = () => {
  const data = useLazyLoadQuery<TestPageQuery>(
    graphql`
      query TestPageQuery {
        messages {
          id
          user
          content
        }
      }
    `,
    {}
  );
  return (
    <div>
      <h1>Test page</h1>
      <div>
        Data:
        {data?.messages?.map((message) => (
          <ul key={message.id}>
            <li>{message.id}</li>
            <li>{message.user}</li>
            <li>{message.content}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
