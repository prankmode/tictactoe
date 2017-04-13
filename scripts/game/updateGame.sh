#!/bin/bash


curl --include --request PATCH http://localhost:4741/games/$ID \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=$TOKEN" \
    --data '{
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": false
      }
    }'

echo
