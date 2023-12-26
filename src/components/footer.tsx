import React, { ReactElement } from 'react';

interface FooterProps {
    // Define any props your component might receive
}

const MyFooter: React.FC<FooterProps> = () => {
    return (
        <div className="flex justify-between bg-[#00042D] px-[10px] py-[18px] md:px-[60px] lg:px-[120px] md:py-[24px] text-white items-center  w-full bottom-0">
            <div className='text[14px] md:text-[24px] font-extrabold '>TaskFly</div>
            <div className='text[16px] md:text-[28px] lg:text-[32px] '>Pricing | made ❤️ with by Covenant</div>
        </div>
    );
};

export default MyFooter;