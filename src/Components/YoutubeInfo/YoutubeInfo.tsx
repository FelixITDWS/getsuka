import { useEffect, useState } from "react";
import "./YoutubeInfo.scss";

interface ChannelStats {
  subscriberCount: string;
}

interface ChannelSnippet {
  title: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
}

const DEUBT_DATE = new Date("2024-03-23");

const calcDaySince = (startDate: Date): number => {
  const today = new Date();
  const timeDiff = today.getTime() - startDate.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}

const YoutubeInfo: React.FC = () => {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [channelTitle, setChannelTitle] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
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
        } else {
          setError("找不到訂閱數");
        }

        if (snippet?.title) {
          setChannelTitle(snippet.title);
        }

        if (snippet?.thumbnails?.medium?.url) {
          setThumbnailUrl(snippet.thumbnails.medium.url);
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
    <div className="yt-card-container">
      <a href="https://www.youtube.com/@GetsukaCh" target="_blank" rel="noreferrer" className="yt-card">
        {thumbnailUrl && (
          <img src={thumbnailUrl} alt="頻道頭像" className="yt-avatar" />
        )}
        <h3 className="yt-title">
          {channelTitle ?? "載入中..."}
        </h3>
        {error ? (
          <p className="yt-error">{error}</p>
        ) : subscriberCount !== null ? (
          <p className="yt-sub-count">訂閱：{subscriberCount.toLocaleString()} 人</p>
        ) : (
          <p className="yt-loading">載入中...</p>
        )}
        <p>出道：{calcDaySince(DEUBT_DATE)} 天</p>
      </a>
    </div>
  );
};

export { YoutubeInfo };
