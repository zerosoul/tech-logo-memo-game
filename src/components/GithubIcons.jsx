import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubIcons = () => [
  <GitHubButton
    key="star"
    href="https://github.com/zerosoul/frontend-memo-game"
    data-icon="octicon-star"
    data-show-count="true"
    aria-label="Star zerosoul/frontend-memo-game on GitHub"
  >
    Star
  </GitHubButton>,
  <GitHubButton
    key="issue"
    href="https://github.com/zerosoul/frontend-memo-game/issues"
    data-icon="octicon-issue-opened"
    data-show-count="true"
    aria-label="Issue zerosoul/frontend-memo-game on GitHub"
  >
    Issue
  </GitHubButton>
];
export default GithubIcons;
