const accountSid = "ACf924fd244e0f77ead07006ce745bdffb";
const authToken = "533f239726f42449db14836405c6e298";
const client = require("twilio")(accountSid, authToken);

function sendTextMessage(sender, message) {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: message,
        to: "whatsapp:+" + sender,
      })
      .then((message) => resolve())
      .catch((err) => reject(err));
  });
}

sendTextMessage("59898059701", "aalalalalala");
module.exports = {
  sendTextMessage,
};