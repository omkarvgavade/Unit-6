import logo from './logo.svg';
import './App.css';
import RecursionCompo from './Components/RecursionCompo';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
    points: "2",
    replies: [
      {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
        points: "3",
        replies: [
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
            points: "8"
          },
          {
            id: "005",
            author: "abhishek",
            body: "Thanks for the update abhishek!",
            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
            points: "8",
            replies: [{
              id: "010",
              author: "Omkar",
              body: "looking forward for the demo214124!",
              timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
              points: "2"
            }]
          }
        ]
      },
      {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
        points: "2"
      }
    ]
  })
  return (
    <div className="App">
      <RecursionCompo posts={data} />
    </div>
  );
}

export default App;
