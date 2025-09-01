import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
    const {score,setAppState,setScore} = useContext(DataContext)

    const  restartApp = () => {
        setScore(0)
        setAppState("menu")
    }

    let scoreMessage = "";
    if (score === 0) {
        scoreMessage = "อาจจะยังน้า ลองทำใหม่ไหม";
    } else if (score === 1) {
        scoreMessage = "ไม่แย่ๆ ลองทำใหม่ไหม";
    } else if (score === 2) {
        scoreMessage = "เกือบเต็มละ ทำใหม่ไหม";
    }else {
        scoreMessage = "ยอดเยี่ยม! ได้คะแนนเต็ม!";
    }

    return(
        <div className = "score">
            <h1> {scoreMessage} </h1>
            <h2> {score} / {QuestionsData.length} </h2>
            <button onClick={restartApp}> ทำแบบทดสอบอีกครั้ง </button>
        </div>
    )
}

export default Score;