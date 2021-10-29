import React from 'react';

import '../styles/Content.scss';

import memeC from '../assets/cBookSocks.jpg';
import memeCpp from '../assets/cppGoodBook.png';
import memeE from '../assets/eCode.png';
import memeLen from '../assets/gitLenseWhoWroteThisGarbage.png';
import memeDyn from '../assets/dynTyp.png';
import memeJs from '../assets/jsIsShit.jpg';
import memeNode from '../assets/nodeModulesBlackHole.png';
import memeCom from '../assets/noNeedToComment.jpg';
import memePull from '../assets/pullMyself.jpg';
import memeKn from '../assets/plKnives.png';

const Content = () => (
  <div className="Content" id="sectionContainer">
    <div id="Javastriptease" className="container">
      <img src={memeNode} />
      <img src={memeJs} />
    </div>
    <div id="'e'*42" className="container">
      <img src={memeE} />
      <img src={memeDyn} />
    </div>
    <div id="C is better" className="container">
      <img src={memeC} />
      <img src={memeCpp} />
    </div>
    <div id="Indi bininging" className="container">
      <img src={memeKn} />
      <img src={memeCom} />
    </div>
    <div id="I hate Safari" className="container">
      <img src={memeLen} />
      <img src={memePull} />
    </div>
  </div>
);
export default Content;
