function ordenarDoisNumeros(arr) {
  if (arr[0] > arr[1]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  return arr;
}

console.log(ordenarDoisNumeros([8, 3]));