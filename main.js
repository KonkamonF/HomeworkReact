function App() {
  const sty = {
    backgroundColor: "white",
    borderRadius: "10px",
    fontFamily: 'Sans-serif',
    width : '500px',
    margin : 'auto'
  };
  const styy = {
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  };
  const styyy = {
    color: "#666a8a",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  };
  const font = { fontSize: "28px", fontWeight: "bold" , marign:'0'};
  const fonts = { color: "#666a8a", fontWeight: "normal" , paddingBottom:'24px'};
  const layer = {display:'flex', flexDirection: 'column' ,justifyContent: "center",alignItems :'center',marign:'0'}
  return (
    <div style={sty}>
      <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
      <p style={styy}>Julienne Moore</p>
      <p style={styyy}>julianne.moore@company.com</p>
      <div style={styy}>
        <div style={layer}>
          <div style={font}>25</div>
          <div style={fonts}>Posts</div>
        </div>
        <div>
          <div style={font}>350</div>
          <div style={fonts}>Following</div>
        </div>
        <div>
          <div style={font}>1.5k</div>
          <div style={fonts}>Followers</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
