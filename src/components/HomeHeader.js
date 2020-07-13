import React from 'react';

export default function HomeHeader() {
  return (
    <div className="homeHeader">
      <p>
        “this pickle doesn't care about your children. And I'm not gonna take
        their dreams. I'm gonna take their parents “ - <span>pickle rick</span>
      </p>
      <div class="homeHeader-pickle">
        <img
          src={require('../assets/images/picklerick.png')}
          alt="picklerick"
        />
      </div>
    </div>
  );
}
