import { contests, contestbrackets, contestprizes} from "../data/competitions.js";
let temp = ``;
contests.forEach((contest) =>{
    console.log(contest.dayjs)
    if (contest.completed === 1){
        temp = 
        `
        <div class="pcomp-item">
            <div></div>
            <div class="pcomp-box">
                <div class="pcomp-top">
                    <div class="pcomp-item-title">${contest.name}</div>
                    <div class="pcomp-item-date">${contest.dayjs.format('M-D-YYYY')}</div> 
                </div>
                <div class="pcomp-bottom">
                    <div><a href="get-result.html?id=${contest.id}"><button class="pcomp-item-bracket">Bracket</button></a></div>
                    <div><a href="https://www.google.com"><button class="pcomp-item-questions">Questions</button></a></div> 
                </div>
            </div>
            <div></div>
        </div>
        ` + temp
    }
})
document.querySelectorAll('.pcomp-main')[0].innerHTML = temp;