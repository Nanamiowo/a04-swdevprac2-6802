import TopMenuItem from "./TopMenuItem"

export default function TopMenu() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      background: "black",
      padding: "50px",
      fontSize: "50px"
    }}>

      <div style={{marginRight:"20px"}}>
        <TopMenuItem title="Booking" pageRef="/booking/"/>
      </div>

      <img src="/img/logo.png" className="h-50" />

    </div>
  )
}