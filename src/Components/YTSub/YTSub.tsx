import { useEffect, useState } from "react";
import "./YTSub.scss";

const YTSub: React.FC = () => {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/subscribers");
        const data = await response.json();

        if (data.subscriberCount) {
          const count = parseInt(data.subscriberCount, 10);
          setSubscriberCount(count);
        } else {
          setError("找不到訂閱數");
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
      <h2 className="title">Getsuka 頻道訂閱數</h2>
      {error && <p className="error">{error}</p>}
      {subscriberCount === null && !error && <p>載入中...</p>}
      {subscriberCount !== null && (
        <p className="count">{subscriberCount.toLocaleString()} 人</p>
      )}
    </div>
  );
};

export { YTSub };
