// Detect backend URL automatically
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : window.location.origin;

// Ask AI function
async function askAI(question) {
  try {
    const response = await fetch(`${API_BASE_URL}/ask-ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch AI response");
    }

    const data = await response.json();
    return data.answer;
  } catch (err) {
    console.error("❌ Error fetching AI:", err);
    return "⚠️ Could not get AI response. Please try again.";
  }
}
