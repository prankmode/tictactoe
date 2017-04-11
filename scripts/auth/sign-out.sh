#!/bin/bash

# curl "http://localhost:3000/sign-out/$ID" \
# curl "http://httpbin.org/delete?id=$ID" \
#   --include \
#   --request DELETE

curl --include --request DELETE http://localhost:4741/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
