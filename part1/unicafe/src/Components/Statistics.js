import StatisticLine from "../StatisticLine"

const Statistics = ({good, bad, neutral}) => {
    const sum= good+bad+neutral
    const avg= (good-bad)/sum
    return (
        <>
        <h1>statistics</h1>
        {sum===0?
        <>
        No feedback given
        </>:
        <div>
        <table>
            <tbody>
                <StatisticLine cat= "good" value= {good} />
                <StatisticLine cat= "neutral" value= {neutral} />
                <StatisticLine cat= "bad" value= {bad} />
                <StatisticLine cat= "all" value= {sum} />
                <StatisticLine cat= "average" value= {avg} />
                <StatisticLine cat= "positive" value= {((good*100)/(sum))+"%"} />
            </tbody>
        </table>
        </div>
    }
        </>
    )
}

export default Statistics