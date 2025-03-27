const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(cors()); // 可依需求設置白名單

app.get("/api/subscribers", async (req, res) => {
  const { YOUTUBE_API_KEY, CHANNEL_ID } = process.env;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels`,
      {
        params: {
          part: "statistics",
          id: CHANNEL_ID,
          key: YOUTUBE_API_KEY,
        },
      }
    );

    const count = response.data.items?.[0]?.statistics?.subscriberCount;
    if (count) {
      res.json({ subscriberCount: count });
    } else {
      res.status(404).json({ error: "頻道資料錯誤" });
    }
  } catch (error) {
    res.status(500).json({ error: "API 請求失敗", detail: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
