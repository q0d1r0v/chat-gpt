// imports
const { Configuration, OpenAIApi } = require("openai");

const searchData = async (req, res) => {
  // data
  const { data } = req.body;

  try {
    const configuration = new Configuration({
      apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: data,
    });

    res.send({
      data: completion.data.choices,
    });
  } catch (e) {
    res.status(500).send({
        message: 'Xatolik yuz berdi!'
    })
  }
};

module.exports = searchData;
