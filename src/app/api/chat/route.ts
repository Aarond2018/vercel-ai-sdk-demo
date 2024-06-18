import { google } from "@ai-sdk/google";
import { StreamingTextResponse, streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    messages,
  });

  return result.toAIStreamResponse();

  // const data = new StreamData();

  // data.append({ test: 'value' });

  // const stream = result.toAIStream({
  //   onFinal(_) {
  //     data.close();
  //   },
  // });

  // return new StreamingTextResponse(stream, {}, data);
}