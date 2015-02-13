/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Grid',
                display: 'none',
                type: 'rect',
                rect: ['47px', '12px','401px','401px','auto', 'auto'],
                fill: ["rgba(255,255,255,0)"],
                stroke: [3,"rgb(0, 0, 0)","solid"],
                c: [
                {
                    id: 'GridSquare00',
                    type: 'rect',
                    rect: ['0px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare01',
                    type: 'rect',
                    rect: ['100px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare02',
                    type: 'rect',
                    rect: ['200px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare03',
                    type: 'rect',
                    rect: ['300px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare10',
                    type: 'rect',
                    rect: ['0px', '100px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare11',
                    type: 'rect',
                    rect: ['100px', '100px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare12',
                    type: 'rect',
                    rect: ['200px', '100px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare13',
                    type: 'rect',
                    rect: ['300px', '100px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare20',
                    type: 'rect',
                    rect: ['0px', '200px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare21',
                    type: 'rect',
                    rect: ['100px', '200px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare22',
                    type: 'rect',
                    rect: ['200px', '200px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare23',
                    type: 'rect',
                    rect: ['300px', '200px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare30',
                    type: 'rect',
                    rect: ['0px', '300px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare31',
                    type: 'rect',
                    rect: ['100px', '300px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare32',
                    type: 'rect',
                    rect: ['200px', '300px','auto','auto','auto', 'auto']
                },
                {
                    id: 'GridSquare33',
                    type: 'rect',
                    rect: ['300px', '300px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'gameOverBox',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'gameWon',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'menu',
                display: 'block',
                type: 'rect',
                rect: ['0px', '0px','500px','500px','auto', 'auto'],
                fill: ["rgba(255,255,255,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['169px', '17px','auto','auto','auto', 'auto'],
                    cursor: ['default'],
                    text: "2048:",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 64, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['67px', '96px','366px','auto','auto', 'auto'],
                    cursor: ['default'],
                    text: "Because there simply aren't enough clones out there already.",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'standardButton',
                    type: 'rect',
                    rect: ['55px', '189px','114px','61px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(255,249,197,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    c: [
                    {
                        id: 'Text3',
                        type: 'text',
                        rect: ['16px', '17px','auto','auto','auto', 'auto'],
                        text: "Standard",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text4',
                        type: 'text',
                        rect: ['131px', '2px','300px','auto','auto', 'auto'],
                        text: "The classic 2048 game.  Slide the tiles to combine them in order to reach the fabled 2048 tile.",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'blockedButton',
                    type: 'rect',
                    rect: ['55px', '266px','114px','61px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(255,243,146,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    c: [
                    {
                        id: 'Text3Copy',
                        type: 'text',
                        rect: ['22px', '17px','auto','auto','auto', 'auto'],
                        text: "Blocked",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text4Copy',
                        type: 'text',
                        rect: ['131px', '11px','300px','auto','auto', 'auto'],
                        text: "Like classic, but one of the starting tiles is uncombinable.",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                /*{
                    id: 'suicideButton',
                    type: 'rect',
                    rect: ['55px', '342px','114px','61px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(255,225,63,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    c: [
                    {
                        id: 'Text3Copy2',
                        type: 'text',
                        rect: ['25px', '17px','auto','auto','auto', 'auto'],
                        text: "Suicide",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text4Copy2',
                        type: 'text',
                        rect: ['131px', '11px','300px','auto','auto', 'auto'],
                        text: "Fill up the board in the least moves possible.  ",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },*/
                {
                    id: 'easyButton',
                    type: 'rect',
                    rect: ['55px', '342px','114px','61px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(255,225,63,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    c: [
                    {
                        id: 'Text3Copy3',
                        type: 'text',
                        rect: ['25px', '17px','auto','auto','auto', 'auto'],
                        text: "Shortcut",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text4Copy3',
                        type: 'text',
                        rect: ['131px', '11px','300px','auto','auto', 'auto'],
                        text: "Tired of getting to 1024 just to lose and have to start all over?  This mode is for you!",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'score',
                type: 'text',
                rect: ['129px', '446','265px','auto','auto', 'auto'],
                cursor: ['default'],
                text: "Current Score: ",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'GridSquare00',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare32',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare02',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'gameWon',
                symbolName: 'gameWon',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare13',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare11',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare33',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare31',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare03',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare30',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare21',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare10',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare22',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'gameOverBox',
                symbolName: 'gameOver',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare01',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare20',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare12',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            },
            {
                id: 'GridSquare23',
                symbolName: 'GridSquare',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_GridSquare32}": [
                ["style", "left", '200px'],
                ["style", "top", '300px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '17px'],
                ["style", "left", '22px'],
                ["style", "font-size", '20px']
            ],
            "${_GridSquare30}": [
                ["style", "top", '300px'],
                ["style", "left", '0px']
            ],
            "${_Text4Copy3}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '16px'],
                ["style", "left", '131px'],
                ["style", "width", '300px']
            ],
            "${_gameWon}": [
                ["style", "display", 'none']
            ],
            "${_blockedButton}": [
                ["style", "top", '266px'],
                ["color", "background-color", 'rgba(255,243,146,1.00)'],
                ["style", "left", '55px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_GridSquare12}": [
                ["style", "left", '200px'],
                ["style", "top", '100px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '16px'],
                ["style", "left", '131px'],
                ["style", "width", '300px']
            ],
            "${_GridSquare21}": [
                ["style", "left", '100px'],
                ["style", "top", '200px']
            ],
            "${_score}": [
                ["style", "cursor", 'default'],
                ["style", "left", '129px'],
                ["style", "width", '265px']
            ],
            /*"${_suicideButton}": [
                ["style", "top", '342px'],
                ["style", "cursor", 'pointer'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '55px'],
                ["color", "background-color", 'rgba(255,225,63,1.00)']
            ],*/
            "${_Grid}": [
                ["style", "top", '12px'],
                ["style", "display", 'none'],
                ["style", "height", '401px'],
                ["style", "left", '47px'],
                ["style", "border-width", '3px'],
                ["style", "width", '401px']
            ],
            "${_standardButton}": [
                ["style", "top", '189px'],
                ["style", "border-width", '1px'],
                ["style", "left", '55px'],
                ["style", "border-style", 'solid'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,249,197,1.00)']
            ],
            "${_GridSquare31}": [
                ["style", "left", '100px'],
                ["style", "top", '300px']
            ],
            "${_menu}": [
                ["style", "height", '500px'],
                ["style", "display", 'block'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '500px']
            ],
            "${_GridSquare00}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_GridSquare01}": [
                ["style", "left", '100px'],
                ["style", "top", '0px']
            ],
            "${_GridSquare23}": [
                ["style", "left", '300px'],
                ["style", "top", '200px']
            ],
            "${_Text3}": [
                ["style", "top", '17px'],
                ["style", "left", '16px'],
                ["style", "font-size", '20px']
            ],
            "${_easyButton}": [
                ["style", "top", '342px'],
                ["color", "background-color", 'rgba(255,225,63,1.00)'],
                ["style", "left", '55px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_GridSquare33}": [
                ["style", "left", '300px'],
                ["style", "top", '300px']
            ],
            "${_GridSquare22}": [
                ["style", "left", '200px'],
                ["style", "top", '200px']
            ],
            "${_gameOverBox}": [
                ["style", "display", 'none']
            ],
            "${_GridSquare20}": [
                ["style", "top", '200px'],
                ["style", "left", '0px']
            ],
            "${_GridSquare13}": [
                ["style", "left", '300px'],
                ["style", "top", '100px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '17px'],
                ["style", "left", '25px'],
                ["style", "font-size", '20px']
            ],
            "${_GridSquare03}": [
                ["style", "left", '300px'],
                ["style", "top", '0px']
            ],
            "${_GridSquare10}": [
                ["style", "top", '100px'],
                ["style", "left", '0px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '17px'],
                ["style", "left", '21px'],
                ["style", "font-size", '20px']
            ],
            "${_Text4}": [
                ["style", "top", '2px'],
                ["style", "text-align", 'left'],
                ["style", "width", '300px'],
                ["style", "left", '131px'],
                ["style", "font-size", '16px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "left", '169px'],
                ["style", "cursor", 'default']
            ],
            "${_GridSquare02}": [
                ["style", "left", '200px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '500px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["style", "top", '96px'],
                ["style", "width", '366px'],
                ["style", "left", '67px'],
                ["style", "cursor", 'default'],
                ["style", "font-size", '20px']
            ],
            "${_GridSquare11}": [
                ["style", "left", '100px'],
                ["style", "top", '100px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "width", '300px'],
                ["style", "left", '131px'],
                ["style", "font-size", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "menu": 0,
                "game": 500
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_gameOverBox}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid97", tween: [ "style", "${_menu}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Grid}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid94", tween: [ "style", "${_gameWon}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"GridSquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '99px', '99px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,249,197,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    rect: ['0px', '36px', '101px', '23px', 'auto', 'auto'],
                    align: 'center',
                    text: '',
                    id: 'text',
                    opacity: 1,
                    cursor: ['default'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,249,197,0)'],
                ["style", "opacity", '1'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '99px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '101px'],
                ["style", "width", '101px']
            ],
            "${_text}": [
                ["style", "top", '36px'],
                ["style", "text-align", 'center'],
                ["style", "cursor", 'default'],
                ["style", "height", '23px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3400,
            autoPlay: false,
            labels: {
                "0": 0,
                "2": 176,
                "4": 305,
                "8": 455,
                "16": 615,
                "32": 750,
                "64": 900,
                "128": 1055,
                "256": 1205,
                "512": 1345,
                "1024": 1500,
                "2048": 1660,
                "block": 1786,
                "3": 1929,
                "5": 2690
            },
            timeline: [
                { id: "eid113", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 1929, duration: 710 },
                { id: "eid123", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 2690, duration: 710 },
                { id: "eid112", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 1929, duration: 710 },
                { id: "eid122", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 2690, duration: 710 },
                { id: "eid63", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,249,197,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,249,197,0)'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,249,197,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,249,197,0)'}], position: 176, duration: 0 },
                { id: "eid65", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,243,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,249,197,1.00)'}], position: 305, duration: 0 },
                { id: "eid66", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,225,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,243,146,1.00)'}], position: 455, duration: 0 },
                { id: "eid67", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,189,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,225,63,1.00)'}], position: 615, duration: 0 },
                { id: "eid68", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,159,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,189,63,1.00)'}], position: 750, duration: 0 },
                { id: "eid69", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,117,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,159,63,1.00)'}], position: 900, duration: 0 },
                { id: "eid70", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(254,21,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,117,63,1.00)'}], position: 1055, duration: 0 },
                { id: "eid71", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(254,75,75,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,21,21,1.00)'}], position: 1205, duration: 0 },
                { id: "eid72", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(254,130,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,75,75,1.00)'}], position: 1345, duration: 0 },
                { id: "eid73", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(254,175,175,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,130,130,1.00)'}], position: 1500, duration: 0 },
                { id: "eid74", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(128,128,128,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,175,175,1.00)'}], position: 1660, duration: 0 },
                { id: "eid98", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,249,197,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(128,128,128,1.00)'}], position: 1929, duration: 0 },
                { id: "eid117", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,243,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,249,197,1.00)'}], position: 2690, duration: 0 }            ]
        }
    }
},
"gameOver": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '498px', '498px', 'auto', 'auto'],
                    id: 'gameOverBox',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(102,102,102,0.48)'],
                    c: [
                    {
                        rect: ['65px', '173px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 71, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        textShadow: ['rgba(170,150,11,0.65)', 0, 0, 20],
                        align: 'center',
                        id: 'Text',
                        text: 'Game over!',
                        cursor: ['default'],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["subproperty", "textShadow.blur", '15px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["style", "top", '173px'],
                ["style", "cursor", 'default'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["subproperty", "textShadow.color", 'rgba(170,150,11,1.00)'],
                ["style", "left", '65px'],
                ["style", "font-size", '71px']
            ],
            "${_gameOverBox}": [
                ["style", "top", '0px'],
                ["style", "border-style", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(102,102,102,0.48)']
            ],
            "${_TextCopy}": [
                ["style", "top", '173px'],
                ["style", "left", '65px'],
                ["style", "cursor", 'default'],
                ["style", "font-size", '71px']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid78", tween: [ "style", "${_gameOverBox}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 2000 }            ]
        }
    }
},
"gameWon": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'gameOverBox',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '498px', '498px', 'auto', 'auto'],
                    fill: ['rgba(102,102,102,0.34)'],
                    c: [
                    {
                        type: 'text',
                        font: ['Arial, Helvetica, sans-serif', 64, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        cursor: ['default'],
                        id: 'Text',
                        align: 'center',
                        text: 'Congratulations!<br>You win!',
                        textShadow: ['rgba(170,150,11,0.65)', 0, 0, 20],
                        rect: ['15px', '174px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy}": [
                ["style", "top", '173px'],
                ["style", "cursor", 'default'],
                ["style", "left", '65px'],
                ["style", "font-size", '71px']
            ],
            "${_gameOverBox}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(102,102,102,0.34)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "border-style", 'none']
            ],
            "${_Text}": [
                ["style", "top", '174px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.blur", '15px'],
                ["style", "left", '15px'],
                ["subproperty", "textShadow.color", 'rgba(170,150,11,1.00)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "cursor", 'default'],
                ["style", "font-size", '64px']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid78", tween: [ "style", "${_gameOverBox}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 2000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2361854");
