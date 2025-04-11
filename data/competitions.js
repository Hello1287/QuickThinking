//for completed, 0=no, 1=yes
export let contests = [
    /*
    {
        id: 0,
        prizeId: -1,
        name: "Weekly Competition #0",
        month: 3,
        date: 22,
        year: 2025,
        hour: 3,
        minute: 0,
        dayjs: dayjs('2025-03-23 15:00:00'),
        completed: 1,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        questionsLink: "https://www.google.com"
    },
    {
        id: -4,
        prizeId: -4,
        name: "Weekly Competition #-1",
        caption: "For Testing Purposes",
        image: "4-Player.png",
        month: 3,
        date: 23,
        year: 2025,
        hour: 3,
        minute: 0,
        dayjs: dayjs('2025-03-23 15:00:00'),
        completed: 1,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfZCbYxPToCfip-IvucSDpO4SfNFcDiA1IQhurDwnJqiZ8z2Q/viewform?usp=header",
        questionsLink: "https://www.google.com"
    },
    {
        id: -8,
        prizeId: -8,
        name: "Weekly Competition #-2",
        caption: "For Testing Purposes",
        image: "8-Player.png",
        month: 3,
        date: 30,
        year: 2025,
        hour: 11,
        minute: 0,
        dayjs: dayjs('2025-03-2 11:00:00'),
        completed: 1,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfZCbYxPToCfip-IvucSDpO4SfNFcDiA1IQhurDwnJqiZ8z2Q/viewform?usp=header",
        questionsLink: "https://www.google.com"
    },
    {
        id: -7,
        prizeId: -7,
        name: "Weekly Competition #-3",
        caption: "For Data Purposes",
        image: "8-Player.png",
        dayjs: dayjs('2025-03-31 18:48:00'),
        completed: 0,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfZCbYxPToCfip-IvucSDpO4SfNFcDiA1IQhurDwnJqiZ8z2Q/viewform?usp=header",
        questionsLink: "https://www.google.com"
    }
    */
   {
        id: -6,
        prizeId: -8,
        name: "Example Competition",
        caption: "Example",
        image: null,
        month: 3,
        date: 30,
        year: 2025,
        hour: 11,
        minute: 0,
        dayjs: dayjs('2025-03-2 11:00:00'),
        completed: 1,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        formLink: null,
        questionsLink: "https://docs.google.com/document/d/1KbUPhmI9jCQ3na7pVH3I_T08CYsQzlwQtSjLcni6v_E/edit?tab=t.0"
   },
   /*
   {
        id: -2,
        prizeId: -8,
        name: "Example Competition",
        caption: "Example",
        image: null,
        month: 3,
        date: 30,
        year: 2025,
        hour: 11,
        minute: 0,
        dayjs: dayjs('2025-03-2 11:00:00'),
        completed: 1,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        formLink: null
    }
    */
   {
        id: 1,
        prizeId: 8,
        name: "Weekly Competition #1",
        caption: "Standard Tournament",
        image: null,
        dayjs: dayjs('2025-04-12 15:00:00'),
        completed: 0,
        winner: null,
        eventDetails: "Sign up now for our weekly math competition!",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGFW-5SECEVoauVlomY-iVBxy13JU3eKuUkQQULO8xCnzK2Q/viewform?usp=header"
   }
]
//tie: -1=YES (broken with timed tiebreaker) 0=NO, Greater than 0 = YES (broken normally, number is the 10*playerOne+1*playerTwo)
//winner: 1=PlayerOne, 2=PlayerTwo
export let contestbrackets = [
    {
        id: -4,
        type: 4,
        prizeId: -4,
        names: ["Jack", "Mary", "Peter", "Sarah", ""],
        gameOne: {
            winner: 1,
            tie: 0  ,
            playerOne: 0,
            playerTwo: 1,
            playerOneScore: 4,
            playerTwoScore: 3
        },
        gameTwo: {
            winner: 2,
            tie: 23,
            playerOne: 2,
            playerTwo: 3,
            playerOneScore: 2,
            playerTwoScore: 2,
        },
        gameThree: {
            winner: 2,
            tie: 0,
            playerOne: 0,
            playerTwo: 3,
            playerOneScore: 4,
            playerTwoScore: 5
        },
        /*gameThree: {
            winner: 0,
            tie: 0,
            playerOne: 4,
            playerTwo: 4,
            playerOneScore: " ",
            playerTwoScore: " "
        },*/
        gameFour: {
            winner: 1,
            tie: -1,
            playerOne: 1,
            playerTwo: 2,
            playerOneScore: 1,
            playerTwoScore: 1
        },
        gameFive: {
            winner: 2,
            tie: 0,
            playerOne: 0,
            playerTwo: 1,
            playerOneScore: 2,
            playerTwoScore: 4
        },
        gameSix: {
            winner: 2,
            tie: 0,
            playerOne: 3,
            playerTwo: 1,
            playerOneScore: 3,
            playerTwoScore: 4
        }
    },
    {
        id: -8,
        type: 8,
        prizeId: -8,
        names: ["Peter R", "Sangwoo H", "Fredrick N", "Nathaniel G", "Trina L", "Edward G", "LUCY", "E.G.H", ""],
        gameOne: {
            winner: 1,
            tie: 0,
            playerOne: 0,
            playerTwo: 1,
            playerOneScore: 4,
            playerTwoScore: 0
        },
        gameTwo: {  
            winner: 1,
            tie: 0,
            playerOne: 2,
            playerTwo: 3,
            playerOneScore: 3,
            playerTwoScore: 1,
        },
        gameThree: {
            winner: 1,
            tie: 0,
            playerOne: 4,
            playerTwo: 5,
            playerOneScore: 2,
            playerTwoScore: 1
        },
        /*gameThree: {
            winner: 0,
            tie: 0,
            playerOne: 4,
            playerTwo: 4,
            playerOneScore: " ",
            playerTwoScore: " "
        },*/
        gameFour: {
            winner: 2,
            tie: 0,
            playerOne: 6,
            playerTwo: 7,
            playerOneScore: 0,
            playerTwoScore: 3
        },
        gameFive: {
            winner: 2,
            tie: 0,
            playerOne: 0,
            playerTwo: 2,
            playerOneScore: 0,
            playerTwoScore: 1
        },
        gameSix: {
            winner: 2,
            tie: 0,
            playerOne: 4,
            playerTwo: 7,
            playerOneScore: 4,
            playerTwoScore: 5
        },
        gameSeven: {
            winner: 2,
            tie: 0,
            playerOne: 1,
            playerTwo: 3,
            playerOneScore: 0,
            playerTwoScore: 5
        },
        gameEight: {
            winner: 1,
            tie: 32,
            playerOne: 5,
            playerTwo: 6,
            playerOneScore: 3,
            playerTwoScore: 3
        },
        gameNine: {
            winner: 2,
            tie: 0,
            playerOne: 4,
            playerTwo: 3,
            playerOneScore: 1,
            playerTwoScore: 3
        },
        gameTen: {
            winner: 1,
            tie: 0,
            playerOne: 0,
            playerTwo: 5,
            playerOneScore: 2,
            playerTwoScore: 1
        },
        gameEleven: {
            winner: 1,
            tie: -1,
            playerOne: 2,
            playerTwo: 7,
            playerOneScore: 2,
            playerTwoScore: 2
        },
        gameTwelve: {
            winner: 2,
            tie: 15,
            playerOne: 3,
            playerTwo: 0,
            playerOneScore: 2,
            playerTwoScore: 2
        },
        gameThirteen: {
            winner: 1,
            tie: -1,
            playerOne: 7,
            playerTwo: 0,
            playerOneScore: 3,
            playerTwoScore: 3
        },
        gameFourteen: {
            winner: 1,
            tie: 0,
            playerOne: 2,
            playerTwo: 7,
            playerOneScore: 5,
            playerTwoScore: 0
        },
    },
    {
        id: -6,
        type: -8,
        prizeId: -8,
        names: ["Peter P", "Sangwoo H", "Fredrick N", "Nathaniel G", "Trina L", "Edward G", "Mandy C", "Charlotte W", ""],
        gameOne: {
            winner: 1,
            tie: 0,
            playerOne: 0,
            playerTwo: 1,
            playerOneScore: 4,
            playerTwoScore: 0
        },
        gameTwo: {  
            winner: 1,
            tie: 0,
            playerOne: 2,
            playerTwo: 3,
            playerOneScore: 3,
            playerTwoScore: 1,
        },
        gameThree: {
            winner: 1,
            tie: 0,
            playerOne: 4,
            playerTwo: 5,
            playerOneScore: 2,
            playerTwoScore: 1
        },
        /*gameThree: {
            winner: 0,
            tie: 0,
            playerOne: 4,
            playerTwo: 4,
            playerOneScore: " ",
            playerTwoScore: " "
        },*/
        gameFour: {
            winner: 2,
            tie: 0,
            playerOne: 6,
            playerTwo: 7,
            playerOneScore: 0,
            playerTwoScore: 3
        },
        gameFive: {
            winner: 2,
            tie: 0,
            playerOne: 0,
            playerTwo: 2,
            playerOneScore: 0,
            playerTwoScore: 1
        },
        gameSix: {
            winner: 2,
            tie: 0,
            playerOne: 4,
            playerTwo: 7,
            playerOneScore: 4,
            playerTwoScore: 5
        },
        gameSeven: {
            winner: 2,
            tie: 0,
            playerOne: 1,
            playerTwo: 3,
            playerOneScore: 0,
            playerTwoScore: 5
        },
        gameEight: {
            winner: 1,
            tie: 32,
            playerOne: 5,
            playerTwo: 6,
            playerOneScore: 3,
            playerTwoScore: 3
        },
        gameNine: {
            winner: 2,
            tie: 0,
            playerOne: 4,
            playerTwo: 3,
            playerOneScore: 1,
            playerTwoScore: 3
        },
        gameTen: {
            winner: 1,
            tie: 0,
            playerOne: 0,
            playerTwo: 5,
            playerOneScore: 2,
            playerTwoScore: 1
        },
        gameEleven: {
            winner: 1,
            tie: -1,
            playerOne: 2,
            playerTwo: 7,
            playerOneScore: 2,
            playerTwoScore: 2
        },
        gameTwelve: {
            winner: 2,
            tie: 15,
            playerOne: 3,
            playerTwo: 0,
            playerOneScore: 2,
            playerTwoScore: 2
        },
        gameThirteen: {
            winner: 1,
            tie: -1,
            playerOne: 7,
            playerTwo: 0,
            playerOneScore: 3,
            playerTwoScore: 3
        },
        gameFourteen: {
            winner: 1,
            tie: 0,
            playerOne: 2,
            playerTwo: 7,
            playerOneScore: 5,
            playerTwoScore: 0
        },
    },
    {
        id: -2,
        type: 8,
        prizeId: -8,
        names: ["Peter P", "Sangwoo H", "Fredrick N", "Nathaniel G", "Trina L", "Edward G", "Mandy C", "Charlotte W", ""],
        gameOne: {
            winner: 0,
            tie: 0,
            playerOne: 0,
            playerTwo: 1,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameTwo: {
            winner: 0,
            tie: 0,
            playerOne: 2,
            playerTwo: 3,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameThree: {
            winner: 0,
            tie: 0,
            playerOne: 4,
            playerTwo: 5,
            playerOneScore: "",
            playerTwoScore: ""
        },
        /*gameThree: {
            winner: 0,
            tie: 0,
            playerOne: 4,
            playerTwo: 4,
            playerOneScore: " ",
            playerTwoScore: " "
        },*/
        gameFour: {
            winner: 0,
            tie: 0,
            playerOne: 6,
            playerTwo: 7,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameFive: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameSix: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameSeven: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameEight: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameNine: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameTen: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameEleven: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameTwelve: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameThirteen: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
        gameFourteen: {
            winner: 0,
            tie: 0,
            playerOne: 8,
            playerTwo: 8,
            playerOneScore: "",
            playerTwoScore: ""
        },
    },
]
export let contestprizes = [
    {
        id: -4,
        prizes: [`1x Winners Trophy,<br>6 points,<br>Qualified to champions`, `4 points`, `2 points`, `1 point`]
    },
    {
        id: -44,
        prizes: [`1x Masters Winners Trophy,<br>12 points,<br>Qualified to champions`, `8 points`, `4 points`, `2 points`]
    },
    {
        id: -8,
        prizes: [`&shy;<br>8 points<br>&shy;`, `6 points`, `4 points`, `3 points`, `2 points`, `2 points`, `1 point`, `1 point`]
    }
]