import { contests, contestbrackets, contestprizes} from "../data/competitions.js";
let temp = ``;
contests.forEach((contest) =>{
    console.log(contest.dayjs)
    if (contest.completed === 0){
        temp += 
        `
        <div class="pcomp-item">
            <div></div>
            <div class="pcomp-box">
                <div class="pcomp-top">
                    <div class="pcomp-item-title">${contest.name}</div>
                    <div class="pcomp-item-date">${contest.dayjs.format('M-D-YYYY, h:mmA PT')}/${contest.dayjs.add(3, 'hour').format('h:mmA ET')}</div>
                </div>
                <div class="pcomp-bottom-one">
                    <div><a href=${contest.formLink} target='_blank'}"><button class="pcomp-item-bracket">Sign Up</button></a></div>
                </div>
            </div>
            <div></div>
        </div>
        `
    }
})
document.querySelectorAll('.pcomp-main')[0].innerHTML = temp;