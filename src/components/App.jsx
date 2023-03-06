//import PropTypes from 'prop-types';
import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
// import styles from './Statistics.module.css'

export class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option]+1
      }
    });
  }

  countTotalFeedback() {
    return this.state.bad + this.state.neutral + this.state.good;
  }

  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    return Math.round(this.state.good / total * 100);
  }

  render() {
    return <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          onLeaveFeedback={this.handleFeedback}
          options={["good", "neutral", "bad"]}
        />
      </Section>
      <Section title='Statistics'>
        {this.countTotalFeedback() ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /> : <Notification message='No feedback given'/>}
      </Section>
    </div>;
  }
}