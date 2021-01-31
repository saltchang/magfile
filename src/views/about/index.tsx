import * as React from 'react';

import './about.scss';

const AboutPage = () => {
  return (
    <main className="about-page">
      <div className="content">
        <p>正在趨近於 27 歲，興趣使然的自由軟體開發者，4 年軟體工程經驗。</p>
        <p>
          認為寫程式是一種必要途徑，目的為開發出「好用、美觀、安全」的應用程式，並將其分享給眾人，以改善人類社群的工作效率以及生活品質。
        </p>
        <p>
          軟體雖不能解決人生的痛苦及社會的黑暗，但可以讓你我的生活更簡單容易些。
        </p>

        <p>-</p>

        <p>
          I am a software developer who yearns for freedom. I have four years of
          software engineering experience.
        </p>
        <p>
          I think that programming is a necessary means to change the world. The
          purpose of programming is to develop &quot;easy-to-use, beautiful, and
          safe&quot; applications.
        </p>
        <p>
          Then share them with others to improve the work efficiency and quality
          of life of the human community.{' '}
        </p>
        <p>
          Although software cannot solve the pain in life or the darkness in our
          society, it can still make your life easier.{' '}
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
