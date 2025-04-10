import {contests} from '../data/competitions.js';
let upcomingContest = "j";
contests.forEach((contest) =>{
    if (contest.completed === 0 && upcomingContest === "j"){
        upcomingContest = contest;
    }
})
console.log(upcomingContest)
console.log(document.querySelectorAll('.upcomingevents'))
//consider switching DD->D
document.querySelectorAll('.upcomingevents')[0].innerHTML=
`
<div class="upcomingeventsheader">Upcoming Competition</div>
<div class="placeholdername">
    <div class="upcomingdate">
        <div class="month">
            ${upcomingContest.dayjs.format('MMM')}
        </div>
        <div class="day">
            ${upcomingContest.dayjs.format('DD')}
        </div>
    </div>
    <div style="position: relative">
        <div class="eventname">${upcomingContest.name}</div>
        <div class="eventtime">${upcomingContest.dayjs.format('h:mmA PT')}/${upcomingContest.dayjs.add(3, 'hour').format('h:mmA ET')}</div>
        <div class="eventdetails">${upcomingContest.eventDetails}</div>
        <a class="eventdirect" href="${upcomingContest.formLink}" target="_blank">
            <button style="width:100%;
            height:100%; font-size:30px;">Sign Up</button>
        </a>
    </div>
</div>
`