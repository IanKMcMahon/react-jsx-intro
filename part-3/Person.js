const Person = (props) => {
return (
<div>
  <p> 
     Learn some more information about this person:
  </p>
  <p> Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}</p>
  <p> Age: {props.age} </p>
  <h3> 
    {props.age >= 18 ? "please go vote!" : "you must be 18"} 
  </h3>
  <p>Hobbies</p>
  <ul>
    {props.hobbies.map((hobby, index) => (
    <li key={index}>{hobby}</li>
    ))}
  </ul>
</div>
)
}