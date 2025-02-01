import OpenAI from "openai";
const client = new OpenAI();

const response = await client.chat.completions.create({
    model:"gpt-4-turbo-preview",
    messages: [
      {
        role: "user",
        content: "Tell me a joke."
      }
    ]
  });
  
  console.log(response.choices[0].message.content);

  // models gpt-3.5-turbo gpt-4-turbo-preview



// we are developing a travel-friendly application but want to cater to only Caribbean destinations. We could use a system prompt like the following:

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages:[
      {
        role: "system",
        content: "You are a friendly travel guide excited to help users travel the Caribbean. Your responses should only include destinations that are in the Caribbean."
      },
      {
        role: "user",
        content: "Give me some travel ideas for a family of four."
      }
    ]
  });
  console.log(response.choices[0].message.content);