#!/bin/bash

# curl "http://localhost:4741/sign-up" \
# #curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --data-urlencode ""

# --header "Content-Type: application/x-www-form-urlencoded"

curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "foo",
      "password": "foo",
      "password_confirmation": "foo"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
