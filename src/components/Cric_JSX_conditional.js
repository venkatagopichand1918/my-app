import { useState } from "react";
function Cric(props){
    const[players, setPlayers] = useState([
        {playerNo: 1, playerName: "Sachin"},
        {playerNo: 2, playerName: "Dravid"},
        {playerNo: 3, playerName: "Rohit"},
        {playerNo: 4, playerName: "Virat"},
        {playerNo: 5, playerName: "Shami"},
        {playerNo: 6, playerName: "SuryaKumar"}
    ]);

    const playerList = (
        players.map((player) => {
            return(
                <li>{player.playerName}</li>
            )
        })
    );


    return (
        props.isCricketers ?
        playerList
        :
        <h1>Cricketers are not found</h1>

    )
}
export default Cric


//ternary operator javascript
