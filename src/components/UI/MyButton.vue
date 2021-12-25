<template>
    <button class="btn">
        <slot></slot>
    </button>

</template>


<script>
export default {
    name: 'my-button'
}

</script> 


<style>
  .btn {
        align-self: flex-end;
        padding: 10px 15px; 
        background-color: rgb(255, 255, 255);
        color: gray;
        border: 1px solid black;
        border-radius: 6px;

    }
</style>