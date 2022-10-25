

const BannerItem = ({props}:any) => {

    return (
        <div className="w-[100%] relative">
            <img src={props.ImageUrl} />
            <div className="content absolute w-[100%] px-[45px] top-[50%] inset-x-0 translate-y-[-50%]">
                <div className="title font-semibold text-[14px] mb-[10px] ">
                    {props.title}
                </div>
                <div className="name text-[32px] font-bold mb-2">
                    <p className="leading-[1.1]">{props.firstName}</p>
                    <p className="leading-[1.1]">{props.lastName}</p>
                </div>
                <button className="hover:bg-black bg-primary mt-4 text-white text-[16px] font-semibold px-[25px] py-[8px] border-[1px] border-solid border-primary rounded-[30px] block">Read More</button>
            </div>
        </div>
    )
}

export default BannerItem