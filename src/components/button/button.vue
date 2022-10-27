<template>
  <button class="pi-btn"><slot></slot></button>
</template>

<script lang="ts" setup>
interface Props {
  color: string
}

const props = defineProps<Props>()
</script>

<style lang="ts" scoped>
css({
    '.pi-btn': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: '4px',
      fontWeight: '500',
      border: 'none',
      '&:hover': {
      backgroundColor: (props) => '{colors.black}'
    },
    }
})
</style>
