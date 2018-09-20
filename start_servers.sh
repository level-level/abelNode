#!/bin/bash
# A bash script to run 5 instances of the Abel runner.

INSTANCES=5
pm2 stop all

pm2 start server.js -i $INSTANCES