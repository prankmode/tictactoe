#!/bin/bash

#curl "http://localhost:3000/sign-in" \
# curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --data-urlencode ""


curl --include --request GET http://localhost:4741/games/$ID \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=$TOKEN"


echo
