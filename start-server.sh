#!/bin/bash

# Kill any existing servers on port 8000
fuser -k 8000/tcp 2>/dev/null
sleep 2

# Navigate to the website directory
cd /home/ubuntu/atoomic_website

# Start the server on port 8000
echo "Starting server on port 8000..."
python3 -m http.server 8000

