import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.md에 작성될 페이지 텍스트 
 * @type {string}
 */
let text = `### Hi there 👋

### Language<br> 
<img src="https://img.shields.io/badge/Java-3178C6?style=flat&logo=Java&logoColor=black"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/TypeScript-2E2EFE?style=flat&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=Spring&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=black"/>



### Tools<br>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=Github&logoColor=white"/> <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat&logo=VisualStudioCode&logoColor=white"/>
<img src="https://img.shields.io/badge/Eclipse-2C2255?style=flat&logo=Eclipse&logoColor=white"/>
<img src="https://img.shields.io/badge/Intellij IDEA-7D00FF?style=flat&logo=Intellij IDEA&logoColor=white"/>

### Contact me
ojy0533@naver.com

![0jyyyyy's GitHub stats](https://github-readme-stats-sigma-five.vercel.app/api?username=0jyyyyy&show_icons=true&theme=radical)

### 📙 Latest Blog Posts
<p>
  <a href="https://dev-nerdtech.tistory.com/"><img src="https://img.shields.io/badge/Blog-ff5722?style=flat-square&logo=Blogger&logoColor=white"/></a><br>
</p>

`;

//rss-parser 생성
const parser = new Parser({
  headers: {
    Accept:'application/rss+xml, application/xml, text/xml; q=0.1',
  }
});

(async () => {
  //피드 목록
  const feed = await parser.parseURL('https://dev-nerdtech.tistory.com/rss');

  //최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
  for (let i = 0; i < 5; i++) {
    const {title, link} = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<a href=${link}>${title}</a></br>`;
  }

  //README.md 파일 작성
  writeFileSync('README.md', text, 'utf8', (e) => {
    console.log(e)
  })

  console.log('업데이트 완료')
})();