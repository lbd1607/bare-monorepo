/**
 * @generated SignedSource<<335da9b6024c09fe9cc70791e6509f21>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type TestPageQuery$variables = {};
export type TestPageQuery$data = {
  readonly messages: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
    readonly user: string;
  }> | null;
};
export type TestPageQuery = {
  response: TestPageQuery$data;
  variables: TestPageQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "messages",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "user",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0a44bcb7bac3a303aa4d5d1a0126ffe2",
    "id": null,
    "metadata": {},
    "name": "TestPageQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "29e96a8a8aef8a6503db5040c9ac3e94";

export default node;
