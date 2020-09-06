import React from 'react';
import Section from './section/Section'
import FeedbackOptions from './feedbackOptions/FeedbackOptions'
import Statistics from './statistics/Statistics';


const state = {
  good: 0,
  neutral: 0,
  bad: 0
}


class App extends React.Component{
  state = {...state};

  sendFeedback = (name) => {
    this.setState(prev => {
      return{[name]: prev[name]+1}
      })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc+el ,0);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return (Math.floor((good*100)/total) + '%')
  }

  render(){
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={state} onLeaveFeedback={this.sendFeedback}/>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </>
    );
    }
}

export default App;

