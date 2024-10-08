<div class="body">
    <div class="bottom-banner">
        <div class="left-side">
            Join us at Zufall Labs
        </div>
        <div class="divider">
            <svg height="64" width="3" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="0" y2="64" style="stroke:#000000; stroke-width: 3"/>
            </svg>
        </div>
        <div class="right-side">
            Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut
            labore et dolore magna aliqua.
        </div>
    </div>
</div>

<style>
    @import '/src/lib/fonts.css';

    /* Mobile devices */
    @media screen and (max-width: 480px) {
        /* TODO: Fix CSS styling */

        .body {
            font-family: 'HelveticaNowDisplay', sans-serif;
            position: relative;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .bottom-banner {
            width: 80vw;
            margin-top: 900px;
            display: flex;
            flex-direction: row;
        }

        .left-side {
            font-weight: bold;
            align-self: center;
            margin-right: auto;
        }

        .right-side {
            align-self: center;
            margin-left: 15px;
        }
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
            height: 80%;
            position: absolute;
            margin-top: 77vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .bottom-banner {
            width: 491px;
            display: flex;
            flex-direction: row;
        }

        .left-side {
            font-weight: bold;
            align-self: center;
            margin-right: auto;
        }

        .right-side {
            align-self: center;
            margin: auto;
        }
    }

    /* Extra large Screens, TV */
    @media (min-width: 1201px) {
        /* TODO: Fix CSS styling */
    }

</style>
