<template>
    <div class="mangoes">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Mangoes',
            message: 'I like mangoes'
        }
    }
};
</script>

<style>
.mangoes{
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
}</style>   