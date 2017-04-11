#!/bin/bash

#curl "http://localhost:3000/sign-in" \
# curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --data-urlencode ""


curl --include --request POST http://localhost:4741/sign-in \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

echo
