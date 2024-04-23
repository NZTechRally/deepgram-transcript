# Deepgram transcript generator

For generating transcripts for our video and audio files

## Project setup

### Prerequisites

- Node v20+ (installed globally)
- Free personal [Deepgram account](https://console.deepgram.com/signup?jump=keys)
- Accepted invitation to [NZTR transcripts project on Deepgram](https://console.deepgram.com/project/2088fcfb-2f5f-4a25-905d-cdc6e3302db4)

#### Install dependencies

```bash
npm i
```

## Generating caption

1. Put video or audio file inside `raw` folder.
2. In `index.js`, update:
   - `deepgramApiKey` with your own registered Deepgram key
   - `fileName` with name of the video you just put into the raw folder
3. In terminal, run
   ```bash
   node index.js
   ```
4. A new caption file should be created in `output` folder.

## Troubleshooting

### Resources and references

- [Automatically Generating WebVTT & SRT Captions](https://developers.deepgram.com/docs/automatically-generating-webvtt-and-srt-captions)
