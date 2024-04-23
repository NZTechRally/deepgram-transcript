const { createClient } = require("@deepgram/sdk");
const { webvtt /* , srt */ } = require("@deepgram/captions");

const fs = require("fs");

const transcribeFile = async () => {
  // The API key we created in step 3
  const deepgramApiKey = "YOUR_API_KEY";

  // File name in ./raw folder
  const fileName = "YOUR_FILE_NAME";

  // Initializes the Deepgram SDK
  const deepgram = createClient(deepgramApiKey);

  console.log("Requesting transcript...");

  // Use Deepgram API on fileName with settings
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    fs.readFileSync(`./raw/${fileName}.mp4`),
    {
      model: "nova-2",
      smart_format: true,
      utterances: true,
      language: "en-NZ",
      keywords: ["NZTestingConf", "New Zealand"],
    }
  );

  // Create caption as WebVTT
  const stream = fs.createWriteStream(`./output/${fileName}.vtt`, {
    flags: "a",
  });
  const captions = webvtt(result);

  stream.write(captions);

  if (error) throw error;
  if (!error) console.dir(result, { depth: null });
};

transcribeFile();
