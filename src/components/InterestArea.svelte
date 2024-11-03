<div class="body">
    <div class="top-part">
        <div class="headline">
            Entropy <br/>& AI as a <br/>Service
        </div>
        <div class="text-area">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </div>
        <a style="text-decoration: none" href="mailto:backoffice@zufall.ai">
            <div class="contact-button">GET IN TOUCH</div>
        </a>
    </div>
</div>

<style>
    @import "/src/lib/fonts.css";

    /* Mobile devices */
    @media screen and (max-width: 480px) {
        /* TODO: Fix CSS styling */
        .body {
            font-family: "HelveticaNowDisplay", sans-serif;
            position: relative;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .top-part {
            text-align: center;
        }

        .headline {
            font-size: 400%;
            font-weight: bold;
            line-height: 100%;
        }

        .text-area {
            width: 80vw;
            margin: 30px auto 0 auto;
        }

        .contact-button {
            width: 100%;
            height: 40px;
            border: 1px solid black;
            border-radius: 7px;
            display: flex;
            margin: 10px auto 0 auto;
            align-items: center;
            justify-content: center;
            color: #89458a;
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
            font-family: "HelveticaNowDisplay", sans-serif;
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
            color: #89458a;
        }
    }

    /* Extra large Screens, TV */
    @media (min-width: 1201px) {
        /* TODO: Fix CSS styling */
    }

</style>
