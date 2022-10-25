
const linkCSS: string = ""

const BrandLink = ({brand}:any) => {
    return (
        <a href="" className="flex justify-center items-center border-[1px] border-solid border-[#e6e6e6] border-r-0">
            <img src={brand.imgSrc} />
        </a>
    )
}


export default BrandLink