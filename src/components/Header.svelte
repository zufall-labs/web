<div class="Header">
    <div class="Left">
        <img src="zufall-logo-color.png" alt="Zufall Logo Colored">
        <p>Zufall Labs</p>
    </div>
    <div class="Middle">
        <img src="menu-stripes.svg" alt="Menu stripes">
    </div>
    <div class="github-button">
        <a style="text-decoration: none" target="_blank" href="https://github.com/zufall-labs/">
            <div class="button">Github</div>
        </a>
    </div>
</div>


<style>
    @import "/src/lib/fonts.css";

    /* Common styles */
    .Header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 63px;
        background: linear-gradient(to right, #ECECEC, #FCFCFC, #ECECEC);
        border-radius: 7px;
        margin: 30px auto 0 auto;
    }

    .Header .Left {
        display: flex;
        height: 49px;
        width: 160px;
        margin-left: 7px;
    }

    .Header .Left img {
        width: 49px;
        border-radius: 7px;
    }

    .Header .Left p {
        font-family: "HelveticaNowDisplay", sans-serif;
        font-weight: bold;
    }

    .Header .github-button .button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 49px;
        border-radius: 7px;
        background: black;
        font-family: "HelveticaNowDisplay", sans-serif;
        font-weight: bold;
        color: white;
        margin-right: 7px;
    }


    /* Mobile devices */
    @media screen and (max-width: 480px) {
        .Header {
            width: 90vw;
        }

        .Header .Left p {
            margin-left: 10px;
        }

        .Middle {
            display: none;
        }
    }

    /* iPads, Tablets */
    @media (min-width: 481px) {
        .Header {
            width: 90vw;
        }

        .Header .Left p {
            margin-left: 10px;
        }

        .Middle {
            margin: 0 auto;
        }
    }

    /* Small screens, laptops */
    @media (min-width: 769px) {
        .Header {
            margin: 63px auto 0 auto;
            width: 1344px;
        }

        .Header .Left p {
            margin-left: auto;
        }

        .Header .Middle {
            margin: 0 auto;
        }
    }

    /* Desktops, large Screens */
    @media (min-width: 1025px) {
        /* Same as small screens / laptops */
    }

    /* Extra large Screens, TV */
    @media (min-width: 1201px) {
        /* Same as small screens / laptops */
    }

</style>
