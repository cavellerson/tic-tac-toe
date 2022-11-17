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
        let col0 = gameboard[0][0] + gameboard[1][0] + gameboard[2][0]
        let col1 = gameboard[0][1] + gameboard[1][1] + gameboard[2][1]
        let col2 = gameboard[0][2] + gameboard[1][2] + gameboard[2][2]
        let winnerArray = ["xxx", "ooo"]

        if (typeof col0 === "string" && winnerArray.includes(col0.toLowerCase())){

            alert(gameboard[0][0] + " is winner!");
            resetGameboard()
        }
        if (typeof col1 === "string" && winnerArray.includes(col1.toLowerCase())){

            alert(gameboard[0][1] + " is winner!");
            resetGameboard()
        }
        if (typeof col2 === "string" && winnerArray.includes(col2.toLowerCase())){

            alert(gameboard[0][2] + " is winner!");
            resetGameboard()
        }

        let diag1 = gameboard[0][0] + gameboard[1][1] + gameboard[2][2]
        let diag2 = gameboard[0][2] + gameboard[1][1] + gameboard[2][0]

        if (typeof diag1 === "string" && winnerArray.includes(diag1.toLowerCase())) {
            alert(diag1[0] + " is winner!")
            resetGameboard()
        }
        if (typeof diag2 === "string" && winnerArray.includes(diag2.toLowerCase())) {
            alert(diag2[0] + " is winner!")
            resetGameboard()
        }


        for (let i = 0; i <= 2; i++) {
            if (gameboard) {
                if (winnerArray.includes(gameboard[i].join('').toLowerCase())) {
                    alert(gameboard[i][0] + " wins!")
                    setFirstChar(false)
                } else {
                    console.log("no winner yet");
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

    const resetGameboard = () => {
        setFirstChar()
        setSecondChar()
        setCounter(0)
        setRow0(defaultArray)
        setRow1(defaultArray)
        setRow2(defaultArray)
        checkWhichChar(counter)
    }

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
                resetGameboard()
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
