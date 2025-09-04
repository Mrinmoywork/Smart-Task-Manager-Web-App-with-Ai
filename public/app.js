document.getElementById("askAiBtn").addEventListener("click", async () => {
  const question = document.getElementById("aiQuestion").value.trim();
  if (!question) return;

  const aiResponseDiv = document.getElementById("aiResponse");
  aiResponseDiv.innerHTML = `<span class="loading-dots">Thinking<span>.</span><span>.</span><span>.</span></span>`;

  try {
    const response = await fetch("http://localhost:5000/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    if (data.error) {
      aiResponseDiv.innerHTML = `<p class="text-red-400">⚠️ ${data.error}</p>`;
    } else {
      aiResponseDiv.innerHTML = `<p class="text-green-300 whitespace-pre-line">${data.answer}</p>`;
    }
  } catch (err) {
    aiResponseDiv.innerHTML = `<p class="text-red-400">❌ Error: ${err.message}</p>`;
  }
});
