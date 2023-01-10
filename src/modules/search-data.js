// imports
const { Configuration, OpenAIApi } = require("openai");

const searchData = async (req, res) => {
  // data
  const { data } = req.body;

  try {
    // openai configurations

    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: data,
    });

    // send response
    res.send({
      data: completion.data.choices,
    });
  } catch (e) {
    // send error response

    res.status(500).send({
        message: e.response?.data.error?.message || 'Xatolik yuz berdi!'
    })
  }
};

module.exports = searchData;
