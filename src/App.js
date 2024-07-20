import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'o título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'o título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'o título 3',
        body: 'O corpo 3'
      },
      {
        id: 4,
        title: 'o título 4',
        body: 'O corpo 4'
      },
      {
        id: 5,
        title: 'o título 5',
        body: 'O corpo 5'
      },
    ]
  };
  timeoutUpdate = null;


  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    
    this.handleTimeOut();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título mudou'

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000);

  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {
          posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        }

      </div>
    )
  }

}
export default App;
