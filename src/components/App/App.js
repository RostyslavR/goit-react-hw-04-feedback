import { useState } from 'react';
import { Container } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(s => s + 1);
        return;
      case 'neutral':
        setNeutral(s => s + 1);
        return;
      case 'bad':
        setBad(s => s + 1);
        return;
      default:
      //do nothing
    }
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics feedbacks={{ good, neutral, bad }} />
      </Section>
    </Container>
  );
};
