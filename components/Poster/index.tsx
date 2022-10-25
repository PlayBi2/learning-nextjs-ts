const btnCSS = "px-[25px] py-[12px] mb-[40px] mx-[5px] text-[16px] bg-white text-black leading-[1.1] font-semibold rounded-[30px] hover:text-white hover:bg-primary"

const Poster = () => {
    return (
        <div className="w-[100%] h-[386px] relative text-white text-center mb-[80px]">
            <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/bg-1.jpg?v=1630434564" className="object-center object-cover w-[100%] h-[100%]" />
            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                <div>
                    <h2 className="text-white uppercase text-[80px] tracking-[0px] my-[20px]">New Puppy or Kitten?</h2>
                    <div className="text-[24px] mb-[40px]">
                        <p className="w-[420px] mx-[auto] font-semibold leading-[1.4]">Discover everything you need to make them feel at home</p>
                    </div>
                    <div className="flex justify-center">
                        <button className={btnCSS}>
                            Shop Kitten
                        </button>
                        <button className={btnCSS}>
                            Shop Puppy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster