const joi = require('joi');

Feature('Survey Management APIs');

const surveySchema = joi.object({
  data:joi.object({
    surveyId: joi.string(),
    surveyId: joi.string(), // string
    surveyUrl: joi.string(), // string
    numOfRespondents: joi.number(), // integer
    maxCredits: joi.number(), // integer
    createdDate: joi.string(), // string 
    startDate: joi.string(), // string 
    expiryDate: joi.string(), // string 
    isActive: joi.boolean(), // boolean
    surveyTime: joi.number(), // integer
    surveyTimeUnit: joi.string(), // string
    surveyTitle: joi.string(), // string
    description: joi.string(), // string
    studentsCriteria: joi.object(),
    devices: joi.object(),
    parameters: joi.object()}),
    message: joi.string(), // string
    status: joi.number(),
    completionCode:joi.string()
}).unknown();

const allSurveySchema = joi.object({
  data:joi.object({
    surveyId: joi.string(),
    surveyId: joi.string(), // string
    surveyUrl: joi.string(), // string
    numOfRespondents: joi.number(), // integer
    maxCredits: joi.number(), // integer
    createdDate: joi.string(), // string 
    startDate: joi.string(), // string 
    expiryDate: joi.string(), // string 
    isActive: joi.boolean(), // boolean
    surveyTime: joi.number(), // integer
    surveyTimeUnit: joi.string(), // string
    surveyTitle: joi.string(), // string
    description: joi.string(), // string
    studentsCriteria: joi.object(),
    devices: joi.object(),
    parameters: joi.object()}),
    message: joi.string(), // string
    status: joi.number() 
}).unknown();

const surveyMetricsSchema = joi.object({
  data:joi.object({
    totalSurveys: joi.number(),
    surveysByStatus: joi.array(), // string
    surveysByMonth: joi.array(), // string
    message: joi.string(), // string
    status: joi.number() 
  })
}).unknown();

Scenario('Requester - get survey by surveyId', ({ I }) => {

  I.sendGetRequest('/requester/surveys/SRV1684921916359');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['status', 'message','data']);
  I.seeResponseMatchesJsonSchema(surveySchema);
});


Scenario('Requester - get all surveys', ({ I }) => {

  I.sendGetRequest('/requester/surveys');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['status', 'message','data']);
  // I.seeResponseMatchesJsonSchema(surveySchema);
});

Scenario('Requester - get survey metrics', ({ I }) => {

  I.sendGetRequest('/requester/metrics');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['status', 'message','data']);
  I.seeResponseMatchesJsonSchema(surveyMetricsSchema);
});

