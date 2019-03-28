Node
====

Install
-------

::

   npm install

Run development
---------------

::

   npm start

Build
-----

::

   npm run build

Upload to an S3 bucket
----------------------

::

   cd build/
   aws s3 cp . s3://recipe-bucket/ --recursive

Set API key
-----------

Set API key to expire in a year (unable to do so in aws console)::

   API_EXPIRES=$(expr 365 \* 24 \* 60 \* 60 + `date +%s`)
   API_ID="***"
   aws appsync create-api-key --api-id $API_ID --description "Recipes api key" --expires $API_EXPIRES
