<div class="body">
    <div class="side">
        <div class="text">Research <br/>Internships</div>
        <div class="button">APPLY NOW</div>
    </div>
    <div class="divider">
        <svg height="115" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="115" style="stroke:#000000; stroke-width: 4" />
        </svg>
    </div>
    <div class="side">
        <div class="text">Open for <br/>investment</div>
        <div class="button">INVEST IN US</div>
    </div>
</div>

<style>
    @import '/src/lib/fonts.css';

    @media screen and (max-width: 480px) {
        .body{
            display: none;
        }
    }

    @media(min-width: 1025px){
        .body{
            font-family: 'HelveticaNowDisplay', sans-serif;
            display: flex;
            flex-direction: row;
            position: absolute;
            right: 0;
            top: 50px;
            width: 321px;
            height: 115px;
        }

        .side{
            flex-grow: 1;
            padding-left: 5%;
        }

        .side .text{
            font-weight: bold;
        }

        .side .button{
            position: absolute;
            border: 1px solid black;
            border-radius: 7px;
            height: 40px;
            width: 131px;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>