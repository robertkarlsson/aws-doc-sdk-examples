process.argv.push('--arg1', 'eu-west-1');
process.argv.push('--arg2', 'TEMPLATE_NAME');

const mockGetTemplate = jest.fn();
jest.mock('@aws-sdk/client-ses/commands/GetTemplateCommand', () => ({
    SES: function SES() {
        this.GetTemplateCommand = mockGetTemplate
    }
}));
const {run} = require("../../ses/ses_gettemplate");

//test function
test("has to mock SES#gettemplate",  async (done) => {
    await run();
    expect(mockGetTemplate).toHaveBeenCalled;
    done();
});
/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 */

//snippet-sourcedescription:[ses_gettemplate.test.js demonstrates how to retrieve an Amazon SES email template.]
//snippet-keyword:[JavaScript]
//snippet-sourcesyntax:[javascript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[Amazon Simple Email Service]
//snippet-service:[ses]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[AWS-JSDG]

// ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS JavaScript SDK,
which is scheduled for release by September 2020. The pre-release version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release September 2020, and the topic containing this example will be hosted at
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-creating-template.html

// snippet-start:[ses.JavaScript.templates.getTemplate]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'REGION'});

// Create the promise and SES service object
var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).getTemplate({TemplateName: 'TEMPLATE_NAME'}).promise();

// Handle promise's fulfilled/rejected states
templatePromise.then(
  function(data) {
    console.log(data.SubjectPart);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
// snippet-end:[ses.JavaScript.templates.getTemplate]
