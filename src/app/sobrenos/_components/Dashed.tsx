
export default function Dashed() {
    return (
        // ml is the size of the Icon minus the width of the dash
        <div className=" ml-[34px] w-fit my-1 ">
            <div className="flex flex-col gap-[6px]">
                <Dash height={2}/>
                <Dash height={3}/>
                <Dash height={2}/>
            </div>
        </div>
    )
}


function Dash({height}: {height: number}) {
    const h = height.toString()
    return <div className={`w-[5px] bg-[#389636] rounded-sm  h-${h}`} />;
}