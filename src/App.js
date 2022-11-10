import { useState, useEffect } from 'react'

function App() {

    const [gameboard, setGameboard] = useState([[0,0,0],[0,0,0],[0,0,0]])

    useEffect(() => {

    },[])
  return (
    <div className="App">
        <div className="gameboard">
            <div className="row1">
                {gameboard[0].map((box) => {
                    return <div>{box}</div>
                })}
            </div>

            <div className="row2">
            {gameboard[1].map((box) => {
                return <div>{box}</div>
            })}
            </div>

            <div className="row3">
            {gameboard[2].map((box) => {
                return <div>{box}</div>
            })}
            </div>

        </div>
    </div>
  );
}

export default App;
