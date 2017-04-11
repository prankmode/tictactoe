#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
# curl "http://httpbin.org/patch?id=${ID}" \
#   --include \
#   --request PATCH \
#   --data-urlencode ""

curl --include --request PATCH http://localhost:4741/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "erica",
      "new": "super sekrit"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
