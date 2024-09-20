<div class="body">
    <div class="top-part">
        <div class="headline">
            Entropy <br/>& AI as a <br/>Service
        </div>
        <div class="text-area">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </div>
        <div class="contact-button">GET IN TOUCH</div>
    </div>
    <div class="bottom-banner">
        <div class="left-side">
            Join us at <br/>Zufall Labs
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

    @media screen and (max-width: 480px) {
        .body {
            font-family: 'HelveticaNowDisplay', sans-serif;
            position: relative;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    @media (min-width: 1025px) {
        .body {
            font-family: 'HelveticaNowDisplay', sans-serif;
            height: 80%;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .headline {
            font-size: 600%;
            font-weight: bold;
            line-height: 100%;
        }

        .text-area {
            width: 251px;
            margin: 30px 0;
        }

        .contact-button {
            width: 167px;
            height: 40px;
            border: 1px solid black;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
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
</style>
