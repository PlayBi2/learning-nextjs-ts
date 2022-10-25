

const AboutItem = ({data}:any) => {
    return (
        <div className="text-center">
            <img src={data.imgSrc} className="mx-[auto] mb-[10px]"/>
            <div className="text-[24px] font-semibold leading-[1.1]">
                {data.title}
            </div>
            <div className="text-[#999999] mt-[10px]">
                {data.slogan}
            </div>
        </div>
    )
}


export default AboutItem