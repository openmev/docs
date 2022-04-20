#!/bin/bash
docker run -it --env-file=/path/to/your/.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" typesense/docsearch-scraper