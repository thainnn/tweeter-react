export default function Tweet() {
  return (
    <article class="tweet">
      <header class="tweet--header">
        <img class="tweet--avatar" alt="" src="https://i.imgur.com/73hZDYK.png" />
        <h2 class="tweet--name">Newton</h2>
        <small class="tweet--handle">@SirIsaac</small>
      </header>

      <div class="tweet--body">
        <p>If I have seen further it is by standing on the shoulders of giants</p>
      </div>

      <footer class="tweet--footer">
        <small class="footer--age">10 days ago<small>
            <span class="footer--actions">
              <a href="#"><i class="fa fa-flag"></i></a>
              <a href="#"><i class="fa fa-retweet"></i></a>
              <a href="#"><i class="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
    </article>
  );
}