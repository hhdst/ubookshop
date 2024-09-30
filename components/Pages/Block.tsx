

export const Block = props => {

    if (!props.state.cart) {
        props.state.cart = []
      }


    let size = props.state.cart.includes(props.book.title)?20:25

    return <c-c style={{
        width: 200 , flex: 1 , minWidth: 200 ,
        position: "relative", backgroundColor:"#0000004B",
        borderRadius:12 , margin:"15px",boxShadow:"0px 0px 10px 3px rgba(0 0 0 / 0.58)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{
                width: "100%" ,
                height: 200 ,
                objectFit: "fill" ,
                minWidth: 150 ,
                borderTopLeftRadius:8 ,
                borderTopRightRadius:8 ,
            }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()

            }} />

        <f-cc style={{ padding: "20px 8px", width: "100%", height:40 , direction:"ltr" }}>

            <f-12 style={{ fontSize:15 }}>{props.book.title} </f-12>

        </f-cc>

        <hr style={{width:"80%", opacity:0.2}}/>

        <f-csb style={{ width: "100%", padding: "5px 0" }}>

            <img src={props.state.cart.includes(props.book.title)?
            "https://cdn.ituring.ir/research/16/Tic.webp":
            "https://cdn.ituring.ir/research/16/S.B.webp"}

            style={{height:size, width:size, objectFit:"contain",
                margin:"0 10px"
            }}/>

            <c-x style={{direction:"ltr", margin:"0 10px"}}>
                <f-12> <del>{(props.book.price as number).toLocaleString("fa-IR")} تومان </del> </f-12>
                <f-15> {(props.book.price*0.8 as number).toLocaleString("fa-IR")} تومان </f-15>
            </c-x>
        </f-csb>

    </c-c>
}

