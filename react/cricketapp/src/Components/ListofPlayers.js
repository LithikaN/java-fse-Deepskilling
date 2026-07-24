import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 88 },
        { name: "Gill", score: 75 },
        { name: "Rahul", score: 65 },
        { name: "Hardik", score: 82 },
        { name: "Jadeja", score: 68 },
        { name: "Surya", score: 91 },
        { name: "Pant", score: 55 },
        { name: "Shami", score: 40 },
        { name: "Bumrah", score: 72 },
        { name: "Siraj", score: 60 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score Below 70</h2>

            {below70.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}
        </div>
    );
}

export default ListofPlayers;