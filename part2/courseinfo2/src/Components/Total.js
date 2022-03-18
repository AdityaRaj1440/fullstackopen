const Total = ({ sum }) => {
    let total=0
    console.log("res", sum[2])
    total= sum.reduce( (s,p) => {
      console.log(typeof s, s);
      if(typeof s===typeof p)
       return(
      parseInt(s.exercises)+parseInt(p.exercises))
      else
       return(
         s+p.exercises
       )
    })
    return (
      <h4>Number of exercises {total}</h4>
    )
  }

  export default Total