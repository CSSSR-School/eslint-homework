import React from 'react';

export class StoryAboutYourself extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

    handleChange = (event) => {
      console.log('handleChange', event);
      this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
      alert(`Ваш рассказ  о себе: ${this.state.value}`);
      event.preventDefault();
    }

    render() {
      const status = 'test';
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <span>Расскажи о себе</span>
            <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} className="text" />
            <input type="submit" value="Отправить" />
          </form>
          <div className="preview">
            <h1>О себе</h1>
            <div>{this.state.value}</div>
          </div>
        </div>
      );
    }
}
