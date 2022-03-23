import React from 'react';
import Calculator from '../Calculator';
import Header from '../Header';

export default function CalculatorPage() {
  return (
    <div>
      <Header />
      <section className="calc-elements">
        <h3>Let&apos;s do some math!</h3>
        <Calculator />
      </section>
    </div>
  );
}
