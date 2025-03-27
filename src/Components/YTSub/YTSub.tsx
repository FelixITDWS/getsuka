import { useEffect, useState } from "react";
import "./YTSub.scss";

interface ChannelStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
}

interface ChannelSnippet {
  title: string;
  description: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
}

const YTSub: React.FC = () => {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  // const [viewCount, setViewCount] = useState<number | null>(null);
  // const [videoCount, setVideoCount] = useState<number | null>(null);
  const [channelTitle, setChannelTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("https://my-youtube-proxy.felix-itdws.workers.dev/api/subscribers");
        const data = await response.json();

        const stats: ChannelStats | undefined = data.items?.[0]?.statistics;
        const snippet: ChannelSnippet | undefined = data.items?.[0]?.snippet;

        if (stats?.subscriberCount) {
          setSubscriberCount(parseInt(stats.subscriberCount, 10));
          // setViewCount(parseInt(stats.viewCount, 10));
          // setVideoCount(parseInt(stats.videoCount, 10));
        } else {
          setError("找不到訂閱數");
        }

        if (snippet?.title) {
          setChannelTitle(snippet.title);
        }

      } catch (err) {
        if (err instanceof Error) {
          setError("讀取失敗：" + err.message);
        } else {
          setError("讀取失敗：發生未知錯誤");
        }
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="yt-container">
      <a href="https://www.youtube.com/@GetsukaCh" target="_blank" rel="noreferrer">
        <h2 className="title">
          {channelTitle ? "YouTube 頻道資訊" : "載入中..."}
        </h2>

        {error && <p className="error">{error}</p>}

        {!error && subscriberCount === null && <p>載入中...</p>}

        {!error && subscriberCount !== null && (
          <div className="stats">
            <p className="count">訂閱數：{subscriberCount.toLocaleString()} 人</p>
            {/* <p>觀看次數：{viewCount?.toLocaleString()}</p> */}
            {/* <p>影片總數：{videoCount?.toLocaleString()}</p> */}
          </div>
        )}
      </a>
    </div>
  );
};

export { YTSub };
