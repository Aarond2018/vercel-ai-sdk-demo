"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();

  return (
    <main className="w-full">
      <h1 className="text-center mt-12 text-2xl font-semibold">
        Vercel AI SDK Demo
      </h1>
      <div className="flex flex-col gap-4 w-[90%] max-w-md py-8 mx-auto stretch last:mb-16">
        {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap ${
              m.role === "user" ? "text-right bg-slate-50 p-2 rounded-md" : ""
            }`}
          >
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </main>
  );
}
