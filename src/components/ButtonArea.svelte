<div class="body">
    <div class="side">
        <div class="text">Research <br/>Internships</div>
        <a style="text-decoration: none" href="mailto:backoffice@zufall.ai">
            <div class="button">APPLY NOW</div>
        </a>
    </div>
    <div class="divider">
        <svg height="115" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="115" style="stroke:#000000; stroke-width: 4"/>
        </svg>
    </div>
    <div class="side">
        <div class="text">Open for <br/>investment</div>
        <a style="text-decoration: none" href="mailto:backoffice@zufall.ai">
            <div class="button">INVEST IN US</div>
        </a>
    </div>
</div>

<style>
    @import '/src/lib/fonts.css';

    @media screen and (max-width: 480px) {
        /* TODO: Fix CSS styling */
        .body {
            font-family: 'HelveticaNowDisplay', sans-serif;
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 600px;
            width: 100%;
            height: 200px;
        }

        .side {
            flex-grow: 1;
            padding-left: 5%;
        }

        .divider {
            display: none;
        }

        .side .text {
            font-weight: bold;
        }

        .side .button {
            position: absolute;
            border: 1px solid black;
            border-radius: 7px;
            height: 40px;
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #89458a;
        }
    }

    /* Mobile devices */
    @media screen and (max-width: 480px) {
        /* TODO: Fix CSS styling */
    }

    /* iPads, Tablets */
    @media (min-width: 481px) {
        /* TODO: Fix CSS styling */
    }

    /* Small screens, laptops */
    @media (min-width: 769px) {
        /* TODO: Fix CSS styling */
    }

    /* Desktops, large Screens */
    @media (min-width: 1025px) {
        .body {
            font-family: 'HelveticaNowDisplay', sans-serif;
            display: flex;
            flex-direction: row;
            position: absolute;
            right: 0;
            top: 50px;
            width: 321px;
            height: 115px;
        }

        .side {
            flex-grow: 1;
            padding-left: 5%;
        }

        .side .text {
            font-weight: bold;
        }

        .side .button {
            position: absolute;
            border: 1px solid black;
            border-radius: 7px;
            height: 40px;
            width: 131px;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #89458a;
        }
    }

    /* Extra large Screens, TV */
    @media (min-width: 1201px) {
        /* TODO: Fix CSS styling */
    }

</style>
