<template>
  <!-- <div> -->

  <div id="123">
    <template>
      <label>{{ label }}</label>
      <input
        v-bind="$attrs"
        :placeholder="label"
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>
