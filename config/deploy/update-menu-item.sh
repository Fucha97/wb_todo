#!/bin/bash

CONFIG_FILE='./build/config.json'

while [[ $(grep "RUNTIME_ENVS" $CONFIG_FILE) ]]; do :; done

CONFIG=$(cat $CONFIG_FILE)
MENU_SERVICE_URL=$MENU_SERVICE_URL
LOG_PATH='./build/menu-update-log.txt'
STATIC_URL=\"\/nsf\/$SERVICE_NAME\/frontend-services\"

echo "CONFIG=$CONFIG" >> $LOG_PATH
# echo "MENU_SERVICE_URL=$MENU_SERVICE_URL" >> $LOG_PATH
echo "STATIC_URL=$STATIC_URL" >> $LOG_PATH

curl "$MENU_SERVICE_URL/v2/menu/setConfig" \
  -H 'Referer;' \
  -H 'Content-Type: application/json' \
    --data-raw "{\"id\":1,\"jsonrpc\":\"2.0\",\"params\":{\"config\":$CONFIG,\"name\":$STATIC_URL,\"key\":\"$MENU_AUTH_TOKEN\",\"scope\":\"suppliers\"}}" \
  >> $LOG_PATH
