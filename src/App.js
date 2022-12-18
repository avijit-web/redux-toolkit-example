import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/apiCalls';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { postsList, isFetching, error } = useSelector((state) => state)
  useEffect(() => {
    fetchPosts(dispatch)
  }, [])



  if (isFetching) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
  return (
    <div className='container'>
      <div className="row">
        {postsList && postsList.map((post) => (
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
