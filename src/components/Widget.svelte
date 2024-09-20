<script lang=ts>
    export let data;
    console.log(data);
    const issues = data.data.filter((item: any) => !item.pull_request);
</script>

<div class="body">
    <div class="content-area">
        <div class="title">
            <p>Currently</p>
            <p>working on</p>
            <div style="margin-bottom: 6px" class="divider">
                <svg height="5" width="120" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="120" y2="0" style="stroke:#000000; stroke-width: 3"/>
                </svg>
            </div>
        </div>
        <div class="main-content">
            {#each issues as issue}
                - {issue.title}
                <div style="margin-top: 8px"></div>
            {/each}
        </div>
    </div>
</div>

<style>
    @import '/src/lib/fonts.css';

    @media screen and (max-width: 480px) {
        .body {
            display: none;
        }
    }

    @media (min-width: 1025px) {
        .body {
            font-family: 'HelveticaNowDisplay', sans-serif;
            font-weight: bold;
            position: absolute;
            background-color: rgb(255 255 255 / 40%);
            backdrop-filter: blur(10px);
            height: 384px;
            width: 350px;
            border-radius: 15px;
            bottom: 0;
            right: 0;
        }

        .title {
            position: fixed;
        }

        .content-area {
            justify-self: center;
            width: 80%;
            height: 80%;
            margin: 10% 10%;
            overflow: hidden;
        }

        .body p {
            height: 7px;
        }

        .main-content {
            height: calc(100% - 100px);
            margin-top: 100px;
            overflow-y: auto;
            scrollbar-width: none; /* Firefox  - Removes scrollbar*/
            -ms-overflow-style: none;
        }

        .main-content::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
        }
    }
</style>
