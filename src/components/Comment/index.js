import React, { useEffect, useState } from 'react';
import GT from 'gitalk';
import styled from 'styled-components';
import GTContainer from './styled';
const DevWrapper = styled.div`
  margin: 2rem auto;
  text-align: center;
  padding: 1rem;
  max-width: 20rem;
  border: 1px solid #ddd;
`;

const Comment = () => {
  const [isProd] = useState(process.env.NODE_ENV == 'production');
  // const [isProd] = useState(true);
  useEffect(() => {
    if (isProd) {
      const language = navigator.language === 'zh-CN' ? navigator.language : 'en';
      const gitalk = new GT({
        clientID: 'c8c27d719d4c2fc5dba2',
        clientSecret: 'f716e109d875147f14acef7a40ef631cf52ee100',
        repo: 'frontend-memo-game',
        owner: 'zerosoul',
        admin: ['zerosoul'],
        language,
        id: location.pathname, // Ensure uniqueness and length less than 50
        distractionFreeMode: false // Facebook-like distraction free mode
      });
      gitalk.render('gitalk-container');
    }
  }, [isProd]);
  return isProd ? (
    <GTContainer id="gitalk-container" />
  ) : (
    <DevWrapper>开发环境不加载评论组件</DevWrapper>
  );
};

export default Comment;
