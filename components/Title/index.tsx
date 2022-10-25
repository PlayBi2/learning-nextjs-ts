

const Title = ({props}:any) => {

    const {textBold, textNor} = props

    return (
        <div className="text-[40px] text-center font-semibold mb-[40px] text-center">
            <span className="text-primary">{textBold} </span>
            {textNor}
        </div>
    )
}


export default Title