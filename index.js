const { createClient } = require("@deepgram/sdk");
const { webvtt } = require("@deepgram/captions");
const fs = require("fs");

const transcribeFile = () => {
  // The API key we created in step 3
  const deepgramApiKey = "YOU_DEEPGRAM_API_KEY";

  // Initializes the Deepgram SDK
  const deepgram = createClient(deepgramApiKey);

  // Read name of all files in ./raw folder
  const rawFiles = fs.readdirSync("./raw/");

  // Loop through all files in the raw folder
  rawFiles.forEach(async (file) => {
    // Use Deepgram API on fileName with settings
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      fs.readFileSync(`./raw/${file}`),
      {
        model: "nova-2",
        smart_format: true,
        utterances: true,
        language: "en-NZ",
        keywords: ["NZTestingConf", "New Zealand"],
      }
    );

    // Create caption as WebVTT files
    const stream = fs.createWriteStream(`./output/${file}.vtt`, {
      flags: "a",
    });
    const captions = webvtt(result);
    stream.write(captions);

    if (error) throw error;
    if (!error) console.dir(result, { depth: null });
  });
};

transcribeFile();
