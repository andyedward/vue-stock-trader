<template>
    <div>
        <h1>Trade</h1>
        <h6>You may save & Load</h6>
        <h6>Click on end day to begin new day</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

