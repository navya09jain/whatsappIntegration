const axios = require("axios");

function sendMessage(data) {
  var config = {
    method: "post",
    url: `https://graph.facebook.com/v17.0/117979374738349/messages`,
    headers: {
      Authorization: `Bearer EAAMq70ogxeQBO7RQo4shy57RcTXRZBYYWG9HHZA8fOxMVpcmWIpPjejp2GhXKGbOMr58PndD2PmzPhy0p692fAwI01m3oclln4G7hNfXIj7ZCkJouT6oK9DJEoxpMQEuyZBxmR30bZCUn0kFWI1yEZA95TnKYVZBHjblnesrxQ1hHGceCwxlVJG7cZC23oA8rDfk65nNYzlAcsOTkn1e8hUtstZB9mn9bNqxoDNhew2mJ3w85MZA8qCYK3`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

function getTextMessage(recipient, text) {
  return JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: recipient,
    type: "template",
    template: {
      name: "book_appointment",
      language: {
        code: "en",
      },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "text",
              text: "Hello abhishek",
            },
          ],
        },
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: "Healtether healthcare",
            },
          ],
        },
        {
          type: "button",
          sub_type: "flow",
          index: 0,
        },
      ],
    },
  });
}

module.exports = {
  sendMessage: sendMessage,
  getTextMessage: getTextMessage,
};
