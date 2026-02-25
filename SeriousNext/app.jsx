function Header({title}){
    console.log(title);
    return <h1>{title}</h1>;
}
function Homepage(){
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return(
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
const domNode = document.getElementById("app")
const root = ReactDOM.createRoot(domNode);
root.render(<Homepage />);