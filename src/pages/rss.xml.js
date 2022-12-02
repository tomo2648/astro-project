import rss from '@astrojs/rss';

export const get = () => rss({
  language: 'ja',
  // 出力されるXMLの`<title>`フィールド
  title: 'astro',
  // 出力されるXMLの`<description>`フィールド
  description: 'Astroはブログやその他のコンテンツウェブサイト向けに、RSSフィードの高速な自動生成をサポートしている。',
  // RSS内<item>リンクのベースURL
  // SITEはプロジェクトのastro.configにあるsiteの値が使用されます。
  site: import.meta.env.SITE,
  // 出力されるXMLの<item>のリスト
  // 簡単な例: src/pagesにあるマークダウンファイルからそれぞれitemsを生成する
  // 必要なfrontmatterや複雑なユースケースに関しては「`items`の生成」セクションをご覧ください。
  items: import.meta.glob('./**/*.md'),
  // (任意) カスタムxmlを利用する
  customData: `<language>en-us</language>`,
});


// const postImportResult = import.meta.glob('../posts/*.md', { eager: true });
// const posts = Object.values(postImportResult);

// export const get = () => rss({
//   title: 'Buzz’s Blog',
//   description: 'A humble Astronaut’s guide to the stars',
//   site: import.meta.env.SITE,
//   items: posts.map((post) => ({
//     link: post.url,
//     title: post.frontmatter.title,
//     pubDate: post.frontmatter.pubDate,
//   })),
//   customData: `<language>en-us</language>`,
// });