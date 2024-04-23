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

1. Put video or audio files inside `raw` folder.
2. In `index.js`, update:

   - `YOUR_DEEPGRAM_API_KEY` with your own personal Deepgram key
   - `mp4` to file extension of the raw files

3. In terminal, run
   ```bash
   npm start
   ```
4. New caption files should be created in `output` folder. Remove first 9 lines (notes and Deepgram branding)

## Troubleshooting

### Resources and references

- [Automatically Generating WebVTT & SRT Captions](https://developers.deepgram.com/docs/automatically-generating-webvtt-and-srt-captions)
