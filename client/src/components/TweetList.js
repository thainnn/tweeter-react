import Tweet from "./Tweet";

export default function TweetList(props) {
  const {tweets, users} = props;

  const tweetList = tweets.map((tweet) => 
    <Tweet
      key={tweet.id}
      name={tweet.user_id}
      handle={}
      content={tweet.content}
      created_at={tweet.created_at}
    />
  );
  return (
    <section class="tweets">
      {tweetList}
    </section>
  );
}