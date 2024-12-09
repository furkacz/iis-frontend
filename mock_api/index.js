const AddExample = require('../src/schemas/responses/examples/Add.example.json');
const SearchExample = require('../src/schemas/responses/examples/Search.example.json');

module.exports = () => ({
  Add: AddExample,
  Search: SearchExample,
});
