//function to determine if something an item is discounted
function isItDiscounted(item) {
  if (item.discount > 0){
    return true
  } else {
    return false
  }
}

function selectSaleItems(items) {
  //add filter to pass an array with only sale items on it
  //or items that have been discounted
  return items.filter(isItDiscounted)
}

module.exports = selectSaleItems
