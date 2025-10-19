<template>
    <button class="trash-bttn">
        <img src="../icons/trash.png" alt="trash" draggable="false" />
    </button>
</template>

<script>
    export default {};
</script>

<style scoped lang="scss">
    .trash-bttn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        box-sizing: border-box;
        cursor: pointer;

        min-width: 32px;
        width: 32px;
        min-height: 32px;
        height: 32px;

        border-radius: 10px;
        border: none;
        background-color: transparent;

        img {
            width: 28px;
            height: auto;
            transition: all 0.2s ease-in-out;
            opacity: 50%;
        }

        &:hover {
            background-color: red;
            img {
                opacity: 100%;
                width: 25px;

                animation: trash-hover 0.3s infinite;
            }
        }

        &:active {
            background-color: #222121;

            img {
                width: 15px;
                animation: none;
            }
        }
    }

    @keyframes trash-hover {
        from {
            transform: rotate(-15deg);
        }
        50% {
            transform: rotate(15deg);
        }
        to {
            transform: rotate(-15deg);
        }
    }
</style>
