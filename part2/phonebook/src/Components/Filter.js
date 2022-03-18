const Filter = ({filterName}) => {
    return (
      <>
      <h3>filter</h3>
            filter shown with: <input id="filter" onInput={filterName} />
      </>
    )
  }

export default Filter