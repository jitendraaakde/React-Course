function Item({ val, handleClick }) {

  return (
    <li class="list-group-item"> {val} <button type="button" class="btn btn-info"
      onClick={handleClick}>Buy </button>
    </li >
  );
}
export default Item;
