const Filters = ({setOrder,setLimit }) => {
  return (
    <div style={{ display: "flex", gap:"2rem" }}>
      <div>
        <label>
          <input
            data-testid="order-filter"
            type="checkbox"
            defaultChecked
            onChange={()=>{setOrder("dec")}}
            />
            Ascending
        </label>
      </div>
      <div>

        <label>
          <select
            data-testid="per-page-filter"

            onChange={(ele) => {
              
              setLimit(+ele.target.value)
            }}
            
          >
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          Per page

        </label>
      </div>
    </div>
  );
};
export default Filters;
