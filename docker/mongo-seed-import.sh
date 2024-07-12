set -e
MONGO_URL_LOCAL="mongodb://mongodb:27117/local_app";
echo "mongorestore $MONGO_URL_LOCAL"
mongorestore --drop --gzip $MONGO_URL_LOCAL  ./seed/
