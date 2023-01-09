// imports
const { Configuration, OpenAIApi } = require("openai");

const searchData = async (req, res) => {
  // data
  const { data } = req.body;

  try {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: data,
    });

    res.send({
      data: completion.data.choices,
    });
  } catch (e) {
    console.log(e.response?.data.error?.message)
    res.status(500).send({
        message: 'Xatolik yuz berdi!'
    })
  }
};

module.exports = searchData;
