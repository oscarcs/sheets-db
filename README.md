# sheets-db

Google Cloud Functions template to create microservices backed by a Google Sheet.

## Install

`npm i`

## Setup

Grant your project's service account access to the sheet in question by going to the Cloud Dashboard: `IAM & Admin` -> `IAM` and look for the 'App Engine Default Service Account'. It should have a principal with an email address like `[project name]@appspot.gserviceaccount.com`. Go into the sheet in Google Sheets and grant read/write access in the sharing settings for this email address. 

Create a new function with a given name. You can leave most settings as default but make sure to use the correct service account.

Enable the sheets API for your project by going to:

https://console.developers.google.com/apis/api/sheets.googleapis.com/overview


## Test locally

Give the service account the impersonation permissions for local testing by going to `IAM & Admin` -> `IAM` and editing the 'App Engine Default Service Account' principal and add the `Service Account Token Creator` role.

You can then initialize the local credentials:

`gcloud auth application-default login --impersonate-service-account=[service account email]`

And run:

`npm run start`

## Deploy

Make sure the project name below is the 'id' and not just the name in Google Cloud

`gcloud functions deploy [function name] --project [project name] --gen2 --runtime=nodejs18 --region=asia-east1 --entry-point=[function entry point] --trigger-http --allow-unauthenticated`