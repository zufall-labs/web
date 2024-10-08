<script lang=ts>
    import type {PageServerLoad} from './$types';
    import Header from "../components/Header.svelte";
    import BottomBanner from "../components/BottomBanner.svelte";
    import InterestArea from "../components/InterestArea.svelte";
    import Widget from "../components/Widget.svelte";
    import ButtonArea from "../components/ButtonArea.svelte";

    export let data: PageServerLoad;
</script>

<div class="page">
    <div class="background-image"></div>
    <div class="content">
        <Header/>
        <div class="main-area">
            <InterestArea/>
            <BottomBanner/>
            <ButtonArea/>
            <Widget {data}/>
        </div>
    </div>
</div>


<style>
    @import '/src/lib/fonts.css';

    /* Mobile devices */
    @media screen and (max-width: 480px) {
        /* TODO: Fix CSS styling */
        .page {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            background: linear-gradient(to right, #E3E3E3, #F7F7F7, #E3E3E3);
        }

        .content {
            position: relative;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }

        .main-area {
            width: 90%;
            flex-grow: 1;
        }

        .background-image {
            position: absolute;
            top: 130px;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("/hero.png");
            background-repeat: no-repeat;
            background-position: center 140px;
            transform: scale(20%);
        }
    }

    /* iPads, Tablets */
    @media (min-width: 481px) {
        /* TODO: Fix CSS styling */
        .background-image {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("/hero.png");
            background-repeat: no-repeat;
            background-position: center 40px;
            transform: scale(30%);
        }
    }

    /* Small screens, laptops */
    @media (min-width: 769px) {
        /* TODO: Fix CSS styling */
        .background-image {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("/hero.png");
            background-repeat: no-repeat;
            background-position: center 140px;
            transform: scale(80%);
        }
    }

    /* Desktops, large Screens */
    @media (min-width: 1025px) {
        .page {
            width: 100vw;
            height: 100vh;
            background: linear-gradient(to right, #E3E3E3, #F7F7F7, #E3E3E3);
        }

        .content {
            position: relative;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            width: 1344px;
            height: 95vh;
        }

        .background-image {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("/hero.png");
            background-position: center 140px;
            background-repeat: no-repeat;
            transform: scale(95%);
        }

        .main-area {
            flex-grow: 1;
            position: relative;
        }
    }

    /* Extra large Screens, TV */
    @media (min-width: 1201px) {
        /* TODO: Fix CSS styling */
    }

</style>
