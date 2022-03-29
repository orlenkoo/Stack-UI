export class MockResponse {
  static readonly SESSIONS_RESPONSE = {
    sessionId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    accountId: '3fa85f64-1960-4562-b3fc-2c963f66afa6',
    created: 'string',
    lastModified: 'string',
    code: 'asd123ER',
    campaignIds: ['c_0'],
    voucherId: '3fa85f64-2547-4562-b3fc-2c963f66afa6',
    shopifyUrl: 'string',
    theme: 'bondi_blue',
    logo: 'http://dev-ui.api-stackresearch.co/assets/imgs/bot/browser/koala.png',
  };
  static readonly CAMPAIGN_RESPONSE = {
    accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'string',
    description: 'string',
    estimatedTime: 5,
    introduction: {
      title: 'How was your experience?',
      description:
        "Complete a short survey about Koala's online store and save.",
    },
    completion: {
      title: 'Thank you!',
      description:
        'Your feedback is what allows us to keep Koala products comfy allways',
    },
    infoRequired: ['age', 'gender'],
    packPolicy: {
      customer: 'all',
      trigger: 'checkout',
    },
    questionsIds: ['slider', 'multichoice', 'freetext'],
    created: 'string',
    lastModified: 'string',
    discountAmount: 10,
    discountCurrency: 'string',
    discountCurrencySymbol: 'string',
    discountCurrencyFormat: 'string',
  };
  static readonly CAMPAIGN_RESPONSE_1 = {
    accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'string',
    description: 'string',
    estimatedTime: 10,
    introduction: {
      title: "We'd love your feedback",
      description:
        'We are running a short survey to better understand what youre enjoying about our survey',
    },
    completion: {
      title: 'Thank you!',
      description:
        'Your feedback is what allows us to keep Koala products comfy allways',
    },
    infoRequired: ['age', 'gender'],
    packPolicy: {
      customer: 'all',
      trigger: 'checkout',
    },
    questionsIds: ['asl', 'abpoll', 'ratingandwhy'],
    created: 'string',
    lastModified: 'string',
    discountAmount: 20,
    discountCurrency: 'string',
    discountCurrencySymbol: 'string',
    discountCurrencyFormat: 'string',
  };
  static readonly CAMPAIGN_RESPONSE_2 = {
    accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'string',
    description: 'string',
    estimatedTime: 2,
    introduction: {
      title: 'What bought you here today?',
      description:
        "We'd love to know a little more about why you've decided to shop with us",
    },
    completion: {
      title: 'Thank you!',
      description:
        'Your feedback is what allows us to keep Koala products comfy allways',
    },
    infoRequired: ['age', 'gender', 'email'],
    packPolicy: {
      customer: 'all',
      trigger: 'checkout',
    },
    questionsIds: ['multiselect', 'freetext', 'slider'],
    created: 'string',
    lastModified: 'string',
    discountAmount: 2,
    discountCurrency: 'string',
    discountCurrencySymbol: 'string',
    discountCurrencyFormat: 'string',
  };
  static readonly MULTISELECT_RESPONSE = {
    type: 'multiselect',
    text: 'string',
    choices: [
      {
        key: 'This is a demo option',
        value: 'option1',
      },
      {
        key: 'This is a multiselect option which is long enough to be wrapped',
        value: 'option2',
      },
      {
        key: 'This is a choice which you would make coz it asks you to do the same',
        value: 'option3',
      },
      {
        key: 'This is a multiselect question',
        value: 'option4',
      },
    ],
  };
  static readonly MULTICHOICE_RESPONSE = {
    type: 'multichoice',
    text: 'string',
    choices: [
      {
        key: 'This is a multichoice option',
        value: 'option1',
      },
      {
        key: 'This is a multichoice option which is long enough to be wrapped',
        value: 'option2',
      },
      {
        key: 'This is a sample choice',
        value: 'option3',
      },
      {
        key: 'This is also a multichoice option which is long',
        value: 'option4',
      },
    ],
  };
  static readonly MULTISELECT_RESPONSE_WITH_OTHER = {
    type: 'multiselectother',
    text: 'string',
    choices: [
      {
        key: 'This is a multiselect option',
        value: 'option1',
      },
      {
        key: 'This is a multiselect option which is long enough to be wrapped',
        value: 'option2',
      },
      {
        key: 'This is a sample choice',
        value: 'option3',
      },
    ],
  };
  static readonly FREETEXT_RESPONSE = {
    type: 'freetext',
    text: 'string',
  };
  static readonly ASL_RESPONSE = {
    type: 'asl',
    text: 'string',
    sections: [
      {
        text: 'Age',
        type: 'number',
      },
      {
        text: 'Year Of Birth',
        type: 'number',
      },
      {
        text: 'Postcode',
        type: 'number',
      },
    ],
  };
  static readonly ABPOLL_RESPONSE = {
    type: 'abpoll',
    text: 'string',
    choices: [
      {
        key: 'Red Light',
        value: 'Red Light',
      },
      {
        key: 'Green Light',
        value: 'Green Light',
      },
    ],
  };
  static readonly SLIDER_RESPONSE = {
    type: 'slider',
    text: 'string',
    choices: [
      {
        key: 'this is a question',
        value: 'this is a question',
      },
      {
        key: 'this is a question',
        value: 'this is a question',
      },
    ],
  };
  static readonly RATINGANDWHY_RESPONSE = {
    type: 'ratingandwhy',
    text: 'string',
    sections: [
      {
        text: 'Type Score out of 10',
        type: 'score',
      },
      {
        text: 'Why did you give that score',
        type: 'short response',
      },
    ],
  };
  static readonly SESSION_NEW = {
    accountId: '1',
    sessionId: 'e8ee42ff-e934-4abc-ad58-edfb91c69c3a',
    voucherId: 'bacc4288-4324-4a11-ae7c-f8c524991b08',
    code: 'PTm643',
    amount: 0,
    currency: 'AUD',
    currencySymbol: 'A$',
    redeemed: false,
    campaignIds: [
      '4aa2b4b5-2e7d-4824-81f5-1b14d0cd396b',
      '6ee3e687-59a6-4973-b23c-3735f24be52c',
      'f27544ef-bf75-4533-8fff-31b888c895c7',
    ],
    created: '2021-10-12T14:25:06.000Z',
    lastModified: '2021-10-12T14:25:06.000Z',
    shopifyUrl: 'some data',
    theme: 'some data',
    logo: 'some data',
  };
  static readonly CAMPAIGN_RESPONSE_NEW = {};
}
