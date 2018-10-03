import React from 'react';
import './App.scss';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import marked from 'marked';



marked.setOptions({
  breaks: true,
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 750,

  },
  dense: {
    marginTop: 50,
  },
  menu: {
    width: 200,
  },
});

class Markdown extends React.Component {
  state = {
    preview: ''
  }
  getMarkdownText(textData) {
    const preview = marked(textData);
    return { __html: preview }
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.getMarkdownText(this.props.textData)} />
    )
  }
}

class App extends React.Component {

  state = {
    multiline: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <TextField

          id="editor"
          label="Code Editor"
          multiline
          rows="10"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />
        <div id='preview'>
          <Markdown textData={this.state.multiline} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
