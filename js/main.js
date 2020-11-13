const search = document.getElementById('search');
const productList = document.getElementById('match-list');

//Obter Produtos do arquivo Json
const searchproduct = async searchText => {
  const res = await fetch('../data/products.json');
  const products   = await res.json();
  

//Get matches to current text input
let items = products.filter(product => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return product.title.match(regex) || state.path.match(regex);
});

if (searchText.length === 0) {
 items = [];
  productlist.innerHTML = '';
}
  outputHtml(items);



// Show results in HtML
const outputHtml = items => {
  if (items.length > 0) {
    const html = items
    .map(
      item => `
      <div class="card card-body mb-1">
        <h4 class="card-title">${product.title} </h4>
        
        <div class="card-action">
        <small>${product.path}</small>
      </div>
      
      `).join('');
  
  }

};


document.getElementById('productlist').innerHTML = html;
 }
};
document.getElementById('search').addEventListener('input', () => searchproduct(search.value))
;
