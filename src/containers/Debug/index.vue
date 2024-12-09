<template>
  <div class="Debug">
    <table class="Debug__table">
      <tr class="Debug__table--row">
        <th class="Debug__table--row-header">Schema:</th>
        <th class="Debug__table--row-header">Example:</th>
        <th class="Debug__table--row-header">Status:</th>
        <th class="Debug__table--row-header">Errors:</th>
      </tr>
      <tr class="Debug__table--row">
        <td class="Debug__table--row-cell" colspan="4">Requests</td>
      </tr>
      <tr class="Debug__table--row" v-for="test in requests" :key="test.validator">
        <td class="Debug__table--row-cell">{{ test.validator }}</td>
        <td class="Debug__table--row-cell">{{ test.example }}</td>
        <td class="Debug__table--row-cell">{{ test.status }}</td>
        <td class="Debug__table--row-cell">
          <span class="Debug__table--row-cell-error" v-for="error in test.errors"
            :key="error.data.schema.$id">{{ error.message }}</span>
        </td>
      </tr>
      <tr class="Debug__table--row">
        <td class="Debug__table--row-cell" colspan="4">Responses</td>
      </tr>
      <tr class="Debug__table--row" v-for="test in responses" :key="test.validator">
        <td class="Debug__table--row-cell">{{ test.validator }}</td>
        <td class="Debug__table--row-cell">{{ test.example }}</td>
        <td class="Debug__table--row-cell">{{ test.status }}</td>
        <td class="Debug__table--row-cell">
          <span class="Debug__table--row-cell-error" v-for="error in test.errors"
            :key="error.data.schema.$id">{{ error.message }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
