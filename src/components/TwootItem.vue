<template>
    <div class="twoot-item">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{username}}
            </div>
            <div class="twoot-item__content">
                {{twoot.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwootItem',
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.twoot-item {
    background: white;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .25s ease; 
    text-align: left;
    margin: 5px;
}

.twoot-item :hover {
    transform: scale(1.1, 1.1);
}

.twoot-item__user {
    font-weight: bold;
}
</style>