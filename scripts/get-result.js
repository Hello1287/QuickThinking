import { contests, contestbrackets, contestprizes} from "../data/competitions.js";
var url_string = document.URL;
console.log(url_string); 
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);
let matchingContest;
let matchingContestBracket;
let matchingContestPrize;
contests.forEach((contest) =>{
    if (contest.id == id){
        matchingContest = contest;
    }
})
contestbrackets.forEach((contestBracket) =>{
    if(contestBracket.id == id){
        matchingContestBracket = contestBracket;
    }
})
contestprizes.forEach((contestPrize) =>{
    if(contestPrize.id == matchingContestBracket.prizeId){
        matchingContestPrize = contestPrize;
    }
})
console.log(matchingContest, matchingContestBracket, matchingContestPrize)
let prizeCounter = 0;
if (matchingContestBracket.type === 4){
    document.querySelectorAll('.iloveplantlife')[0].innerHTML = 
        `<div class="tournament-header-grid">
                <div></div>
                <div class="tournament-image-grid">
                    <img class="tournament-image" src="images/${matchingContest.image}">
                </div>
                <div class="tournament-title-grid">
                    <div class="tournament-title">${matchingContest.name}</div>
                    <div class="tournament-description">${matchingContest.caption}</div>
                    <div>Date</div>
                    <div class="tournament-date">${matchingContest.dayjs.format('MMM D, YYYY - h:mmA')}</div>
                </div>
                <div></div>
            </div>
            <div class="tournament-main">
                <div></div>
                <div class="four-tournament-bracket">
                    <div class="four-tournament-left">
                        
                        <div class="four-tournament-upper-semis">
                            <div class="tournament-round-title">Upper Semifinals</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameOne.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameOne.playerOne]}${matchingContestBracket.gameOne.playerOne == 4 ? "" : ":"} ${matchingContestBracket.gameOne.playerOneScore}${matchingContestBracket.gameOne.tie > 0 ? `(${(matchingContestBracket.gameOne.tie-matchingContestBracket.gameOne.tie%10)/10})`: ''}${matchingContestBracket.gameOne.tie < 0 && matchingContestBracket.gameOne.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameOne.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameOne.playerTwo]}${matchingContestBracket.gameOne.playerTwo == 4 ? "" : ":"} ${matchingContestBracket.gameOne.playerTwoScore}${matchingContestBracket.gameOne.tie > 0 ? `(${matchingContestBracket.gameOne.tie%10})`: ''}${matchingContestBracket.gameOne.tie < 0 && matchingContestBracket.gameOne.winner === 2 ? '(T)' : ''}</div>
                            </div>  
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTwo.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwo.playerOne]}${matchingContestBracket.gameTwo.playerOne == 4 ? "" : ":"} ${matchingContestBracket.gameTwo.playerOneScore}${matchingContestBracket.gameTwo.tie > 0 ? `(${(matchingContestBracket.gameTwo.tie-matchingContestBracket.gameTwo.tie%10)/10})`: ''}${matchingContestBracket.gameTwo.tie < 0 && matchingContestBracket.gameTwo.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTwo.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwo.playerTwo]}${matchingContestBracket.gameTwo.playerTwo == 4 ? "" : ":"} ${matchingContestBracket.gameTwo.playerTwoScore}${matchingContestBracket.gameTwo.tie > 0 ? `(${matchingContestBracket.gameTwo.tie%10})`: ''}${matchingContestBracket.gameTwo.tie < 0 && matchingContestBracket.gameTwo.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                        </div>
                        <div class="four-tournament-lower-one">
                            <div class="tournament-round-title">Lower Round 1</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFour.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFour.playerOne]}${matchingContestBracket.gameFour.playerOne == 4 ? "" : ":"} ${matchingContestBracket.gameFour.playerOneScore}${matchingContestBracket.gameFour.tie > 0 ? `(${(matchingContestBracket.gameFour.tie-matchingContestBracket.gameFour.tie%10)/10})`: ''}${matchingContestBracket.gameFour.tie < 0 && matchingContestBracket.gameFour.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFour.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFour.playerTwo]}${matchingContestBracket.gameFour.playerTwo == 4 ? "" : ":"} ${matchingContestBracket.gameFour.playerTwoScore}${matchingContestBracket.gameFour.tie > 0 ? `(${matchingContestBracket.gameFour.tie%10})`: ''}${matchingContestBracket.gameFour.tie < 0 && matchingContestBracket.gameFour.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="four-tournament-center">
                        <div class="four-tournament-upper-finals">
                            <div class="tournament-round-title">Upper Final</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameThree.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThree.playerOne]}${matchingContestBracket.gameThree.playerOne == 4 ? "" : ":"} ${matchingContestBracket.gameThree.playerOneScore}${matchingContestBracket.gameThree.tie > 0 ? `(${(matchingContestBracket.gameThree.tie-matchingContestBracket.gameThree.tie%10)/10})`: ''}${matchingContestBracket.gameThree.tie < 0 && matchingContestBracket.gameThree.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameThree.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThree.playerTwo]}${matchingContestBracket.gameThree.playerTwo == 4 ? "" : ":"} ${matchingContestBracket.gameThree.playerTwoScore}${matchingContestBracket.gameThree.tie > 0 ? `(${matchingContestBracket.gameThree.tie%10})`: ''}${matchingContestBracket.gameThree.tie < 0 && matchingContestBracket.gameThree.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="four-tournament-lower-finals">
                            <div class="tournament-round-title">Lower Final</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFive.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFive.playerOne]}${matchingContestBracket.gameFive.playerOne == 4 ? "" : ":"} ${matchingContestBracket.gameFive.playerOneScore}${matchingContestBracket.gameFive.tie > 0 ? `(${(matchingContestBracket.gameFive.tie-matchingContestBracket.gameFive.tie%10)/10})`: ''}${matchingContestBracket.gameFive.tie < 0 && matchingContestBracket.gameFive.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFive.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFive.playerTwo]}${matchingContestBracket.gameFive.playerTwo == 4 ? "" : ":"} ${matchingContestBracket.gameFive.playerTwoScore}${matchingContestBracket.gameFive.tie > 0 ? `(${matchingContestBracket.gameFive.tie%10})`: ''}${matchingContestBracket.gameFive.tie < 0 && matchingContestBracket.gameFive.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="four-tournament-right">
                        <div class="four-tournament-grand-finals">
                            <div class="tournament-round-title">Grand Final</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameSix.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSix.playerOne]}${matchingContestBracket.gameSix.playerOne == 4 ? "" : ":"} ${matchingContestBracket.gameSix.playerOneScore}${matchingContestBracket.gameSix.tie > 0 ? `(${(matchingContestBracket.gameSix.tie-matchingContestBracket.gameSix.tie%10)/10})`: ''}${matchingContestBracket.gameSix.tie < 0 && matchingContestBracket.gameSix.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameSix.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSix.playerTwo]}${matchingContestBracket.gameSix.playerTwo == 4 ? "" : ":"} ${matchingContestBracket.gameSix.playerTwoScore}${matchingContestBracket.gameSix.tie > 0 ? `(${matchingContestBracket.gameSix.tie%10})`: ''}${matchingContestBracket.gameSix.tie < 0 && matchingContestBracket.gameSix.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div class="tournament-leaderboard">
                    <div class="tournament-leaderboard-title">Leaderboard</div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            1st
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameSix.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameSix.playerOne]}` : `${matchingContestBracket.names[matchingContestBracket.gameSix.playerTwo]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            2nd
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameSix.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameSix.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameSix.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            3rd
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameFive.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameFive.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameFive.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            4th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameFour.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameFour.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameFour.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        `;
    prizeCounter = 0;
    matchingContestPrize.prizes.forEach((matchingContestPrizeItem)=>{
        document.querySelectorAll('.tournament-leaderboard-item-prize')[prizeCounter].innerHTML = matchingContestPrizeItem;
        prizeCounter++;
    })  
}
else if(matchingContestBracket.type === 8){
    document.querySelectorAll('.iloveplantlife')[0].innerHTML = `
    <div class="tournament-header-grid">
                <div></div>
                <div class="tournament-image-grid">
                    <img class="tournament-image" src="images/${matchingContest.image}">
                </div>
                <div class="tournament-title-grid">
                    <div class="tournament-title">${matchingContest.name}</div>
                    <div class="tournament-description">${matchingContest.caption}</div>
                    <div>Date</div>
                    <div class="tournament-date">${matchingContest.dayjs.format('MMM D, YYYY - h:mmA')}</div>
                </div>
                <div></div>
            </div>
            <div class="tournament-main">
                <div></div>
                <div class="eight-tournament-bracket">
                    <div class="eight-tournament-left">  
                        <div class="eight-tournament-upper-quarters">
                            <div class="tournament-round-title">Upper Quarterfinals</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameOne.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameOne.playerOne]}${matchingContestBracket.gameOne.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameOne.playerOneScore}${matchingContestBracket.gameOne.tie > 0 ? `(${(matchingContestBracket.gameOne.tie-matchingContestBracket.gameOne.tie%10)/10})`: ''}${matchingContestBracket.gameOne.tie < 0 && matchingContestBracket.gameOne.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameOne.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameOne.playerTwo]}${matchingContestBracket.gameOne.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameOne.playerTwoScore}${matchingContestBracket.gameOne.tie > 0 ? `(${matchingContestBracket.gameOne.tie%10})`: ''}${matchingContestBracket.gameOne.tie < 0 && matchingContestBracket.gameOne.winner === 2 ? '(T)' : ''}</div>
                            </div>  
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTwo.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwo.playerOne]}${matchingContestBracket.gameTwo.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameTwo.playerOneScore}${matchingContestBracket.gameTwo.tie > 0 ? `(${(matchingContestBracket.gameTwo.tie-matchingContestBracket.gameTwo.tie%10)/10})`: ''}${matchingContestBracket.gameTwo.tie < 0 && matchingContestBracket.gameTwo.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTwo.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwo.playerTwo]}${matchingContestBracket.gameTwo.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameTwo.playerTwoScore}${matchingContestBracket.gameTwo.tie > 0 ? `(${matchingContestBracket.gameTwo.tie%10})`: ''}${matchingContestBracket.gameTwo.tie < 0 && matchingContestBracket.gameTwo.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameThree.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThree.playerOne]}${matchingContestBracket.gameThree.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameThree.playerOneScore}${matchingContestBracket.gameThree.tie > 0 ? `(${(matchingContestBracket.gameThree.tie-matchingContestBracket.gameThree.tie%10)/10})`: ''}${matchingContestBracket.gameThree.tie < 0 && matchingContestBracket.gameThree.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameThree.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThree.playerTwo]}${matchingContestBracket.gameThree.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameThree.playerTwoScore}${matchingContestBracket.gameThree.tie > 0 ? `(${matchingContestBracket.gameThree.tie%10})`: ''}${matchingContestBracket.gameThree.tie < 0 && matchingContestBracket.gameThree.winner === 2 ? '(T)' : ''}</div>
                            </div>  
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFour.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFour.playerOne]}${matchingContestBracket.gameFour.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameFour.playerOneScore}${matchingContestBracket.gameFour.tie > 0 ? `(${(matchingContestBracket.gameFour.tie-matchingContestBracket.gameFour.tie%10)/10})`: ''}${matchingContestBracket.gameFour.tie < 0 && matchingContestBracket.gameFour.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFour.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFour.playerTwo]}${matchingContestBracket.gameFour.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameFour.playerTwoScore}${matchingContestBracket.gameFour.tie > 0 ? `(${matchingContestBracket.gameFour.tie%10})`: ''}${matchingContestBracket.gameFour.tie < 0 && matchingContestBracket.gameFour.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-one">
                            <div class="tournament-round-title">Lower Round 1</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameSeven.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSeven.playerOne]}${matchingContestBracket.gameSeven.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameSeven.playerOneScore}${matchingContestBracket.gameSeven.tie > 0 ? `(${(matchingContestBracket.gameSeven.tie-matchingContestBracket.gameSeven.tie%10)/10})`: ''}${matchingContestBracket.gameSeven.tie < 0 && matchingContestBracket.gameSeven.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameSeven.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSeven.playerTwo]}${matchingContestBracket.gameSeven.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameSeven.playerTwoScore}${matchingContestBracket.gameSeven.tie > 0 ? `(${matchingContestBracket.gameSeven.tie%10})`: ''}${matchingContestBracket.gameSeven.tie < 0 && matchingContestBracket.gameSeven.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameEight.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEight.playerOne]}${matchingContestBracket.gameEight.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameEight.playerOneScore}${matchingContestBracket.gameEight.tie > 0 ? `(${(matchingContestBracket.gameEight.tie-matchingContestBracket.gameEight.tie%10)/10})`: ''}${matchingContestBracket.gameEight.tie < 0 && matchingContestBracket.gameEight.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameEight.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEight.playerTwo]}${matchingContestBracket.gameEight.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameEight.playerTwoScore}${matchingContestBracket.gameEight.tie > 0 ? `(${matchingContestBracket.gameEight.tie%10})`: ''}${matchingContestBracket.gameEight.tie < 0 && matchingContestBracket.gameEight.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="eight-tournament-midwest">
                        <div class="eight-tournament-upper-semis">
                            <div></div>
                            <div class="tournament-round-title">Upper Semifinals</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFive.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFive.playerOne]}${matchingContestBracket.gameFive.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameFive.playerOneScore}${matchingContestBracket.gameFive.tie > 0 ? `(${(matchingContestBracket.gameFive.tie-matchingContestBracket.gameFive.tie%10)/10})`: ''}${matchingContestBracket.gameFive.tie < 0 && matchingContestBracket.gameFive.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFive.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFive.playerTwo]}${matchingContestBracket.gameFive.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameFive.playerTwoScore}${matchingContestBracket.gameFive.tie > 0 ? `(${matchingContestBracket.gameFive.tie%10})`: ''}${matchingContestBracket.gameFive.tie < 0 && matchingContestBracket.gameFive.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameSix.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSix.playerOne]}${matchingContestBracket.gameSix.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameSix.playerOneScore}${matchingContestBracket.gameSix.tie > 0 ? `(${(matchingContestBracket.gameSix.tie-matchingContestBracket.gameSix.tie%10)/10})`: ''}${matchingContestBracket.gameSix.tie < 0 && matchingContestBracket.gameSix.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameSix.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSix.playerTwo]}${matchingContestBracket.gameSix.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameSix.playerTwoScore}${matchingContestBracket.gameSix.tie > 0 ? `(${matchingContestBracket.gameSix.tie%10})`: ''}${matchingContestBracket.gameSix.tie < 0 && matchingContestBracket.gameSix.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-two">
                            <div class="tournament-round-title">Lower Round 2</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameNine.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameNine.playerOne]}${matchingContestBracket.gameNine.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameNine.playerOneScore}${matchingContestBracket.gameNine.tie > 0 ? `(${(matchingContestBracket.gameNine.tie-matchingContestBracket.gameNine.tie%10)/10})`: ''}${matchingContestBracket.gameNine.tie < 0 && matchingContestBracket.gameNine.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameNine.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameNine.playerTwo]}${matchingContestBracket.gameNine.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameNine.playerTwoScore}${matchingContestBracket.gameNine.tie > 0 ? `(${matchingContestBracket.gameNine.tie%10})`: ''}${matchingContestBracket.gameNine.tie < 0 && matchingContestBracket.gameNine.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTen.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTen.playerOne]}${matchingContestBracket.gameTen.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameTen.playerOneScore}${matchingContestBracket.gameTen.tie > 0 ? `(${(matchingContestBracket.gameTen.tie-matchingContestBracket.gameTen.tie%10)/10})`: ''}${matchingContestBracket.gameTen.tie < 0 && matchingContestBracket.gameTen.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTen.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTen.playerTwo]}${matchingContestBracket.gameTen.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameTen.playerTwoScore}${matchingContestBracket.gameTen.tie > 0 ? `(${matchingContestBracket.gameTen.tie%10})`: ''}${matchingContestBracket.gameTen.tie < 0 && matchingContestBracket.gameTen.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="eight-tournament-mideast">
                        <div class="eight-tournament-upper-finals">
                            <div></div>
                            <div class="tournament-round-title">Upper Finals</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameEleven.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEleven.playerOne]}${matchingContestBracket.gameEleven.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameEleven.playerOneScore}${matchingContestBracket.gameEleven.tie > 0 ? `(${(matchingContestBracket.gameEleven.tie-matchingContestBracket.gameEleven.tie%10)/10})`: ''}${matchingContestBracket.gameEleven.tie < 0 && matchingContestBracket.gameEleven.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameEleven.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEleven.playerTwo]}${matchingContestBracket.gameEleven.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameEleven.playerTwoScore}${matchingContestBracket.gameEleven.tie > 0 ? `(${matchingContestBracket.gameEleven.tie%10})`: ''}${matchingContestBracket.gameEleven.tie < 0 && matchingContestBracket.gameEleven.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-three">
                            <div class="tournament-round-title">Lower Round 3</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTwelve.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerOne]}${matchingContestBracket.gameTwelve.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameTwelve.playerOneScore}${matchingContestBracket.gameTwelve.tie > 0 ? `(${(matchingContestBracket.gameTwelve.tie-matchingContestBracket.gameTwelve.tie%10)/10})`: ''}${matchingContestBracket.gameTwelve.tie < 0 && matchingContestBracket.gameTwelve.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTwelve.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerTwo]}${matchingContestBracket.gameTwelve.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameTwelve.playerTwoScore}${matchingContestBracket.gameTwelve.tie > 0 ? `(${matchingContestBracket.gameTwelve.tie%10})`: ''}${matchingContestBracket.gameTwelve.tie < 0 && matchingContestBracket.gameTwelve.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="eight-tournament-right">
                        <div class="eight-tournament-grand-finals">
                            <div></div>
                            <div class="tournament-round-title">Grand Final</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFourteen.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerOne]}${matchingContestBracket.gameFourteen.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameFourteen.playerOneScore}${matchingContestBracket.gameFourteen.tie > 0 ? `(${(matchingContestBracket.gameFourteen.tie-matchingContestBracket.gameFourteen.tie%10)/10})`: ''}${matchingContestBracket.gameFourteen.tie < 0 && matchingContestBracket.gameFourteen.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFourteen.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerTwo]}${matchingContestBracket.gameFourteen.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameFourteen.playerTwoScore}${matchingContestBracket.gameFourteen.tie > 0 ? `(${matchingContestBracket.gameFourteen.tie%10})`: ''}${matchingContestBracket.gameFourteen.tie < 0 && matchingContestBracket.gameFourteen.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-finals">
                            <div class="tournament-round-title">Lower Final</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameThirteen.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerOne]}${matchingContestBracket.gameThirteen.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameThirteen.playerOneScore}${matchingContestBracket.gameThirteen.tie > 0 ? `(${(matchingContestBracket.gameThirteen.tie-matchingContestBracket.gameThirteen.tie%10)/10})`: ''}${matchingContestBracket.gameThirteen.tie < 0 && matchingContestBracket.gameThirteen.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameThirteen.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerTwo]}${matchingContestBracket.gameThirteen.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameThirteen.playerTwoScore}${matchingContestBracket.gameThirteen.tie > 0 ? `(${matchingContestBracket.gameThirteen.tie%10})`: ''}${matchingContestBracket.gameThirteen.tie < 0 && matchingContestBracket.gameThirteen.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div class="tournament-leaderboard">
                    <div class="tournament-leaderboard-title">Leaderboard</div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            1st
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameFourteen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerOne]}` : `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerTwo]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            2nd
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameFourteen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            3rd
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameThirteen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            4th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameTwelve.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            5th-6th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameNine.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameNine.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameNine.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            5th-6th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameTen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameTen.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameTen.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            7th-8th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameSeven.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameSeven.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameSeven.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            7th-8th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameEight.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameEight.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameEight.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
    `
    prizeCounter = 0;
    matchingContestPrize.prizes.forEach((matchingContestPrizeItem)=>{
        document.querySelectorAll('.tournament-leaderboard-item-prize')[prizeCounter].innerHTML = matchingContestPrizeItem;
        prizeCounter++;
    })
}
else if(matchingContestBracket.type === -8){
    document.querySelectorAll('.iloveplantlife')[0].innerHTML = `
    <div class="tournament-header-grid">
                <div></div>
                <div class="tournament-image-grid">
                    <img class="tournament-image" src="images/${matchingContest.image}">
                </div>
                <div class="tournament-title-grid">
                    <div class="tournament-title">${matchingContest.name}</div>
                    <div class="tournament-description">${matchingContest.caption}</div>
                    <div>Date</div>
                    <div class="tournament-date">${matchingContest.dayjs.format('MMM D, YYYY - h:mmA')}</div>
                </div>
                <div></div>
            </div>
            <div class="tournament-main">
                <div></div>
                <div class="eight-tournament-bracket">
                    <div class="eight-tournament-left">  
                        <div class="eight-tournament-upper-quarters">
                            <div class="tournament-round-title">Upper Quarterfinals (everyone starts here)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameOne.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameOne.playerOne]}${matchingContestBracket.gameOne.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameOne.playerOneScore}${matchingContestBracket.gameOne.tie > 0 ? `(${(matchingContestBracket.gameOne.tie-matchingContestBracket.gameOne.tie%10)/10})`: ''}${matchingContestBracket.gameOne.tie < 0 && matchingContestBracket.gameOne.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameOne.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameOne.playerTwo]}${matchingContestBracket.gameOne.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameOne.playerTwoScore}${matchingContestBracket.gameOne.tie > 0 ? `(${matchingContestBracket.gameOne.tie%10})`: ''}${matchingContestBracket.gameOne.tie < 0 && matchingContestBracket.gameOne.winner === 2 ? '(T)' : ''}</div>
                            </div>  
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTwo.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwo.playerOne]}${matchingContestBracket.gameTwo.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameTwo.playerOneScore}${matchingContestBracket.gameTwo.tie > 0 ? `(${(matchingContestBracket.gameTwo.tie-matchingContestBracket.gameTwo.tie%10)/10})`: ''}${matchingContestBracket.gameTwo.tie < 0 && matchingContestBracket.gameTwo.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTwo.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwo.playerTwo]}${matchingContestBracket.gameTwo.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameTwo.playerTwoScore}${matchingContestBracket.gameTwo.tie > 0 ? `(${matchingContestBracket.gameTwo.tie%10})`: ''}${matchingContestBracket.gameTwo.tie < 0 && matchingContestBracket.gameTwo.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameThree.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThree.playerOne]}${matchingContestBracket.gameThree.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameThree.playerOneScore}${matchingContestBracket.gameThree.tie > 0 ? `(${(matchingContestBracket.gameThree.tie-matchingContestBracket.gameThree.tie%10)/10})`: ''}${matchingContestBracket.gameThree.tie < 0 && matchingContestBracket.gameThree.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameThree.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThree.playerTwo]}${matchingContestBracket.gameThree.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameThree.playerTwoScore}${matchingContestBracket.gameThree.tie > 0 ? `(${matchingContestBracket.gameThree.tie%10})`: ''}${matchingContestBracket.gameThree.tie < 0 && matchingContestBracket.gameThree.winner === 2 ? '(T)' : ''}</div>
                            </div>  
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFour.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFour.playerOne]}${matchingContestBracket.gameFour.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameFour.playerOneScore}${matchingContestBracket.gameFour.tie > 0 ? `(${(matchingContestBracket.gameFour.tie-matchingContestBracket.gameFour.tie%10)/10})`: ''}${matchingContestBracket.gameFour.tie < 0 && matchingContestBracket.gameFour.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFour.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFour.playerTwo]}${matchingContestBracket.gameFour.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameFour.playerTwoScore}${matchingContestBracket.gameFour.tie > 0 ? `(${matchingContestBracket.gameFour.tie%10})`: ''}${matchingContestBracket.gameFour.tie < 0 && matchingContestBracket.gameFour.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-one">
                            <div class="tournament-round-title">Lower Round 1 (losers of Upper Quarterfinals)    </div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameSeven.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSeven.playerOne]}${matchingContestBracket.gameSeven.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameSeven.playerOneScore}${matchingContestBracket.gameSeven.tie > 0 ? `(${(matchingContestBracket.gameSeven.tie-matchingContestBracket.gameSeven.tie%10)/10})`: ''}${matchingContestBracket.gameSeven.tie < 0 && matchingContestBracket.gameSeven.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameSeven.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSeven.playerTwo]}${matchingContestBracket.gameSeven.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameSeven.playerTwoScore}${matchingContestBracket.gameSeven.tie > 0 ? `(${matchingContestBracket.gameSeven.tie%10})`: ''}${matchingContestBracket.gameSeven.tie < 0 && matchingContestBracket.gameSeven.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameEight.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEight.playerOne]}${matchingContestBracket.gameEight.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameEight.playerOneScore}${matchingContestBracket.gameEight.tie > 0 ? `(${(matchingContestBracket.gameEight.tie-matchingContestBracket.gameEight.tie%10)/10})`: ''}${matchingContestBracket.gameEight.tie < 0 && matchingContestBracket.gameEight.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameEight.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEight.playerTwo]}${matchingContestBracket.gameEight.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameEight.playerTwoScore}${matchingContestBracket.gameEight.tie > 0 ? `(${matchingContestBracket.gameEight.tie%10})`: ''}${matchingContestBracket.gameEight.tie < 0 && matchingContestBracket.gameEight.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="eight-tournament-midwest">
                        <div class="eight-tournament-upper-semis">
                            <div></div>
                            <div class="tournament-round-title">Upper Semifinals (winners of upper quarterfinals)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFive.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFive.playerOne]}${matchingContestBracket.gameFive.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameFive.playerOneScore}${matchingContestBracket.gameFive.tie > 0 ? `(${(matchingContestBracket.gameFive.tie-matchingContestBracket.gameFive.tie%10)/10})`: ''}${matchingContestBracket.gameFive.tie < 0 && matchingContestBracket.gameFive.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFive.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFive.playerTwo]}${matchingContestBracket.gameFive.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameFive.playerTwoScore}${matchingContestBracket.gameFive.tie > 0 ? `(${matchingContestBracket.gameFive.tie%10})`: ''}${matchingContestBracket.gameFive.tie < 0 && matchingContestBracket.gameFive.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameSix.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSix.playerOne]}${matchingContestBracket.gameSix.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameSix.playerOneScore}${matchingContestBracket.gameSix.tie > 0 ? `(${(matchingContestBracket.gameSix.tie-matchingContestBracket.gameSix.tie%10)/10})`: ''}${matchingContestBracket.gameSix.tie < 0 && matchingContestBracket.gameSix.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameSix.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameSix.playerTwo]}${matchingContestBracket.gameSix.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameSix.playerTwoScore}${matchingContestBracket.gameSix.tie > 0 ? `(${matchingContestBracket.gameSix.tie%10})`: ''}${matchingContestBracket.gameSix.tie < 0 && matchingContestBracket.gameSix.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-two">
                            <div class="tournament-round-title" style="font-size: 13px">Lower Round 2 (Lower Round 1 Winners vs Upper Semifinals Losers)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameNine.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameNine.playerOne]}${matchingContestBracket.gameNine.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameNine.playerOneScore}${matchingContestBracket.gameNine.tie > 0 ? `(${(matchingContestBracket.gameNine.tie-matchingContestBracket.gameNine.tie%10)/10})`: ''}${matchingContestBracket.gameNine.tie < 0 && matchingContestBracket.gameNine.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameNine.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameNine.playerTwo]}${matchingContestBracket.gameNine.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameNine.playerTwoScore}${matchingContestBracket.gameNine.tie > 0 ? `(${matchingContestBracket.gameNine.tie%10})`: ''}${matchingContestBracket.gameNine.tie < 0 && matchingContestBracket.gameNine.winner === 2 ? '(T)' : ''}</div>
                            </div>
                            <div></div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTen.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTen.playerOne]}${matchingContestBracket.gameTen.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameTen.playerOneScore}${matchingContestBracket.gameTen.tie > 0 ? `(${(matchingContestBracket.gameTen.tie-matchingContestBracket.gameTen.tie%10)/10})`: ''}${matchingContestBracket.gameTen.tie < 0 && matchingContestBracket.gameTen.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTen.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTen.playerTwo]}${matchingContestBracket.gameTen.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameTen.playerTwoScore}${matchingContestBracket.gameTen.tie > 0 ? `(${matchingContestBracket.gameTen.tie%10})`: ''}${matchingContestBracket.gameTen.tie < 0 && matchingContestBracket.gameTen.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="eight-tournament-mideast">
                        <div class="eight-tournament-upper-finals">
                            <div></div>
                            <div class="tournament-round-title">Upper Final (winners of upper semis)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameEleven.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEleven.playerOne]}${matchingContestBracket.gameEleven.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameEleven.playerOneScore}${matchingContestBracket.gameEleven.tie > 0 ? `(${(matchingContestBracket.gameEleven.tie-matchingContestBracket.gameEleven.tie%10)/10})`: ''}${matchingContestBracket.gameEleven.tie < 0 && matchingContestBracket.gameEleven.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameEleven.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameEleven.playerTwo]}${matchingContestBracket.gameEleven.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameEleven.playerTwoScore}${matchingContestBracket.gameEleven.tie > 0 ? `(${matchingContestBracket.gameEleven.tie%10})`: ''}${matchingContestBracket.gameEleven.tie < 0 && matchingContestBracket.gameEleven.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-three">
                            <div class="tournament-round-title">Lower Round 3 (Winners of Lower Round 2)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameTwelve.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerOne]}${matchingContestBracket.gameTwelve.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameTwelve.playerOneScore}${matchingContestBracket.gameTwelve.tie > 0 ? `(${(matchingContestBracket.gameTwelve.tie-matchingContestBracket.gameTwelve.tie%10)/10})`: ''}${matchingContestBracket.gameTwelve.tie < 0 && matchingContestBracket.gameTwelve.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameTwelve.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerTwo]}${matchingContestBracket.gameTwelve.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameTwelve.playerTwoScore}${matchingContestBracket.gameTwelve.tie > 0 ? `(${matchingContestBracket.gameTwelve.tie%10})`: ''}${matchingContestBracket.gameTwelve.tie < 0 && matchingContestBracket.gameTwelve.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="eight-tournament-right">
                        <div class="eight-tournament-grand-finals">
                            <div></div>
                            <div class="tournament-round-title">Grand Final (winner of Upper Final and Lower Final)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameFourteen.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerOne]}${matchingContestBracket.gameFourteen.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameFourteen.playerOneScore}${matchingContestBracket.gameFourteen.tie > 0 ? `(${(matchingContestBracket.gameFourteen.tie-matchingContestBracket.gameFourteen.tie%10)/10})`: ''}${matchingContestBracket.gameFourteen.tie < 0 && matchingContestBracket.gameFourteen.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameFourteen.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerTwo]}${matchingContestBracket.gameFourteen.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameFourteen.playerTwoScore}${matchingContestBracket.gameFourteen.tie > 0 ? `(${matchingContestBracket.gameFourteen.tie%10})`: ''}${matchingContestBracket.gameFourteen.tie < 0 && matchingContestBracket.gameFourteen.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                        <div class="eight-tournament-lower-finals">
                            <div class="tournament-round-title" style="font-size:13px">Lower Final (Winner of Lower Round 3 vs Loser of Upper Final)</div>
                            <div class="tournament-match-box">
                                <div class="tournament-player-box ${matchingContestBracket.gameThirteen.winner === 1 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerOne]}${matchingContestBracket.gameThirteen.playerOne == 8 ? "" : ":"} ${matchingContestBracket.gameThirteen.playerOneScore}${matchingContestBracket.gameThirteen.tie > 0 ? `(${(matchingContestBracket.gameThirteen.tie-matchingContestBracket.gameThirteen.tie%10)/10})`: ''}${matchingContestBracket.gameThirteen.tie < 0 && matchingContestBracket.gameThirteen.winner === 1 ? '(T)' : ''}</div>
                                <div class="tournament-player-box ${matchingContestBracket.gameThirteen.winner === 2 ? "tournament-match-winner" : ""}">${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerTwo]}${matchingContestBracket.gameThirteen.playerTwo == 8 ? "" : ":"} ${matchingContestBracket.gameThirteen.playerTwoScore}${matchingContestBracket.gameThirteen.tie > 0 ? `(${matchingContestBracket.gameThirteen.tie%10})`: ''}${matchingContestBracket.gameThirteen.tie < 0 && matchingContestBracket.gameThirteen.winner === 2 ? '(T)' : ''}</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div class="tournament-leaderboard">
                    <div class="tournament-leaderboard-title">Leaderboard</div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            1st
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameFourteen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerOne]}` : `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerTwo]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            2nd
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameFourteen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameFourteen.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            3rd
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameThirteen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameThirteen.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            4th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameTwelve.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameTwelve.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            5th-6th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameNine.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameNine.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameNine.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            5th-6th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameTen.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameTen.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameTen.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            7th-8th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameSeven.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameSeven.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameSeven.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                    <div class="tournament-leaderboard-item">
                        <div class="tournament-leaderboard-item-place">
                            7th-8th
                        </div>
                        <div class="tournament-leaderboard-item-name">
                            ${matchingContestBracket.gameEight.winner === 1 ? `${matchingContestBracket.names[matchingContestBracket.gameEight.playerTwo]}` : `${matchingContestBracket.names[matchingContestBracket.gameEight.playerOne]}`}
                        </div>
                        <div class="tournament-leaderboard-item-prize">
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
    `
    prizeCounter = 0;
    matchingContestPrize.prizes.forEach((matchingContestPrizeItem)=>{
        document.querySelectorAll('.tournament-leaderboard-item-prize')[prizeCounter].innerHTML = matchingContestPrizeItem;
        prizeCounter++;
    })
}