<div class="Header">
    <div class="Left">
        <img src="zufall-logo-color.png" alt="Zufall Logo Colored">
        <p>Zufall Labs</p>
    </div>
    <div class="Middle">
        <img src="menu-stripes.svg" alt="Menu stripes">
    </div>
    <div class="Right">
        Github
    </div>
</div>


<style>
    @import '/src/lib/fonts.css';

    .Header{
        display: flex;
        align-items: center;
        margin: 63px auto 0 auto;
        height: 63px;
        width: 1344px;
        border-radius: 7px;
        background: linear-gradient(to right, #ECECEC, #FCFCFC, #ECECEC);
    }

    .Header .Left{
        display: flex;
        height: 49px;
        width: 160px;
        margin-left: 7px;
    }

    .Header .Left img{
        width: 49px;
        border-radius: 7px;
    }

    .Header .Left p{
        margin-left: auto;
        font-family: 'HelveticaNowDisplay', sans-serif;
        font-weight: bold;
    }

    .Header .Middle{
        margin: 0 auto;
    }

    .Header .Right{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
        width: 130px;
        height: 49px;
        border-radius: 7px;
        background: black;
        font-family: 'HelveticaNowDisplay', sans-serif;
        font-weight: bold;
        color: white;
    }

</style>