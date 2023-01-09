// imports
const { Configuration, OpenAIApi } = require("openai");

const searchData = async (req, res) => {
  const { data } = req.body;

  const configuration = new Configuration({
    apiKey: "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",
  });
  
  const openai = new OpenAIApi(configuration)
  
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: data
  })

  res.send({
    data: completion.data.choices
  })
};

module.exports = searchData;
