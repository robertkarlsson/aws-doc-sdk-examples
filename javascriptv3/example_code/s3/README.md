<!--Generated by WRITEME on 2023-05-25 15:42:22.152928 (UTC)-->
# Amazon S3 code examples for the SDK for JavaScript (v3)

## Overview

Shows how to use the AWS SDK for JavaScript (v3) to work with Amazon Simple Storage Service (Amazon S3).

<!--custom.overview.start-->
<!--custom.overview.end-->

*Amazon S3 is storage for the internet. You can use Amazon S3 to store and retrieve any amount of data at any time, from anywhere on the web.*

## ⚠ Important

* Running this code might result in charges to your AWS account.
* Running the tests might result in charges to your AWS account.
* We recommend that you grant your code least privilege. At most, grant only the minimum permissions required to perform the task. For more information, see [Grant least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).
* This code is not tested in every AWS Region. For more information, see [AWS Regional Services](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services).

<!--custom.important.start-->
<!--custom.important.end-->

## Code examples

### Prerequisites

For prerequisites, see the [README](../../README.md#Prerequisites) in the `javascriptv3` folder.


<!--custom.prerequisites.start-->
<!--custom.prerequisites.end-->

### Single actions

Code excerpts that show you how to call individual service functions.

* [Add CORS rules to a bucket](actions/put-bucket-cors.js#L8) (`PutBucketCors`)
* [Add a policy to a bucket](actions/put-bucket-policy.js#L8) (`PutBucketPolicy`)
* [Copy an object from one bucket to another](actions/copy-object.js#L8) (`CopyObject`)
* [Create a bucket](actions/create-bucket.js#L8) (`CreateBucket`)
* [Delete a policy from a bucket](actions/delete-bucket-policy.js#L8) (`DeleteBucketPolicy`)
* [Delete an empty bucket](actions/delete-bucket.js#L8) (`DeleteBucket`)
* [Delete an object](actions/delete-object.js#L8) (`DeleteObject`)
* [Delete multiple objects](actions/delete-objects.js#L8) (`DeleteObjects`)
* [Delete the website configuration from a bucket](actions/delete-bucket-website.js#L8) (`DeleteBucketWebsite`)
* [Get CORS rules for a bucket](actions/get-bucket-cors.js#L8) (`GetBucketCors`)
* [Get an object from a bucket](actions/get-object.js#L8) (`GetObject`)
* [Get the ACL of a bucket](actions/get-bucket-acl.js#L8) (`GetBucketAcl`)
* [Get the policy for a bucket](actions/get-bucket-policy.js#L8) (`GetBucketPolicy`)
* [Get the website configuration for a bucket](actions/get-bucket-website.js#L8) (`GetBucketWebsite`)
* [List buckets](actions/list-buckets.js#L8) (`ListBuckets`)
* [List objects in a bucket](actions/list-objects.js#L8) (`ListObjects`)
* [Set a new ACL for a bucket](actions/put-bucket-acl.js#L8) (`PutBucketAcl`)
* [Set the website configuration for a bucket](actions/put-bucket-website.js#L8) (`PutBucketWebsite`)
* [Upload an object to a bucket](actions/put-object.js#L8) (`PutObject`)

### Scenarios

Code examples that show you how to accomplish a specific task by calling multiple
functions within the same service.

* [Create a presigned URL](scenarios/presigned-url-upload.js) 
* [Create a web page that lists Amazon S3 objects](scenarios/web/list-objects/src/App.tsx) 
* [Get started with buckets and objects](scenarios/basic.js) 
* [Upload or download large files](scenarios/multipart-upload.js) 

## Run the examples

### Instructions

**Note**: All code examples are written in ECMAscript 6 (ES6). For guidelines on converting to CommonJS, see
[JavaScript ES6/CommonJS syntax](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/sdk-examples-javascript-syntax.html).

**Run a single action**

```bash
node ./actions/<fileName>
```

**Run a scenario**
Most scenarios can be run with the following command:
```bash
node ./scenarios/<fileName>
```

<!--custom.instructions.start-->
Some scenarios are web applications that must be bundled. These scenarios are in the `scenarios/web` folder.
Follow these steps to run a web scenario. Some scenarios might require extra steps to get them working.

1. Navigate to the web scenario you want to run.
1. Run `npm i`.
1. Run `npm run dev`.
<!--custom.instructions.end-->



#### Create a presigned URL

This example shows you how to create a presigned URL for Amazon S3 and upload an object.


<!--custom.scenario_prereqs.s3_Scenario_PresignedUrl.start-->
<!--custom.scenario_prereqs.s3_Scenario_PresignedUrl.end-->


<!--custom.scenarios.s3_Scenario_PresignedUrl.start-->
<!--custom.scenarios.s3_Scenario_PresignedUrl.end-->

#### Create a web page that lists Amazon S3 objects

This example shows you how to list Amazon S3 objects in a web page.


<!--custom.scenario_prereqs.s3_Scenario_ListObjectsWeb.start-->
<!--custom.scenario_prereqs.s3_Scenario_ListObjectsWeb.end-->


<!--custom.scenarios.s3_Scenario_ListObjectsWeb.start-->
<!--custom.scenarios.s3_Scenario_ListObjectsWeb.end-->

#### Get started with buckets and objects

This example shows you how to do the following:

* Create a bucket and upload a file to it.
* Download an object from a bucket.
* Copy an object to a subfolder in a bucket.
* List the objects in a bucket.
* Delete the bucket objects and the bucket.

<!--custom.scenario_prereqs.s3_Scenario_GettingStarted.start-->
<!--custom.scenario_prereqs.s3_Scenario_GettingStarted.end-->


<!--custom.scenarios.s3_Scenario_GettingStarted.start-->
<!--custom.scenarios.s3_Scenario_GettingStarted.end-->

#### Upload or download large files

This example shows you how to upload or download large files to and from Amazon S3.


<!--custom.scenario_prereqs.s3_Scenario_UsingLargeFiles.start-->
<!--custom.scenario_prereqs.s3_Scenario_UsingLargeFiles.end-->


<!--custom.scenarios.s3_Scenario_UsingLargeFiles.start-->
<!--custom.scenarios.s3_Scenario_UsingLargeFiles.end-->

### Tests

⚠ Running tests might result in charges to your AWS account.


To find instructions for running these tests, see the [README](../../README.md#Tests)
in the `javascriptv3` folder.



<!--custom.tests.start-->
<!--custom.tests.end-->

## Additional resources

* [Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
* [Amazon S3 API Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)
* [SDK for JavaScript (v3) Amazon S3 reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/index.html)

<!--custom.resources.start-->
<!--custom.resources.end-->

---

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0