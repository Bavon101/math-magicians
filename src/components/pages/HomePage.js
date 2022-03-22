/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '../Header';

export default function HomePage() {
  return (
    <div>
      <Header />
      <h2> Welcome to our page!</h2>
      <article>
        Math magic tricks can liven up any math class and
        create a sense of wonder and curiosity about math.
        Not only that, math magic creates a new context
        for algebraic reasoning as students go beyond "What's
        the answer?" to explore "What's the trick?"
      </article>
    </div>
  );
}
