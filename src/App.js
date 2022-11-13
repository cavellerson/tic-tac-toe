import { useState, useEffect } from 'react'

function App() {

    const [row0, setRow0] = useState([0,0,0])
    const [row1, setRow1] = useState([0,0,0])
    const [row2, setRow2] = useState([0,0,0])
    const defaultArray = [0,0,0]
    const [gameboard, setGameboard] = useState()
    const [counter, setCounter] = useState(0)
    const [firstChar, setFirstChar] = useState(false)
    const [currentChar, setCurrentChar] = useState(firstChar)
    const [secondChar, setSecondChar] = useState()



    const checkWhichChar = (counter) => {
        if (counter % 2 === 0) {
            setCurrentChar(firstChar)
        } else {
            setCurrentChar(secondChar)
        }
    }
    const checkWinner = (gameboard) => {
        let charCounter = 0;
        for (let i = 0; i <= 2; i++) {
            if (gameboard) {
                if (gameboard[i].join('').toLowerCase() === ("xxx" || "ooo")) {
                    alert(gameboard[i][0] + " wins!")
                    // console.log(gameboard[i][0] + " wins!");
                } else {
                    console.log("no winner yet");
                }
            }
            for (let j = 0; j <= 2; j++) {
                //0,0 - 1,0 - 2,0  0,1 - 1,1 - 2,1 0,2 - 1,2 - 2,2
                columnString += gameboard[i][0]
                if (columnString.toLowerCase() === ("xxx" | "ooo")) {
                    console.log("column wins");
                }
            }

        }


    }

    useEffect(() => {

        checkWhichChar(counter)
        let copiedArray = [row0, row1, row2]
        setGameboard(copiedArray)
        // console.table(gameboard);


    },[firstChar, counter])

    useEffect(() => {
        if (firstChar && gameboard) {
            checkWinner(gameboard);

        }

    },[gameboard])

  return (
    <div className="App">

        <h1>Select Character</h1>
        <h2>first char: {firstChar}</h2>
        <h2>second char: {secondChar}</h2>
        <h2>current char: {currentChar}</h2>
        <h2>Character chosen first: {firstChar} </h2>
        {firstChar ?
            <button onClick={(event) => {
                event.preventDefault();
                setFirstChar()
                setCounter(0)
                setRow0(defaultArray)
                setRow1(defaultArray)
                setRow2(defaultArray)
                checkWhichChar(counter)
            }}>Reset</button>  :
            <div>

            <button onClick={(event) => {
                event.preventDefault()
                setFirstChar('X')
                setSecondChar('O')
            }}>X</button>
            <button onClick={(event) => {
                event.preventDefault()
                setFirstChar('O')
                setSecondChar('X')
            }}>O</button>
            </div>
        }







        {firstChar ?
            <div className="gameboard">
                    <div className="row0">
                        {row0.map((box,index) => {
                            return <button
                            key={index}
                            className={`row0col${index}`}
                            onClick={(event) => {
                                event.preventDefault()
                                let newRow0 = [...row0]
                                newRow0[`${index}`] = currentChar;
                                setRow0(newRow0)
                                setCounter(counter + 1)


                            }}>{box}</button>
                        })}
                    </div>

                    <div className="row1">
                        {row1.map((box,index) => {
                            return <button
                            key={index}
                            className={`row1col${index}`}
                            onClick={(event) => {
                                event.preventDefault();
                                let newRow1 = [...row1];
                                newRow1[`${index}`] = currentChar;
                                setRow1(newRow1)
                                setCounter(counter + 1)
                            }}>{box}</button>
                        })}
                    </div>

                    <div className="row2">
                        {row2.map((box,index) => {
                            return <button
                            key={index}
                            className={`row2col${index}`}
                            onClick={(event) => {
                                event.preventDefault();
                                let newRow2 = [...row2];
                                newRow2[`${index}`] = currentChar;
                                setRow2(newRow2)
                                setCounter(counter + 1)
                            }}>{box}</button>
                        })}
                    </div>

            </div>
            : null}

    </div>
  );
}

export default App;
