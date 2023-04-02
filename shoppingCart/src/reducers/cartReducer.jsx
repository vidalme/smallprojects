import * as ACTION from "./actions";

function setLocalData(data) {
  localStorage.setItem("userCart", JSON.stringify(data));
}

function getLocalData() {
  const initCart = localStorage.getItem("userCart");
  return JSON.parse(initCart);
}

function getInitCart() {
  let initCart = getLocalData();

  // console.log(getLocalData());

  if (initCart) {
    return initCart;
  } else {
    return (initCart = {
      total: 0,
      ammount: 0,
      list: [],
    });
  }
  console.log(initCart);
}

export const initialCartState = getInitCart();

// {
//   total: 0,
//   ammount: 0,
//   list: [],
// };

// getInitCart();

//returns quantos produtos no total tem no carrinho
function getAmmount(productsCart) {
  const ammount = productsCart.reduce((acc, currentProduct) => {
    acc += currentProduct.ammount;
    return acc;
  }, 0);
  return ammount;
}

//retorna o valor total do carrinho
function getTotalValue(productsCart) {
  const total = productsCart.reduce((acc, currentProduct) => {
    acc += Number(currentProduct.price) * Number(currentProduct.ammount);
    return acc;
  }, 0);
  return total;
}

//retorna se esse produto ja existe no carrinho
function isAlreadyInCart(product, list) {
  return list.reduce((acc, currentProduct) => {
    if (currentProduct.id === product.id) acc = true;
    return acc;
  }, false);
}

export default function cartReducer(state, action) {
  // console.log(state);
  // console.log(action);

  const { type, payload } = action;
  const { counter, name, price, id } = payload;

  const { list } = state;
  // console.log(typeof list);

  const product = {
    name,
    price,
    id,
    ammount: counter,
  };

  switch (type) {
    case ACTION.ADD_TO_CART:
      //caso ja tenha esse produto no carrinho, apenas sua quantindade é alterada
      if (isAlreadyInCart(product, list)) {
        //nova lista com a quantidade desse produto adicionada
        const newList = list.map((currentProduct) => {
          currentProduct.id === id && (currentProduct.ammount += counter);
          return currentProduct;
        });

        //novo state com seus valores atualizados baseados no novo carrinho
        const newState = {
          ammount: getAmmount(newList),
          total: getTotalValue(newList),
          list: [...newList],
        };

        setLocalData(newState);
        return newState;
      } else {
        //caso esse produto nao exista ainda no carrinho,
        //um novo produto é criado e adicionado no cart
        const newList = [...list, { ...product }];
        const newState = {
          list: [...newList],
          ammount: getAmmount(newList),
          total: getTotalValue(newList),
        };

        setLocalData(newState);
        return newState;
      }

    case ACTION.REMOVE_FROM_CART:
      //nova lista removendo apenas uma unidade de um produto especifico
      const newList = list.map((currentProduct) => {
        if (Number(currentProduct.id) === Number(id)) {
          currentProduct.ammount -= 1;
        }
        return currentProduct;
      });

      const newState = {
        ...state,
        list: [...newList],
        ammount: getAmmount(newList),
        total: getTotalValue(newList),
      };

      setLocalData(newState);
      return newState;

    case ACTION.REMOVE_ALL_FROM_CART:
      const newListRemoveAll = list.filter((currentProduct) => {
        if (Number(currentProduct.id) !== Number(id)) {
          return currentProduct;
        }
      });

      const newStateRemoveAll = {
        ...state,
        list: [...newListRemoveAll],
        ammount: getAmmount(newListRemoveAll),
        total: getTotalValue(newListRemoveAll),
      };

      setLocalData(newStateRemoveAll);
      return newStateRemoveAll;

    case ACTION.EMPTY_CART:
      return null;

    default:
      console.log("nenhum outro case foi encontrado");
  }
}
