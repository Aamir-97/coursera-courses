const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <din className="Overlay"></din>
      <din className="Alert">{children}</din>
    </>
  );
};

const DialogButton = ()=> {
    return (
        <Button backgroundColor={'red'}> Delete</Button>
    )

}

function DialgBox(params) {
  return (
    <>
      <div className="App">
        <h1>DialogBox</h1>
        <header>Littele Lemon Restaurant </header>
      </div>
    </>
  );
}

export default DialgBox;
