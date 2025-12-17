import { useEffect, useRef } from 'react';

interface TweetEmbedProps {
  tweetId: string;
}

export const FlowBoardTweetEmbed = ({ tweetId }: TweetEmbedProps) => {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore - Twitter widgets API
      if (window.twttr?.widgets) {
        // @ts-ignore
        window.twttr.widgets.load();
      }
    };

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [tweetId]);

  return (
    <div 
      ref={tweetRef} 
      style={{ 
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        maxHeight: '595px',
        overflow: 'hidden'
      }}
    >
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/x/status/${tweetId}`}>Loading tweet...</a>
      </blockquote>
    </div>
  );
};
