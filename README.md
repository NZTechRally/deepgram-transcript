# Deepgram caption and transcript generator

For generating transcripts for our video and audio files

## Project setup

### Prerequisites

- Node v20+ (installed globally)
- Free personal [Deepgram account](https://console.deepgram.com/signup?jump=keys)

### Install dependencies

In terminal, open folder of this codebase, and run

```bash
npm i
```

## Generating caption

1. Put video or audio files inside `raw` folder.
2. In `index.js`, update:

   - `YOUR_DEEPGRAM_API_KEY` with your own personal Deepgram key
   - `mp4` to file extension of the raw files

3. In terminal, run
   ```bash
   npm start
   ```
4. New caption files should be created in `output` folder. Upload these to YouTube

## Troubleshooting

### Resources and references

- [Automatically Generating WebVTT & SRT Captions](https://developers.deepgram.com/docs/automatically-generating-webvtt-and-srt-captions)
