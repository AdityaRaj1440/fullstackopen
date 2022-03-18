import Part from "./Part"

const Content = ({ parts }) => {
  return (
    <>
    {parts.map((item, index) => {
      return (
        <Part
        part={item} key= {index} 
      />
      )
    })}
  </>
  )
}
  
export default Content